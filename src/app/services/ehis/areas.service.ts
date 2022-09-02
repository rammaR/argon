import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { EHIS_AREA } from 'src/app/interfaces/ehis.area.interface';

@Injectable({
  providedIn: 'root'
})
export class AreasService {

  constructor() { }

  getAreas(page_min, page_max: number): Observable<EHIS_AREA[]> {
    return of(this.mock_areas().filter((v, i) => i >= page_min && i < page_max));
  }

  getArea(codigo: string): Observable<EHIS_AREA> {
    const obs: Observable<EHIS_AREA> = new Observable(subs => {
      const area: EHIS_AREA = this.mock_areas().find(v => v.codigo === codigo)

      subs.next(area);
    })


    return obs;
  }

  getTamanhoLista(): Observable<Number> {
    return of(this.mock_areas().length);
  }

  search(criteria, value) {
    return of(this.mock_areas().filter(
      v => {
        //console.log(v[criteria], ' = ', value);
        return v[criteria] === value;
      }
    ));
  }

  private mock_areas(): EHIS_AREA[] {
    return [
      {
        codigo: '7',
        protocolo: '2021/05/05',
        nome: 'texte',
        dataEntrada: '2022-08-07'
      },
      {
        codigo: '226',
        protocolo: '2021/19/34',
        dataEntrada: '26/01/2022'
      },
      {
        codigo: '97',
        protocolo: '2022/19/26',
        dataEntrada: '08/04/2022'
      },
      {
        codigo: '94',
        protocolo: '2022/19/06',
        dataEntrada: '07/02/2022'
      },
      {
        codigo: '413',
        protocolo: '2022/19/44',
        dataEntrada: '12/15/2022'
      },
      {
        codigo: '449',
        protocolo: '2022/19/43',
        dataEntrada: '10/05/2022'
      }
    ]
  }
}
