import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApplicationProperties } from 'src/app/constants/app.properties';
/**
 * Login Page of the application. Gets the credentials of user and checks whether
 * the user is authorized.
 *
 * @author Ideas2it Team
 */
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  public model: any = {};
  public submitError: any = {};
  public isCustomerLogin;
  public isForgetPassword = false;
  public forgotPasswordEmail;
  constructor(public properties: ApplicationProperties) { }

  redirectADUrl() {
    sessionStorage.setItem('loginType', 'AD');
    window.location.href = '/.auth/login/aad?post_login_redirect_url=/dashboard';
  }

}

