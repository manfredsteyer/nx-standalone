import { provideCheckinDomain } from '@angular-architects/checkin/domain';
import { HttpClientModule } from '@angular/common/http';
import { enableProdMode, importProvidersFrom } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { AppComponent } from './app/app.component';
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
    ]),
    provideCheckinDomain()
  ]
})