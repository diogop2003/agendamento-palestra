import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[textAreaDirectiveStyle]'
})
export class TextAreaDirectiveDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.applyInputStyles();
  }
  private applyInputStyles() {
    const classes = [
      'w-72',
      'rounded-md',
      'border',
      'border-gray-300',
      'p-2',
      'placeholder:text-gray-300',
    ];

    classes.forEach(className => {
      this.renderer.addClass(this.el.nativeElement, className);
    });
  }
}
