import { Directive, Input, HostListener, Renderer2 } from '@angular/core';

@Directive({
    selector: '[enterTab]'
})
export class EnterTabDirective {
    @Input() enterTab
    
    constructor(private renderer: Renderer2) { }

    @HostListener('keydown', ['$event']) onKeyDown(e) {
        if ( e.which == 13 || e.keyCode == 13 ) {
            let nextEl = this.renderer.selectRootElement(this.enterTab, true)
            e.preventDefault();
            if ( nextEl ) {
                nextEl.focus()
            }
        }

        return
    }
}