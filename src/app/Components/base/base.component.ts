// import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-base',
  standalone: true,
  imports: [],
  templateUrl: './base.component.html',
  styleUrl: './base.component.css'
})
export class BaseComponent {

  chamaBackEnd(): void {
    console.log("Botão clicado!");
  }

  //   this.http.get('http:/localhost:3000').subscribe({
  //     error: error => console.log(error);
  //   })
  // }

}


