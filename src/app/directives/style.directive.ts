import { Directive, ElementRef, HostListener, Renderer2 } from "@angular/core";

@Directive({
    standalone: true,
    selector: '[appStyle]'
})
export class StyleDirective {
    constructor(private el: ElementRef, private renderer: Renderer2) {
        // console.log(el);
        // el.nativeElement.style.color = 'red';
        // this.renderer.setStyle(el.nativeElement, 'color', 'blue');
    }

    @HostListener('click', ['$event.target']) onClick(event: Event) {
        console.log(event);
    }

    @HostListener('mouseenter') onEnter() {
        this.renderer.setStyle(this.el.nativeElement, 'color', 'blue');

    }

    @HostListener('mouseleave') onLeave() {
        this.renderer.setStyle(this.el.nativeElement, 'color', null);
    }
} 