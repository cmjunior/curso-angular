import { Pipe, PipeTransform } from '@angular/core';
var VMasker = require('vanilla-masker');

@Pipe({
  name: 'format'
})
export class FormatPipe implements PipeTransform {
  transform(value: any, ...args: any[]) {
    const CPF = "999.999.999-99";
    const CNPJ = "99.999.999/9999-99";

    return VMasker.toPattern(
      value, 
      value.trim().length > 11 ? CNPJ : CPF
    );
  }

}
