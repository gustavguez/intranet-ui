import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
    this.displayForm = false;
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

    //Do add
    this.apiService.add(environment.healthUnitsUri, obj).subscribe({
      next: (response: any) => {
        //Load data
        this.models.push(<Unit>response);

        //Stop loading
        this.formLoading = false;

        //Clear form and hide it
        this.form.reset();
        this.displayForm = false;
      },
      error: (error: any) => {
        console.log(error);

        //Stop loading
        this.formLoading = false;
      },
    });
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
}
