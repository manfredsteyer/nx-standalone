import { CheckinComponent } from '@angular-architects/luggage/feature-checkin';
import { ReportLossComponent } from '@angular-architects/luggage/feature-report-loss';
import { Routes } from '@angular/router'

export const LUGGAGE_ROUTES: Routes = [
    {
        path: '',
        providers: [
        ],
        children: [
            {
                path: 'checkin',
                component: CheckinComponent
            },
            {
                path: 'report-loss',
                component: ReportLossComponent
            }
        ]
    },
];