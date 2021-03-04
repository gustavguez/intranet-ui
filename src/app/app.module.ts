import { APP_INITIALIZER, NgModule } from '@angular/core';
import { AngularFireModule } from '@angular/fire';
import { BrowserModule } from '@angular/platform-browser';
import { environment } from 'src/environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppInitializerService } from './app-initializer.service';
import { AppComponent } from './app.component';

export function init_app(appInintializer: AppInitializerService): any {
	return (): any => appInintializer.init();
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
  ],
  providers: [
    {
			provide: APP_INITIALIZER,
			useFactory: init_app,
			deps: [AppInitializerService],
			multi: true
		}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
