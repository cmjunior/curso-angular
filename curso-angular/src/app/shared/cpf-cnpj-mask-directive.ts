import { Directive, ElementRef, Renderer2 } from "@angular/core";
import * as forms from "@angular/forms";

var VMasker = require('vanilla-masker')

@Directive({
    selector: '[cpfCnpj]'
})
export class CpfCnpjMaskDirective {
    public nativeElement: HTMLInputElement

    constructor(public element: ElementRef, private formControl: forms.NgControl) {
        this.nativeElement = this.element.nativeElement

        setTimeout(() => formControl.control.valueChanges.subscribe((val: any) => {
            const text = val.replace(/[_\W]+/g,'')
            const mask = text.length < 12 ? '999.999.999-99' : '99.999.999/9999-99';

            VMasker(this.nativeElement).maskPattern(mask)
        }))
    }
}