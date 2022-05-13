import { provideCheckinDomain } from '@angular-architects/checkin/domain';
import { ManageComponent } from '@angular-architects/checkin/feature-manage';
import { UpgradeComponent } from '@angular-architects/checkin/feature-upgrade';
import { Routes } from '@angular/router'

export const CHECKIN_ROUTES: Routes = [
    {
        path: '',
        providers: [
            provideCheckinDomain()
        ],
        children: [
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