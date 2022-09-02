import { Routes } from '@angular/router';

import { DashboardComponent } from '../../pages/dashboard/dashboard.component';
import { IconsComponent } from '../../pages/icons/icons.component';
import { MapsComponent } from '../../pages/maps/maps.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { AreasComponent } from 'src/app/pages/ehis/areas/areas.component';
import { TramiteComponent } from 'src/app/pages/ehis/tramite/tramite.component';

/*export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    { path: 'user-profile', component: UserProfileComponent },
    { path: 'tables', component: TablesComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'maps', component: MapsComponent },
    { path: 'ehis/areas', component: AreasComponent },
    { path: 'ehis/tramite/:codigo', component: TramiteComponent }
];*/

export const AdminLayoutRoutes: Routes = [
    { path: 'dashboard', component: DashboardComponent },
    {
        path: 'ehis',
        loadChildren: () => import('src/app/pages/ehis/ehis.module').then(m => m.EhisModule)
    }
];
