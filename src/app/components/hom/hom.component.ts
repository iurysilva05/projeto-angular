import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';

@Component({
  selector: 'app-hom',
  standalone: true,
  imports: [HeaderComponent,BtnPrimaryComponent],
  providers: [],
  templateUrl: './hom.component.html',
  styleUrl: './hom.component.css'
})
export class HomComponent {

}
