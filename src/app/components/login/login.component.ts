import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Credencial } from 'src/app/models/credencial';
import { AuthService } from 'src/app/services/auth.service';

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
  
  constructor(
    private toast: ToastrService,
    private service: AuthService,
    private router: Router) {}

  ngOnInit(): void { }

  logar() {
    this.service.authenticate(this.cred).subscribe(resposta => {
      this.service.sucessfulLogin(resposta.headers.get('Authorization').substring(7));
    this.router.navigate([''])
    }, () => {
      this.toast.error('Usuario e/ou senha inválidos');
    })
  }

  validaCampos(): boolean {
    return this.email.valid && this.senha.valid
  }
}
