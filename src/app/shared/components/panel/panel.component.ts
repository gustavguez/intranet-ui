import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { UntypedFormGroup } from '@angular/forms';
import { forkJoin, map, mergeMap, Observable, Observer, of, tap } from 'rxjs';
import { ApiService } from '../../domain/api.service';
import { Model } from '../../domain/model.interface';
import { TableActionArgument } from '../table/domain/table-action.argument';
import { TableDeleteActionModel } from '../table/domain/table-delete-action.model';
import { TableEditActionModel } from '../table/domain/table-edit-action.model';
import { PanelOptions } from './panel-options.interface';
import { PanelRemoteDependency } from './panel-remote-dependency.interface';

@Component({
  selector: 'app-panel',
  templateUrl: './panel.component.html',
})
export class PanelComponent implements OnInit {
  //Inputs
  @Input() options?: PanelOptions = {};
  @Input() form?: UntypedFormGroup;
  @Input() updateModel?: (json: any, model: any) => void;

  //Outputs
  @Output() onAction: EventEmitter<TableActionArgument> = new EventEmitter();
  @Output() onOpenForm: EventEmitter<any> = new EventEmitter();
  @Output() onRemoteDependenciesEnd: EventEmitter<PanelRemoteDependency[]> =
    new EventEmitter();

  //Models
  loading: boolean = true;
  formLoading: boolean = false;
  error: string = '';
  displayForm: boolean = false;
  modelToDelete: Model | null = null;
  models: Model[] = [];

  //Inject services
  constructor(private apiService: ApiService) {}

  //On component init
  ngOnInit(): void {
    //Set loading
    this.loading = true;

    //Fetch data
    this.fetchData()
      .pipe(
        //Fetch remote dependencies
        mergeMap(() => {
          if (!this.hasRemoteDependencies()) {
            return of(true);
          }
          return this.fetchRemoteDependencies();
        })
      )
      .subscribe(() => {
        //Set loading
        this.loading = false;
      });
  }

  //Custom events
  onCancelForm(): void {
    this.closeForm();
  }

  onShowForm(): void {
    //Emit event
    this.onOpenForm.emit();

    //Display form
    this.displayForm = true;

    //Empty form
    this.form?.reset();
  }

  onSubmit(): void {
    //Check form valid
    if (!this.form?.valid) {
      return;
    }

    //Form loading
    this.formLoading = true;

    //Continue
    const obj: any = this.form.value;
    const id: string = obj.id;

    //Remove id from obj
    delete obj.id;

    //Process save
    this.saveModel(id, obj);
  }

  onCloseDeleteDialog(): void {
    this.modelToDelete = null;
  }

  onConfirmDeleteDialog(): void {
    this.deleteModel();
  }

  onTableAction(args: TableActionArgument): void {
    //Check instance of
    if (args.action instanceof TableEditActionModel) {
      this.editModel(args.model);
      return;
    }
    if (args.action instanceof TableDeleteActionModel) {
      this.loadDeleteModel(args.model);
      return;
    }

    //Default emit to parent
    this.onAction.emit(args);
  }

  //Helper functions
  private fetchData(): Observable<any> {
    //Do request
    return this.apiService.fetch(this.options?.endpoint ?? '').pipe(
      tap((response: any) => {
        //Load data
        this.models = <Model[]>response ?? [];
      })
    );
  }

  private fetchRemoteDependencies(): Observable<PanelRemoteDependency[]> {
    //Do request
    const observables: Observable<any>[] = [];

    //Do a fetch for each dependecy
    if (this.options?.remoteDependencies instanceof Array) {
      this.options?.remoteDependencies.forEach(
        (dependency: PanelRemoteDependency) => {
          observables.push(
            this.apiService.fetch(dependency.endpoint).pipe(
              map((response: any) => {
                dependency.data = response;
                return dependency;
              })
            )
          );
        }
      );
    }

    //Join dependencies
    return forkJoin(observables).pipe(
      tap((dependencies: PanelRemoteDependency[]) =>
        this.onRemoteDependenciesEnd.emit(dependencies)
      )
    );
  }

  private hasRemoteDependencies(): boolean {
    return !!(
      this.options?.remoteDependencies &&
      this.options?.remoteDependencies?.length > 0
    );
  }

  private editModel(model: Model): void {
    //Emit event
    this.onOpenForm.emit();

    //Load form
    this.form?.patchValue(model);

    //Show form
    this.displayForm = true;
  }

  private loadDeleteModel(model: Model): void {
    //Load model to delete
    this.modelToDelete = model;
  }

  private saveModel(id: string, value: any): void {
    //Check id
    if (id) {
      //Do edit
      this.apiService.edit(this.options?.endpoint ?? '', id, value).subscribe({
        next: (response: any) => {
          //Find in models and update
          this.models?.every((unit: Model) => {
            if (unit.id == id && this.updateModel) {
              //Update object
              this.updateModel(value, unit);
              return false;
            }
            return true;
          });

          //Close form
          this.closeForm();
        },
        error: (error: any) => {
          //Stop loading
          this.formLoading = false;
        },
      });
    } else {
      //Do add
      this.apiService.add(this.options?.endpoint ?? '', value).subscribe({
        next: (response: any) => {
          //Load data
          this.models?.push(<Model>response);
          //Close form
          this.closeForm();
        },
        error: (error: any) => {
          //Stop loading
          this.formLoading = false;
        },
      });
    }
  }

  private deleteModel(): void {
    const modelToDelete: Model | null = this.modelToDelete;

    //Clear modelToDelete
    this.modelToDelete = null;

    //Check model to delete
    if (!modelToDelete?.id) {
      return;
    }

    //Start loading
    this.loading = true;

    //Do delete
    this.apiService
      .delete(this.options?.endpoint ?? '', modelToDelete.id)
      .subscribe({
        next: (response: any) => {
          //Load data
          const index: number =
            this.models?.findIndex((unit: Model) => {
              return unit.id == modelToDelete.id;
            }) ?? -1;

          //Check index
          if (index > -1) {
            this.models?.splice(index, 1);
          }

          //Stop loading
          this.loading = false;
        },
        error: (error: any) => {
          //Stop loading
          this.loading = false;
        },
      });
  }

  private closeForm(): void {
    //Stop loading
    this.formLoading = false;

    //Clear form and hide it
    this.form?.reset();
    this.displayForm = false;
  }
}
