import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { debounceTime, distinctUntilChanged, finalize } from 'rxjs';
import { CepService } from 'src/app/shared/cep.service';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.scss']
})
export class CadastroComponent implements OnInit {
  formCadastro!: FormGroup;
  showPassword = false;
  buscandoCep = false;

  cidades = ['Sorocaba', 'Itu']

  mapCidades = new Map<any, string>();

  
  constructor(
    private cepService: CepService,
    private formBuilder: FormBuilder
    ) { }
    
    ngOnInit(): void {

    this.mapCidades.set(1, 'Sorocaba');
    this.mapCidades.set(2, 'Itu');
    this.mapCidades.set(3, 'Sao Paulo');

    this.mapCidades.delete(3);

    const cidade = this.mapCidades.get(1);

    this.mapCidades.has(2);

    this.inicializarFormulario();
  }

  inicializarFormulario() {
    this.formCadastro = this.formBuilder.group({
      nome: ['', [Validators.required, Validators.minLength(4)]],
      documento: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', [Validators.required, Validators.minLength(6)]],
      cep: [''],
      numero: [''],
      complemento: [''],
      endereco: [{value: '', disabled: true}]
    })

    this.formCadastro.get('cep')?.valueChanges
      .pipe(
        debounceTime(500),
        distinctUntilChanged()
      )
      .subscribe( cep => {
        this.buscarCep(cep)
      })
  }

  onShowPassword() {
    this.showPassword = !this.showPassword;
  }

  buscarCep(cep: string) {
    if ( cep.trim().replace(/[_\W]+/g,'').length == 8 ) {
      this.buscandoCep = true;

      this.cepService.buscaCEP(cep)
        .pipe(
          finalize(() => {
            setTimeout(() => {
              this.buscandoCep = false;
            }, 500);
          })
        )
        .subscribe( result => {
          this.formCadastro.get('endereco')?.setValue(result);
        })
    }
  }

  hasError(field: string, error: string) {
    return this.formCadastro
      .get(field)?.hasError(error);
  }
}
