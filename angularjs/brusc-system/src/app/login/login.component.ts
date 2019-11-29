import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  hide = true;

  constructor(
    private toastr: ToastrService
  ) { }

  email = new FormControl('', [Validators.required, Validators.email]);
  password = new FormControl('');

  getErrorMessage() {
    return this.email.hasError('required') ? 'You must enter a value' :
      this.email.hasError('email') ? 'Not a valid email!' : '';
  }

  login(formLogin) {
    if (formLogin.value.email == null || formLogin.value.email == '' ||
      formLogin.value.password == null || formLogin.value.password == '') {
      this.toastr.error('Email or password invalid!', 'Error');
    }
  }

  ngOnInit() {
  }

}
