import { Directive, ElementRef, Renderer2 } from "@angular/core";
import * as forms from "@angular/forms";
import { TelephoneMaskDirective } from "./telephone-mask-directive";

var VMasker = require('vanilla-masker')

@Directive({
    selector: '[cpfCnpj]'
})
export class CpfCnpjMaskDirective {
    public nativeElement: HTMLInputElement

    constructor(public element: ElementRef) {
        this.nativeElement = this.element.nativeElement
        this.nativeElement.addEventListener('input', (event: any) => {
          const val = event.target.value;
          const text = val.replace(/[_\W]+/g,'')
          const mask = text.length < 12 ? '999.999.999-99' : '99.999.999/9999-99';
  
          VMasker(this.nativeElement).maskPattern(mask)
        });

        // setTimeout(() => formControl.control.valueChanges.subscribe((val: any) => {
        // }))
    }
}