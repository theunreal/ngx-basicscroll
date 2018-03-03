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
  @Input('from') from = 'top-middle';
  @Input('to') to = 'top-top';
  @Input('type') type: string;
  @Input('timing') timing = 'expoIn';

  bsOptions: any;
  useClass;

  ngOnInit() {
    this.bsOptions = {
      elem: this.element.nativeElement,
      from: this.from,
      to: this.to,
      timing: this.timing
    };

    switch (this.type) {
      case 'rotate':
        this.useClass = 'rotateBox';
        this.updateProps(  {
          '--r': {
            from: '0',
            to: '1turn'
          }});
        break;
      case 'fade':
        this.useClass = 'fadeBox';
        this.updateProps(  {
          '--o': {
            from: '.01',
            to: '.99'
          }});
        break;
      case 'easeX':
        this.bsOptions.direct = true;
        this.useClass = 'easeX';
        this.updateProps(  {
          '--tx': {
            from: '0',
            to: '100px'
          }});
        break;
      case 'easeY':
        this.bsOptions.direct = true;
        this.useClass = 'easeY';
        this.updateProps(  {
          '--ty': {
            from: '0',
            to: '100px'
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
