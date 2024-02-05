import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { BtnPrimaryComponent } from '../btn-primary/btn-primary.component';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-hom',
  standalone: true,
  imports: [HeaderComponent,BtnPrimaryComponent ,ReactiveFormsModule,],
  providers: [],
  templateUrl: './hom.component.html',
  styleUrl: './hom.component.css'
})
export class HomComponent {
  myformslogin!: FormGroup;

  constructor() {
    this.myformslogin = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      senha: new FormControl('', [Validators.required]),
    });
  }

  dosubmit(){
    console.log(this.myformslogin.value)
  }
}
