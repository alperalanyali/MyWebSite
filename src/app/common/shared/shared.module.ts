import { CommonModule } from '@angular/common';
import {FormsModule} from '@angular/forms'
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    HttpClientModule
  ],
  exports:[
    CommonModule,
    RouterModule,
    FormsModule,

  
  ]
})
export class SharedModule { }
