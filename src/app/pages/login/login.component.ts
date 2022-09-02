import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthLayoutService } from 'src/app/layouts/auth-layout/auth-layout.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit, OnDestroy {

  form: FormGroup;

  constructor(private builder: FormBuilder,
    private authService: AuthLayoutService,
    private router: Router) {

    this.form = this.builder.group({
      login: ['', Validators.required],
      password: ['', Validators.required]
    })

  }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

  doLogin() {
    const val = this.form.value;

    console.log('Form ', val);

    if (!val.login) {
      console.error('Erro: ', 'Campo login é obrigatório');
    }

    if (!val.password) {
      console.error('Erro: ', 'Campo senha é obrigatório');
    }

    if (val.login && val.password) {
      this.authService.doLogin(val.login, val.password);
      this.router.navigate(['dashboard']);
    }
  }

}
