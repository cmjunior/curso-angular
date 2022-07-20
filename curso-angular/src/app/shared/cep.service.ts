import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CepService {
  url(cep: string) {
    return `https://viacep.com.br/ws/${cep}/json`;
  }

  constructor(
    private httpClient: HttpClient
  ) {
    console.log('CEP Service criada!!!');
  }

  buscaCEP(cep: string) {
    return this.httpClient.get(this.url(cep))
      .pipe(
        map( (result: any) => {
          return `Endereço: ${result.logradouro}, ${result.localidade}, ${result.uf}`
        })
      )
  }
}
