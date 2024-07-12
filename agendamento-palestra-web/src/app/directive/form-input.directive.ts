import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[formInputStyle]'
})
export class FormInputDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.applyInputStyles();
  }
  private applyInputStyles() {
    const classes = [
      'h-8',
      'w-72',
      'rounded-md',
      'border',
      'border-gray-700',
      'px-2',
      'py-4',
      'placeholder:text-gray-300',
    ];

    classes.forEach(className => {
      this.renderer.addClass(this.el.nativeElement, className);
    });
  }
}
