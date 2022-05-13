import { HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app/app.component';
import { CHECKIN_ROUTES } from './app/checkin.routes';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [
    importProvidersFrom([
      StoreModule.forRoot({}),
      !environment.production ? StoreDevtoolsModule.instrument() : [],
      EffectsModule.forRoot(),
      HttpClientModule,
      RouterModule.forRoot(CHECKIN_ROUTES)
    ])
  ]
})