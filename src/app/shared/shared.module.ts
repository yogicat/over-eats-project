import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';


import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SearchComponent } from './search/search.component';
import { SharedRoutingModule } from './shared-routing.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    SharedRoutingModule
  ],
  declarations: [
    HeaderComponent,
    FooterComponent,
    SearchComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SearchComponent
  ]
})
export class SharedModule { }
