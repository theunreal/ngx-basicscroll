import { CommonModule } from '@angular/common';
import { NgModule, ModuleWithProviders } from '@angular/core';

import { BasicScrollComponent } from './component/BasicScroll.component';

@NgModule({
  imports: [
    CommonModule
  ],
  exports: [BasicScrollComponent],
  declarations: [BasicScrollComponent]
})
export class BasicScrollModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: BasicScrollModule
    };
  }
}
