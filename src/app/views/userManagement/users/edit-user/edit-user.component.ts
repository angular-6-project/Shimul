import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ApiService } from '../../../../services/shared/api.service';

@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.scss']
})
export class EditUserComponent implements OnInit {
  public addproductBox: Boolean = true;
  public submitted = false;
  adunit: any = {};
  multiSelect: any;
  editUserForm: FormGroup;
  userId: any;
  userData: any;
  constructor(public apiService: ApiService, public formBuilder: FormBuilder,
    public router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe(params => {
      this.userId = atob(params.userId);
      this.getUserData();
    });
  }
  ngOnInit() {
    this.editUserForm = this.formBuilder.group({
      id: this.userId,
      firstName: [Validators.required],
      lastName: [Validators.required],
      mobile: ['', [Validators.required, Validators.minLength(6)]],
      email: [Validators.required],
      roleId: ['please Select', Validators.required],
    });
    this.getRolesData();
  }
  // convenience getter for easy access to form fields
  get f() { return this.editUserForm.controls; }
  // get User Data
  getUserData() {
    const headers = {
      'Authorization': window.localStorage.getItem('mean-token')
    };
    const reqBody = { 'userId': this.userId };
    console.log('reqbody' + reqBody);
    this.apiService.postRequest('users/getUser', reqBody, true, headers)
      .pipe()
      .subscribe(data => {
        this.adunit = data.data[0];
        console.log('adunit');
        console.log(this.adunit);
      },
        error => {
        });
  }
  // get Role Data
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
  UpdateUserData() {
    console.log('I have reached here');
    if (this.editUserForm.invalid) {
      this.submitted = true;
      return;
    }

    const headers = {
      'Authorization': window.localStorage.getItem('mean-token')
    };
    console.log('post data');
    console.log(this.editUserForm.value);
    const userData = {
      'id': this.userId,
      'firstName': this.f.firstName.value,
      'lastName': this.f.lastName.value,
      'mobile': this.f.mobile.value,
      'email': this.f.email.value,
      'roleId': [this.f.roleId.value],
    };
    console.log('JD');
    console.log(userData);
    this.apiService.postRequest('users/updateUser', userData, true, headers)
      .pipe()
      .subscribe(data => {
        alert('form updated');
        this.router.navigate(['/users/listUser']);
      },
        error => {

        });
  }
}
