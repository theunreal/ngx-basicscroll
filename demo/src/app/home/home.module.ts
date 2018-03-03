import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {BasicScrollModule} from 'ngx-basicscroll';

@NgModule({
    imports: [
        CommonModule,
        BasicScrollModule.forRoot(),
        HomeRoutingModule,
    ],
    declarations: [HomeComponent],
})
export class HomeModule { }
