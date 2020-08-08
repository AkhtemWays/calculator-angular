import {
  Directive,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Output,
  Input,
} from '@angular/core';

@Directive({
  selector: '[motion-attr]',
})
export class MotionDirective {
  public element: ElementRef;
  constructor(el: ElementRef) {
    this.element = el;
  }

  @Input('motion-attr')
  public value: any;
  @Output('value') click = new EventEmitter<string>();
  @HostListener('mouseover')
  public onMouseOver() {
    this.element.nativeElement.style.backgroundColor = 'blue';
  }
  @HostListener('mouseout')
  public onMouseOut() {
    this.element.nativeElement.style.backgroundColor = 'white';
  }
  @HostListener('mousedown')
  public onMouseDown() {
    this.element.nativeElement.style.backgroundColor = 'red';
  }
  @HostListener('mouseup')
  public onMouseUp() {
    this.element.nativeElement.style.backgroundColor = 'blue';
    console.log(this.value);
  }
}
