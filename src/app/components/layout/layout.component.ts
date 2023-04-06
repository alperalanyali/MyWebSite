import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { SharedModule } from 'src/app/common/shared/shared.module';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [SharedModule,NavbarComponent],
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent {

}
