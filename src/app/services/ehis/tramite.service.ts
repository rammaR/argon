import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EHIS_TRAMITE } from 'src/app/interfaces/ehis.area.tramite.interface';

@Injectable({
  providedIn: 'root'
})
export class TramiteService {

  constructor() { }

  getTramites(codigo: string): Observable<EHIS_TRAMITE[]> {
    const tramites: EHIS_TRAMITE[] = this.getMockTramite().filter(v => v.codigo === codigo);
    return of(tramites);
  }

  postTramite(codigo, evento, dataEntrada): Observable<EHIS_TRAMITE> {
    let tramites: EHIS_TRAMITE[] = this.getMockTramite();
    tramites = tramites.filter(v => v.codigo === codigo);
    let sequencia = tramites.length + 1;
    let newTramite: EHIS_TRAMITE = { codigo, sequencia, evento, dataEntrada };
    tramites.push(newTramite);
    return of(newTramite);
  }

  private getMockTramite(): EHIS_TRAMITE[] {
    return [
      {
        codigo: '7',
        evento: 'Comunique-se',
        dataEntrada: '20221818'
      },
      {
        codigo: '7',
        evento: '2 Comunique-se',
        dataEntrada: '20221818'
      },
      {
        codigo: '7',
        evento: '3 Comunique-se',
        dataEntrada: '20221818'
      },
      {
        codigo: '7',
        evento: '4 Comunique-se',
        dataEntrada: '20221818'
      },
      {
        codigo: '226',
        evento: '1 Comunique-se',
        dataEntrada: '26/01/2022'
      },
      {
        codigo: '226',
        evento: '2 Comunique-se',
        dataEntrada: '26/01/2022'
      },
      {
        codigo: '226',
        evento: '3 Comunique-se',
        dataEntrada: '26/01/2022'
      },
      {
        codigo: '226',
        evento: '4 Comunique-se',
        dataEntrada: '26/01/2022'
      },
      {
        codigo: '226',
        evento: '5 Comunique-se',
        dataEntrada: '26/01/2022'
      },
      {
        codigo: '97',
        evento: '1 Comunique-se',
        dataEntrada: '08/04/2022'
      },
      {
        codigo: '97',
        evento: '2 Comunique-se',
        dataEntrada: '08/04/2022'
      },
      {
        codigo: '97',
        evento: '3 Comunique-se',
        dataEntrada: '08/04/2022'
      },
      {
        codigo: '97',
        evento: '4 Comunique-se',
        dataEntrada: '08/04/2022'
      },
      {
        codigo: '97',
        evento: '5 Comunique-se',
        dataEntrada: '08/04/2022'
      },
      {
        codigo: '97',
        evento: '6 Comunique-se',
        dataEntrada: '08/04/2022'
      },
      {
        codigo: '94',
        evento: 'Comunique-se',
        dataEntrada: '07/02/2022'
      },
      {
        codigo: '413',
        evento: '1 Comunique-se',
        dataEntrada: '12/15/2022'
      },
      {
        codigo: '413',
        evento: '2 Comunique-se',
        dataEntrada: '12/15/2022'
      },
      {
        codigo: '413',
        evento: '3 Comunique-se',
        dataEntrada: '12/15/2022'
      },
      {
        codigo: '413',
        evento: '4 Comunique-se',
        dataEntrada: '12/15/2022'
      },
      {
        codigo: '413',
        evento: '5 Comunique-se',
        dataEntrada: '12/15/2022'
      },
      {
        codigo: '449',
        evento: '1 Comunique-se',
        dataEntrada: '10/05/2022'
      },
      {
        codigo: '449',
        evento: '2 Comunique-se',
        dataEntrada: '10/05/2022'
      },
      {
        codigo: '449',
        evento: '3 Comunique-se',
        dataEntrada: '10/05/2022'
      },
      {
        codigo: '449',
        evento: '4 Comunique-se',
        dataEntrada: '10/05/2022'
      },
      {
        codigo: '449',
        evento: '5 Comunique-se',
        dataEntrada: '10/05/2022'
      },
      {
        codigo: '449',
        evento: '6 Comunique-se',
        dataEntrada: '10/05/2022'
      },
    ]
  }
}
