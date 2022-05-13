import { HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppComponent } from './app/app.component';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { environment } from './environments/environment';
import { APP_ROUTES } from './app/app.routes';

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
      RouterModule.forRoot(APP_ROUTES)
    ])
  ]
});