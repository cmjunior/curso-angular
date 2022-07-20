import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CepService } from '../cep.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() texto = 'clique aqui';
  @Output() clicked = new EventEmitter<any>()
  
  constructor(
    cepService: CepService
  ) {}

  onClick() {
    this.clicked.emit(this.texto);
  }
}
