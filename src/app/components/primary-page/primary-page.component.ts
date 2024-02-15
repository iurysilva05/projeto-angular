import { Component } from '@angular/core';
import { HomComponent } from '../hom/hom.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-primary-page',
  standalone: true,
  imports: [HomComponent,],
  templateUrl: './primary-page.component.html',
  styleUrl: './primary-page.component.css'
})
export class PrimaryPageComponent {

  constructor(private router: Router) {}

  navegarParaPaginadelogin() {
    this.router.navigate(['/hom.component']);
  }
}
