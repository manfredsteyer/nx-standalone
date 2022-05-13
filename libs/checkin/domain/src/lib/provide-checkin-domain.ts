import * as fromFlightClass from './+state/flight-class/flight-class.reducer';
import * as fromTicket from './+state/ticket/ticket.reducer';
import { importProvidersFrom } from '@angular/core';
import { TicketEffects } from './+state/ticket/ticket.effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { FlightClassEffects } from './+state/flight-class/flight-class.effects';

export function provideCheckinDomain() {
  return importProvidersFrom([
    StoreModule.forFeature(
      fromTicket.TICKET_FEATURE_KEY, 
      fromTicket.reducer),
    EffectsModule.forFeature([TicketEffects]),
    StoreModule.forFeature(
      fromFlightClass.FLIGHTCLASS_FEATURE_KEY,
      fromFlightClass.reducer
    ),
    EffectsModule.forFeature([FlightClassEffects]),
  ]);
}

