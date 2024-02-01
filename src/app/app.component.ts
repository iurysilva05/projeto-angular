import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HomComponent } from './components/hom/hom.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HomComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'my-app';
}
