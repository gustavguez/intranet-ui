import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TableActionArgument } from 'src/app/shared/components/table/domain/table-action.argument';
import { TableEditActionModel } from 'src/app/shared/components/table/domain/table-edit-action.model';
import { TableHeaderModel } from 'src/app/shared/components/table/domain/table-header.model';
import { TableOptionsModel } from 'src/app/shared/components/table/domain/table-options.model';
import { ApiService } from 'src/app/shared/domain/api.service';
import { environment } from 'src/environments/environment';
import { UnitForm } from '../../domain/unit-form.interface';
import { Unit } from '../../domain/unit.interface';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
})
export class UnitsComponent implements OnInit {
  //Models
  loading: boolean = true;
  formLoading: boolean = false;
  error: string = '';
  displayForm: boolean = false;
  tableOptions: TableOptionsModel = {
    fields: ['name', 'plural'],
    actions: [new TableEditActionModel()],
    headers: [
      new TableHeaderModel('Nombre'),
      new TableHeaderModel('Nombre en plural'),
    ],
  };
  models: Unit[] = [];
  form: FormGroup<UnitForm> = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', {
      validators: Validators.required,
      nonNullable: true,
    }),
    plural: new FormControl('', {
      validators: Validators.required,
      nonNullable: true,
    }),
  });

  //Inject services
  constructor(private apiService: ApiService) {}

  //On component init
  ngOnInit(): void {
    //Fetch data
    this.fetchData();
  }

  //Custom events
  onCancelForm(): void {
    this.closeForm();
  }

  onShowForm(): void {
    //Display form
    this.displayForm = true;

    //Empty form
    this.form.reset();
  }

  onSubmit(): void {
    //Check form valid
    if (!this.form.valid) {
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

  onAction(args: TableActionArgument): void {
    //Check instance of
    if (args.action instanceof TableEditActionModel) {
      this.editModel(args.model);
    }
  }

  //Helper functions
  private fetchData(): void {
    //Set loading
    this.loading = true;

    //Do request
    this.apiService.fetch(environment.healthUnitsUri).subscribe({
      next: (response: any) => {
        //Load data
        this.models = <Unit[]>response ?? [];

        //Stop loading
        this.loading = false;
      },
      error: () => {
        //Stop loading
        this.loading = false;
      },
    });
  }

  private editModel(model: Unit): void {
    //Load form
    this.form.patchValue(model);

    //Show form
    this.displayForm = true;
  }

  private saveModel(id: string, value: any): void {
    //Check id
    if (id) {
      //Do edit
      this.apiService.edit(environment.healthUnitsUri, id, value).subscribe({
        next: (response: any) => {
          //Find in models and update
          this.models.every((unit: Unit) => {
            if (unit.id == id) {
              //Update object
              unit.name = value.name;
              unit.plural = value.plural;
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
      this.apiService.add(environment.healthUnitsUri, value).subscribe({
        next: (response: any) => {
          //Load data
          this.models.push(<Unit>response);
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

  private closeForm(): void {
    //Stop loading
    this.formLoading = false;

    //Clear form and hide it
    this.form.reset();
    this.displayForm = false;
  }
}
