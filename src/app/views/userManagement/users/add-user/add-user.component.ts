import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MustMatch } from '../../../_helpers/MustMatch';
import { ApiService } from '../../../../services/shared/api.service';
import { UniqueUseridValidator } from '../../../_helpers/unique-userid-validator.directive';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.scss']
})
export class AddUserComponent implements OnInit {
  public addproductBox: Boolean = true;
  public submitted = false;
  postData: any;
  multiSelect: any;
  addUserForm: FormGroup;
  selectedValues = ['Dealers', 'FGS'];
  constructor(public formBuilder: FormBuilder, public apiService: ApiService, public router: Router,
  ) { }

  ngOnInit() {
    this.addUserForm = this.formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      userId: ['', Validators.required, UniqueUseridValidator(this.apiService)],
      mobile: ['', [Validators.required, Validators.minLength(10), Validators.maxLength(10)]],
      email: [''],
      roleId: [''],
      password: ['', Validators.required],
      confirmPassword: ['', Validators.required]
    }, {
        validator: MustMatch('password', 'confirmPassword')
      });
    this.getRolesData();
  }
  // for Unique Validatior
  get userId() {
    return this.addUserForm.get('userId');
  }
  // convenience getter for easy access to form fields
  get f() { return this.addUserForm.controls; }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.addUserForm.invalid) {
      return;
    }
    console.log(this.addUserForm.value);
    console.log('SUCCESS!! :-)');
    this.PostUserData();
  }




  getRolesData() {
    const headers = {
      'Authorization': window.localStorage.getItem('mean-token')
    };
    const reqBody = { 'roleId': '0' };
    this.apiService.postRequest('rbac/getRoles', reqBody, true, headers)
      .pipe()
      .subscribe(data => {
        this.multiSelect = data.data;
        console.log(this.multiSelect);
      },
        error => {

        });
  }
  PostUserData() {
    const headers = {
      'Authorization': window.localStorage.getItem('mean-token')
    };
    const userData = {
      'firstName': this.f.firstName.value,
      'lastName': this.f.lastName.value,
      'userId': this.f.userId.value,
      'mobile': this.f.mobile.value,
      'email': this.f.email.value,
      'password': this.f.password.value,
      'roleId': [this.f.roleId.value],
    };
    console.log('post data');
    console.log(userData);
    this.apiService.postRequest('users/addUser', userData, true, headers)
      .pipe()
      .subscribe(data => {
        alert('User added !!!');
        this.router.navigate(['/users/listUser']);

      },
        error => {

        });
  }
}
