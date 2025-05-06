import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { AutenticacaoService } from 'src/app/service/autenticacao.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  //TODO: criando propriedade do tipo FormGroup
  loginForm: FormGroup;

  //TODO: construtor
  constructor(
    private formBuilder: FormBuilder,
    private authService: AutenticacaoService,
    //private router: Router
  ) {}

  //TODO: interface para o login
  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      email: [null],
      senha: [null],
    });
  }

  login() {
    const email = this.loginForm.value.email;
    const senha = this.loginForm.value.senha;

    this.authService.autenticar(email, senha).subscribe({
      next: (value) => {
        console.log('Login realizado', value);
        //this.router.navigateByUrl(['/login']);
      },
      error: (err) => {
        console.error('Erro ao realizar login', err);
      },
    });
  }
}
