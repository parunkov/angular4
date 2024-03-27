import { Directive, ElementRef, HostListener, Input, Renderer2 } from "@angular/core";

@Directive({
    standalone: true,
    selector: '[appStyle]'
})
export class StyleDirective {
    @Input('appStyle') color: string = 'blue';
    // @Input() fontWeight = 'normal';
    @Input() dStyles: {border?: string, fontWeight?: string, borderRadius?: string};
    constructor(private el: ElementRef, private renderer: Renderer2) {
        // console.log(el);
        // el.nativeElement.style.color = 'red';
        // this.renderer.setStyle(el.nativeElement, 'color', 'blue');
    }

    @HostListener('click', ['$event.target']) onClick(event: Event) {
        console.log(event);
    }

    @HostListener('mouseenter') onEnter() {
        this.renderer.setStyle(this.el.nativeElement, 'color', this.color);
        // this.renderer.setStyle(this.el.nativeElement, 'fontWeight', this.fontWeight);
        this.renderer.setStyle(this.el.nativeElement, 'fontWeight', this.dStyles.fontWeight);
        this.renderer.setStyle(this.el.nativeElement, 'border', this.dStyles.border);
        this.renderer.setStyle(this.el.nativeElement, 'borderRadius', this.dStyles.borderRadius);



    }

    @HostListener('mouseleave') onLeave() {
        this.renderer.setStyle(this.el.nativeElement, 'color', null);
        // this.renderer.setStyle(this.el.nativeElement, 'fontWeight', null);
        this.renderer.setStyle(this.el.nativeElement, 'fontWeight', null);
        this.renderer.setStyle(this.el.nativeElement, 'border', null);
        this.renderer.setStyle(this.el.nativeElement, 'borderRadius', null);
    }
} 