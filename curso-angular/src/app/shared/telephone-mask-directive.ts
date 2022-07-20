import { Directive, ElementRef, Renderer2 } from "@angular/core";
import * as forms from "@angular/forms";

var VMasker = require('vanilla-masker')

@Directive({
    selector: '[telephoneMask]'
})
export class TelephoneMaskDirective {
    public nativeElement: HTMLInputElement

    constructor(public element: ElementRef, private formControl: forms.NgControl) {
        this.nativeElement = this.element.nativeElement

        // setTimeout(() => formControl.control.valueChanges.subscribe((val: any) => {
        //     const text = val.replace(/[_\W]+/g,'')
        //     const mask = text.length < 11 ? '(99) 9999-9999' : '(99) 9 9999-9999';

        //     VMasker(this.nativeElement).maskPattern(mask)
        // }))
    }
}