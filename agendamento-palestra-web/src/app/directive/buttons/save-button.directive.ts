import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[saveButtonStyle]'
})
export class SaveButtonDirective {
  constructor(private el: ElementRef, private renderer: Renderer2) {
    this.applyButtonStyles();
  }

  private applyButtonStyles() {
    const classes = [
      'w-40',
      'rounded-md',
      'bg-gray-700',
      'py-4',
      'font-bold',
      'text-white',
      'transition',
      'duration-150',
      'ease-in-out',
      'hover:border',
      'hover:border-gray-700',
      'hover:bg-white',
      'hover:text-gray-700'
    ];

    classes.forEach(className => {
      this.renderer.addClass(this.el.nativeElement, className);
    });
  }
}