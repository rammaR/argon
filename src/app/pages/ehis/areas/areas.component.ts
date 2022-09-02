import { Component, OnInit } from '@angular/core';
import { EHIS_AREA } from 'src/app/interfaces/ehis.area.interface';
import { AreasService } from 'src/app/services/ehis/areas.service';

@Component({
  selector: 'app-areas',
  templateUrl: './areas.component.html',
  styleUrls: ['./areas.component.scss']
})
export class AreasComponent implements OnInit {

  lista: EHIS_AREA[];
  page: number;
  pages: number[];
  MAX_PAGES: number = 0;
  searchCriteria: string = 'protocolo';
  searchValue: string = '';
  readonly MAXIMO: number = 4;

  constructor(private service: AreasService) {
    this.lista = [];
  }

  ngOnInit(): void {
    this.configPaginacao();
  }

  private configPaginacao() {
    this.service.getTamanhoLista().subscribe({
      next: (t: Number) => {
        this.MAX_PAGES = Math.ceil((t as number) / this.MAXIMO);
        this.pages = [];

        for (let i = 0; i < this.MAX_PAGES; i++)
          this.pages.push(i + 1);

        this.setPagina();
      }
    })
  }

  private getListaAreas(page_min, page_max: number) {
    this.service.getAreas(page_min, page_max).subscribe({
      next: (value) => {
        this.lista = value;
        console.log(this.lista)
      },
      error: (err) => console.error(err),
      complete: () => console.log("Completed request to ehis area service")
    })
  }

  setPagina(pagina?: number) {
    if (!pagina) {
      pagina = 1;
    }

    let inferior = (pagina - 1) * this.MAXIMO;
    let superior = (pagina * this.MAXIMO);

    this.getListaAreas(inferior, superior);
  }

  search() {
    if (this.searchValue === '') {

      return;
    }

    this.service.search(this.searchCriteria, this.searchValue).subscribe({
      next: v => {
        console.log(v);
        this.lista = v;
      },
      error: err => console.error(err),
      complete: () => console.log("Completed request to areas service")
    });
  }

  clearSearch() {
    this.searchValue = '';
    this.configPaginacao();
  }

}
