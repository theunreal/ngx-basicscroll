import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
declare const require;
const basicScroll = require('basicScroll');


@Component({
  selector: 'bs-element',
  templateUrl: './basicscroll.component.html',
  styleUrls: ['./basicscroll.component.scss']
})
export class BasicScrollComponent implements AfterViewInit, OnInit {

  @ViewChild('element') element: ElementRef;
  @Input('fromPosition') fromPosition = 'top-middle';
  @Input('toPosition') toPosition = 'top-top';
  @Input('fromValue') fromValue = '0';
  @Input('toValue') toValue = '100px';
  @Input('type') type: 'rotate' | 'fade' | 'translateX' | 'translateY';
  @Input('timing') timing = 'expoIn';

  bsOptions: any;
  useClass;

  ngOnInit() {
    this.bsOptions = {
      elem: this.element.nativeElement,
      from: this.fromPosition,
      to: this.toPosition,
      timing: this.timing
    };

    switch (this.type) {
      case 'rotate':
        this.useClass = 'rotateBox';
        this.updateProps(  {
          '--r': {
            from: this.fromValue,
            to: this.toValue
          }});
        break;
      case 'fade':
        this.useClass = 'fadeBox';
        this.updateProps(  {
          '--o': {
            from: this.fromValue,
            to: this.toValue
          }});
        break;
      case 'translateX':
        this.bsOptions.direct = true;
        this.useClass = 'easeX';
        this.updateProps(  {
          '--tx': {
            from: this.fromValue,
            to: this.toValue
          }});
        break;
      case 'translateY':
        this.bsOptions.direct = true;
        this.useClass = 'easeY';
        this.updateProps(  {
          '--ty': {
            from: this.fromValue,
            to: this.toValue
          }});
        break;
    }
  }

  ngAfterViewInit() {
    basicScroll.create(this.bsOptions).start();
  }

  updateProps(props) {
    this.bsOptions.props = props;
  }
}
