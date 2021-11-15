import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Credencial } from 'src/app/models/credencial';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  cred: Credencial = {
    email: '',
    senha: ''
  }

  email = new FormControl(null, Validators.email);
  senha = new FormControl(null, Validators.compose([Validators.minLength(3),Validators.maxLength(8)])); 
  constructor() { }

  ngOnInit(): void {
  }

  validaCampos(): boolean {
    if(this.email.valid && this.senha.valid) {
      return true;
    } else {
      return false;
    }
  }
}
