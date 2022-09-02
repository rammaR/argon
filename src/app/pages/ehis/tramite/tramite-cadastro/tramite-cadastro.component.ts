import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { EHIS_TRAMITE } from 'src/app/interfaces/ehis.area.tramite.interface';
import { TramiteService } from 'src/app/services/ehis/tramite.service';

@Component({
  selector: 'app-tramite-cadastro',
  templateUrl: './tramite-cadastro.component.html',
  styleUrls: ['./tramite-cadastro.component.scss']
})
export class TramiteCadastroComponent implements OnInit {

  @Input() codigo: string;
  @Output() onNewTramiteEvent = new EventEmitter<EHIS_TRAMITE>();
  isCadastrando: boolean = false;
  novaEntrada: string;
  novoEvento: string;

  constructor(private tramiteService: TramiteService) { }

  ngOnInit(): void {
  }

  saveTramite() {
    this.isCadastrando = false;

    this.tramiteService.postTramite(this.codigo, this.novoEvento, this.novaEntrada).subscribe({
      next: (value) => this.onNewTramiteEvent.emit(value),
      error: (err) => console.error(err),
      complete: () => { this.cancelNewTramite(); }
    });
    //Emite toast message
  }

  cancelNewTramite() {
    this.novaEntrada = '';
    this.novoEvento = '';
    this.isCadastrando = false;
  }
}
