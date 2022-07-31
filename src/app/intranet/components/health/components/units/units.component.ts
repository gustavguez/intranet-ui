import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { TableHeaderModel } from 'src/app/shared/components/table/domain/table-header.model';
import { TableOptionsModel } from 'src/app/shared/components/table/domain/table-options.model';
import { ApiService } from 'src/app/shared/domain/api.service';
import { UnitForm } from '../../domain/unit-form.interface';
import { Unit } from '../../domain/unit.interface';

@Component({
  selector: 'app-units',
  templateUrl: './units.component.html',
})
export class UnitsComponent implements OnInit {
  //Models
  loading: boolean = false;
  error: string = '';
  displayForm: boolean = false;
  tableOptions: TableOptionsModel = {
    fields: ['name'],
    headers: [new TableHeaderModel('Nombre')],
  };
  models: Unit[] = [
    { name: 'prueba' },
    { name: 'prueba' },
    { name: 'prueba' },
    { name: 'prueba' },
    { name: 'prueba' },
    { name: 'prueba' },
    { name: 'prueba' },
  ];
  form: FormGroup<UnitForm> = new FormGroup({
    id: new FormControl(),
    name: new FormControl('', {
      validators: Validators.required,
      nonNullable: true,
    }),
  });

  //Inject services
  constructor(private apiService: ApiService) {}

  //On component init
  ngOnInit(): void {}

  //Custom events
  onCancelForm(): void {
    this.displayForm = false;
  }

  onShowForm(): void {
    this.displayForm = true;
  }

  onSubmit(): void {
    console.log(this.form.value);
  }
}
