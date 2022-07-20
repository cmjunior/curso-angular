import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() texto = 'clique aqui';
  @Output() clicked = new EventEmitter<any>()
  
  onClick() {
    this.clicked.emit(this.texto);
  }
}
