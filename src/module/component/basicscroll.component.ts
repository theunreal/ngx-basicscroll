import {AfterViewInit, Component, ElementRef, Input} from '@angular/core';
import {BsOptions} from './bsOptions.interface';
declare const require;
const basicScroll = require('basicscroll');


@Component({
  selector: 'bs-element',
  templateUrl: './basicscroll.component.html',
  styleUrls: ['./basicscroll.component.scss']
})
export class BasicScrollComponent implements AfterViewInit {

  @Input('options') options: BsOptions;

  constructor(private elRef: ElementRef) {}

  ngAfterViewInit() {
    console.log(this.elRef);
    this.options.elem = this.elRef.nativeElement.parentElement;
    basicScroll.create(this.options).start();
  }
}
