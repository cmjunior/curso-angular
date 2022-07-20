import { Component } from '@angular/core';
import { CepService } from './shared/cep.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curso-angular';
  mostrarCPF = false;
  cep = ''
  resCep: any

  constructor(
    private cepService: CepService
  ) {}

  botoes = ["NOVO", "EDITAR", "EXCLUIR", "EXIBIR", "IMPRIMIR"]

  onButtonClicked(botao: string) {
    window.alert(`Button clicked ${botao}`);
  }

  buscarCep() {
    return this.cepService.buscaCEP(this.cep)
      .subscribe((result: any) => {
        this.resCep = result;
      })
    
  }
}
