import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { EHIS_AREA } from 'src/app/interfaces/ehis.area.interface';
import { EHIS_TRAMITE } from 'src/app/interfaces/ehis.area.tramite.interface';
import { AreasService } from 'src/app/services/ehis/areas.service';
import { TramiteService } from 'src/app/services/ehis/tramite.service';

@Component({
  selector: 'app-tramite',
  templateUrl: './tramite.component.html',
  styleUrls: ['./tramite.component.scss']
})
export class TramiteComponent implements OnInit {

  codigo: string;
  area: EHIS_AREA;
  tramites: EHIS_TRAMITE[];

  constructor(private route: ActivatedRoute,
    private service: AreasService,
    private tramiteService: TramiteService) { }

  ngOnInit(): void {
    this.getTramite();
  }

  private getTramite() {
    this.codigo = "TESTE";

    this.route.paramMap.subscribe({
      next: (params) => {
        this.codigo = params.get('codigo');
        this.getArea(this.codigo);
        this.getTramites(this.codigo);
      },
      error: (err) => console.error(err),
      complete: () => console.log("Completed route request")
    })
  }

  private getArea(codigo: string) {
    this.service.getArea(codigo).subscribe(
      {
        next: (area) => this.area = area,
        error: (err) => console.error(err)
      }
    )
  }

  private getTramites(codigo: string) {
    this.tramiteService.getTramites(codigo).subscribe(
      {
        next: (values) => this.tramites = values,
        error: (err) => console.error(err)
      }
    )
  }

  updateLista(event: EHIS_TRAMITE) {
    console.log("Event  ", event);
    this.tramites.push(event);
  }
}
