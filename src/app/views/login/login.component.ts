import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { Observable } from "rxjs";

import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { LoginService } from "../../services/login/login.service";
import { ApiService } from "../../services/shared/api.service";

import { map } from "rxjs/operators";
import { NgxSpinnerService } from "ngx-spinner";
import { nextTick } from "q";
import { elementStyleProp } from "@angular/core/src/render3/instructions";
@Component({
  selector: "app-dashboard",
  templateUrl: "login.component.html",
  providers: [LoginService]
})
export class LoginComponent implements OnInit {
  public username: string;
  public password: string;
  loginForm: FormGroup;
  submitted = false;
  private token: string;
  private user: string;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    public loginService: LoginService,
    public apiService: ApiService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ["", Validators.required],
      password: ["", Validators.required]
    });
  }
  get f() {
    return this.loginForm.controls;
  }

  requestLogin() {
    if (this.loginForm.invalid) {
      this.submitted = true;
      return;
    }
    const srequestModel = {
      email: this.f.username.value,
      password: this.f.password.value
    };
    this.apiService
      .postRequest("login/authenticate", srequestModel, true, null)
      .pipe()
      .subscribe(
        data => {
          console.log(data);
          if (data.data != false) {
            this.saveToken(data.data);
            this.router.navigateByUrl("/dashboard");
          }
        },
        error => {}
      );
  }

  tryLogin({ value }) {
    // stop here if form is invalid
    if (this.loginForm.invalid) {
      this.submitted = true;
      return;
    }
    this.spinner.show();
    this.loginService
      .login(this.f.username.value, this.f.password.value)
      .pipe()
      .subscribe(
        data => {
          console.log(data);
          if (data && data.token) {
            this.saveToken(data.token);
            this.saveUser(data.user);
            this.router.navigateByUrl("/dashboard");
          } else {
            this.spinner.hide();
          }
          // console.log(localStorage.getItem('current-user'));
          // this.router.navigate([this.returnUrl]);
        },
        error => {
          // this.alertService.error(error);
          // this.loading = false;
        }
      );
    // if (this.username === 'admin' && this.password === 'admin') {
    // this.router.navigateByUrl('/dashboard');
    // }
  }

  private saveToken(token: string): void {
    localStorage.setItem("mean-token", token);
    this.token = token;
  }

  private saveUser(user: string): void {
    localStorage.setItem("current-user", JSON.stringify(user));
    this.user = user;
  }
}
