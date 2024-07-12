import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[addButtonDirectiveStyle]'
})
export class AddButtonDirectiveDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.applyButtonStyles();
  }
  private applyButtonStyles() {
    const classes = [
      'my-3',
      'p-2',
      'text-xs',
      'rounded-md',
      'bg-white',
      'shadow-lg',
      'text-gray-700',
      'transition',
      'duration-150',
      'ease-in-out',
      'hover:border-gray-700',
      'hover:bg-gray-700',
      'hover:text-white'
    ];

    classes.forEach(className => {
      this.renderer.addClass(this.el.nativeElement, className);
    });
  }
}
