import { Routes } from '@angular/router';
import { AreasComponent } from './areas/areas.component';
import { TramiteComponent } from './tramite/tramite.component';

export const EhisRoutes: Routes = [
    { path: '/', component: AreasComponent },
    { path: 'areas', component: AreasComponent },
    { path: 'tramite/:codigo', component: TramiteComponent }
];
