import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  examples: any[] = [{
    name: 'Rotate',
    code: `<bs-element [type]="'rotate'"
                  [fromPosition]="'top-middle'"
                  [toPosition]="'top-top'"
                  [fromValue]="0"
                  [toValue]="'1turn'">
        <h2>Rotate</h2>
      </bs-element>`
  }, {
    name: 'Fade',
    code: `<bs-element [type]="'fade'"
                  [fromPosition]="'bottom-bottom'"
                  [toPosition]="'top-middle'"
                  [fromValue]="0"
                  [toValue]="'1turn'">
               Fade
        </bs-element>`
  }, {
    name: 'translateX',
    code: `
    <bs-element [type]="'translateX'"
                  [fromPosition]="'bottom-bottom'"
                  [toPosition]="'top-middle'"
                  [fromValue]="0"
                  [toValue]="'400px'"></bs-element>
                  translateX
    `
  }];

  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle('ngx-basicscroll!');
  }

}
