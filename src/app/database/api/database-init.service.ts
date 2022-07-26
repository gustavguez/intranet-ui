import { Injectable } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

import { ApiService } from 'src/app/shared/api/api.service';
import { environment } from 'src/environments/environment';
import nutritionUnits from './data/nutrition-units';

@Injectable({
  providedIn: 'root',
})
export class DatabaseInitService {
  //Inject services
  constructor(private apiService: ApiService) {}

  //Getters default datas
  public getNutritionUnits(): any[] {
    return nutritionUnits;
  }

  //Start sync
  public startInit(nutritionUnits: any): Observable<any> {
    const obs: Observable<any>[] = [];

    //Create Nutrition units
    nutritionUnits.forEach((unit: any) => {
      //Add
      obs.push(this.apiService.add(environment.nutritionsUnitsUri, unit));
    });

    return forkJoin(obs);
  }
}
