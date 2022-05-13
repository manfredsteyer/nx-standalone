import { Routes } from "@angular/router";
import { NxWelcomeComponent } from "./nx-welcome.component";

export const APP_ROUTES: Routes = [
    {
        path: '',
        pathMatch: 'full',
        component: NxWelcomeComponent
    },
    {
        path: 'checkin',
        loadChildren: () => import('./sub-routes/checkin.routes')
            .then(m => m.CHECKIN_ROUTES)
    },
    {
        path: 'luggage',
        loadChildren: () => import('./sub-routes/luggage.routes')
            .then(m => m.LUGGAGE_ROUTES)
    }
]