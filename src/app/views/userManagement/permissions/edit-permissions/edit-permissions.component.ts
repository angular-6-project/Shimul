import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { ApiService } from '../../../../services/shared/api.service';
import { Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-permissions',
  templateUrl: './edit-permissions.component.html',
  styleUrls: ['./edit-permissions.component.scss']
})
export class EditPermissionsComponent implements OnInit {

  permissions: any;
  editForm: FormGroup;
  public permissionList: any;
  submitted: boolean;
  editPermissionsList: any;

  constructor(
    public formBuilder: FormBuilder,
    public apiService: ApiService,
    public router: Router,
    private route: ActivatedRoute
  ) {
    // var decrypted = this.EncrDecr.get('123456$#@$^@1ERF', encrypted);
// to decode id content sent from list-role
    this.route.queryParams.subscribe(params => {
      this.permissions = params.id;
      const editId = (atob(this.permissions));
      //console.log('edit_1 = ' + editId);
     // var id1 = ({ 'permissionId' : editId });
      this.PostUserEditData(editId);
      // //console.log('id1 = ' + editId);
    });
  }

  PostUserEditData(id1) {
    //console.log('edit_2 = ' + id1);
    const headers = {
      Authorization: window.localStorage.getItem('mean-token')
    };

    this.apiService
      .postRequest('permission/getPermission', { 'permissionId' : id1 } , true, headers)
      .pipe()
      .subscribe(
        data => {
          this.editPermissionsList = data.data;
          //console.log('edit_4 = ' + this.editPermissionsList);
        //  this.router.navigate(['/users/listRole']);
        },
        error => {}
      );
  }



  ngOnInit() {
    this.editForm = this.formBuilder.group({
      permissionId: this.editPermissionsList,
      permissionName: [Validators.required]
    });
  }
  get f() {
    return this.editForm.controls;
  }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.editForm.invalid) {
      return;
    }
    //console.log(this.editForm.value);
    //console.log(JSON.stringify(this.editForm.value));
    this.PostUserData(this.editForm.value);
  }

  PostUserData(sRequestModel) {
    //console.log('request' + sRequestModel);
    const headers = {
      Authorization: window.localStorage.getItem('mean-token')
    };

    this.apiService
      .postRequest('permission/updatePermission', sRequestModel, true, headers)
      .pipe()
      .subscribe(
        data => {
          this.router.navigate(['users/listPermissions']);
        },
        error => {}
      );
  }

}
