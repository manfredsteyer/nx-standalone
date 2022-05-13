import { provideCheckinDomain } from '@angular-architects/checkin/domain';
import { ManageComponent } from '@angular-architects/checkin/feature-manage';
import { UpgradeComponent } from '@angular-architects/checkin/feature-upgrade';
import { Routes } from '@angular/router'
import { NxWelcomeComponent } from './nx-welcome.component';

export const CHECKIN_ROUTES: Routes = [
    {
        path: '',
        providers: [
            provideCheckinDomain()
        ],
        children: [
            {
                path: '',
                pathMatch: 'full',
                component: NxWelcomeComponent
            },
            {
                path: 'manage',
                component: ManageComponent
            },
            {
                path: 'upgrade',
                component: UpgradeComponent
            }
        ]
    },
];