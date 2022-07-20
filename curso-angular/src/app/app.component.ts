import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curso-angular';
  mostrarCPF = false;

  botoes = ["NOVO", "EDITAR", "EXCLUIR", "EXIBIR", "IMPRIMIR"]

  onButtonClicked(botao: string) {
    window.alert(`Button clicked ${botao}`);
  }
}
