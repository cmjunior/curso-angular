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

  urlGeolocation(endereco: string) {
    const key = '';
    return `https://maps.googleapis.com/maps/api/geocode/json?key=${key}&address=${endereco},BR`;
  }

  urlLocation(origin: any, destination: any) {
    const key = '';    
    return `https://maps.googleapis.com/maps/api/directions/json?key=${key}&origin=${origin.lat},${origin.lng}&destination=${destination.lat},${destination.lng}`;
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

  buscarGeolocation() {
    
  }
}
