import {
  Directive,
  ElementRef,
  HostListener,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';

@Directive({
  selector: '[appCardStyle]',
  standalone: true,
})
export class CardStyleDirective implements OnChanges, OnInit {
  //document.getEl....

  @Input('appCardStyle') color1: string = 'blue';

  constructor(private elementRef: ElementRef) {
    // this.elementRef.nativeElement.style.border=`2px solid  ${this.color1}`
    console.log('constructor');
  }
  ngOnInit(): void {
    // this.elementRef.nativeElement.style.border=`2px solid  ${this.color1}`
    console.log('ngOnInit');
  }
  ngOnChanges(): void {
    this.elementRef.nativeElement.style.border = `2px solid  ${this.color1}`;
    this.elementRef.nativeElement.style.boxShadow =
      ' rgba(149, 157, 165, 0.2) 0px 8px 24px';
      this.elementRef.nativeElement.style.boxRadius =
      '24px';
    console.log('ngOnChanges');
  }

  //method decorator
  @HostListener('mouseover') mouseOver() {
    this.elementRef.nativeElement.style.border = '2px dashed red';
    this.elementRef.nativeElement.style.boxShadow =
      ' rgba(0, 0, 0, 0.35) 0px 5px 15px';
  }
  @HostListener('mouseout') mouseOUt() {
    this.elementRef.nativeElement.style.border = `2px solid  ${this.color1}`;

    this.elementRef.nativeElement.style.boxShadow =
      ' rgba(149, 157, 165, 0.2) 0px 8px 24px';
  }
}
