import { Component, OnInit, Input } from '@angular/core';
import { EHIS_TRAMITE } from 'src/app/interfaces/ehis.area.tramite.interface';

@Component({
  selector: 'app-tramite-lista',
  templateUrl: './tramite-lista.component.html',
  styleUrls: ['./tramite-lista.component.scss']
})
export class TramiteListaComponent implements OnInit {

  @Input() tramites: EHIS_TRAMITE[];

  constructor() { }

  ngOnInit(): void {
  }

}
