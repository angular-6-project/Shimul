import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ApiService } from '../../../../services/shared/api.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-permissions',
  templateUrl: './add-permissions.component.html',
  styleUrls: ['./add-permissions.component.scss']
})
export class AddPermissionsComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean;

  constructor(
    public formBuilder: FormBuilder,
    public apiService: ApiService,
    public router: Router
  ) {}

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      permissionName: ['', Validators.required]
    });
  }

  // convenience getter for easy access to form fields
  get f() {
    return this.addForm.controls;
  }
  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.addForm.invalid) {
      return;
    }
    console.log(this.addForm.value);
    console.log(JSON.stringify(this.addForm.value));
    // alert('SUCCESS!! :-)');
    this.PostUserData(this.addForm.value);
  }

  PostUserData(sRequestModel) {
    console.log(this.addForm.value);
    const headers = {
      Authorization: window.localStorage.getItem('mean-token')
    };

    this.apiService
      .postRequest('permission/addPermission', sRequestModel, true, headers)
      .pipe()
      .subscribe(
        data => {
          this.router.navigate(['users/listPermissions']);
        },
        error => {}
      );
  }

}
