import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  boxes = [0, 1, 2, 3, 4];
  easeBoxesOptions: any[] = [];
  loaded = false;
  timings = ['sineInOut', 'backInOut', 'circIn', 'quintOut', 'expoIn'];

  constructor(private titleService: Title) {
  }

  ngOnInit() {
    this.titleService.setTitle('ngx-basicscroll!');

    this.boxes.forEach((box) => {
        this.easeBoxesOptions.push({
          from: 'middle-bottom',
          to: 'bottom-top',
          direct: true,
          props: {
            '--ty': {
              from: '0',
              to: '100px',
              timing: this.timings[box]
            }
          }
        });
      });
    this.loaded = true;
  }
}
