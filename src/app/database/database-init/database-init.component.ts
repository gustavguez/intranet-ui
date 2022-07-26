import { Component } from '@angular/core';
import { DatabaseInitService } from '../api/database-init.service';

@Component({
  selector: 'app-database-init',
  templateUrl: './database-init.component.html',
})
export class DatabaseInitComponent {
  //Data to add
  //Nutritions
  nutritionUnits: any[] = [];

  //UI data
  initializing: boolean = false;

  constructor(private databaseInitService: DatabaseInitService) {
    //Getters
    this.nutritionUnits = this.databaseInitService.getNutritionUnits();
  }

  //Custom events
  onAddNutritionUnit(): void {
    const lastUnitName: string =
      this.nutritionUnits[this.nutritionUnits.length - 1].name;
    //Control last unit
    if (lastUnitName) {
      this.nutritionUnits.push({});
    }
  }

  onStartInit(): void {
    this.initializing = true;

    //Filter units with name only
    const nutritionUnits: any[] = this.nutritionUnits.filter(
      (unit) => !!unit.name
    );

    //Create units
    this.databaseInitService.startInit(nutritionUnits).subscribe(() => {
      console.log('Finished');
    });
  }
}
