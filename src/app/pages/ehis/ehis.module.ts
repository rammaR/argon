import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AreasComponent } from './areas/areas.component';
import { TramiteCadastroComponent } from './tramite/tramite-cadastro/tramite-cadastro.component';
import { TramiteComponent } from './tramite/tramite.component';
import { RouterModule } from '@angular/router';
import { EhisRoutes } from './ehis.routing';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TramiteListaComponent } from './tramite/tramite-lista/tramite-lista.component';



@NgModule({
  declarations: [
    AreasComponent,
    TramiteCadastroComponent,
    TramiteComponent,
    TramiteListaComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(EhisRoutes),
    FormsModule,
    NgbModule,
  ]
})
export class EhisModule { }
