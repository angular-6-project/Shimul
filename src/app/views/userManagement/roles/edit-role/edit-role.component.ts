import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { ApiService } from '../../../../services/shared/api.service';
import { Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-role',
  templateUrl: './edit-role.component.html',
  styleUrls: ['./edit-role.component.scss']
})
export class EditRoleComponent implements OnInit {
  role: any;
  editForm: FormGroup;
  public roleList: any;
  submitted: boolean;

  constructor(public formBuilder: FormBuilder,
    public apiService: ApiService,
    public router: Router, private route: ActivatedRoute) {
      this.route.queryParams.subscribe(params => {
        this.role = params.role;
        console.log(this.role);
    });
  }

  ngOnInit() {
    this.editForm = this.formBuilder.group({
      roleId : this.role[0],
      roleName: [Validators.required]
    });
  }
  get f() { return this.editForm.controls; }

  onSubmit() {
    this.submitted = true;
    // stop here if form is invalid
    if (this.editForm.invalid) {
        return;
    }
   console.log(this.editForm.value);
   console.log(JSON.stringify(this.editForm.value));
   this.PostUserData(this.editForm.value);
  }

  PostUserData(sRequestModel) {
    console.log(sRequestModel);
    const headers = {
     'Authorization': window.localStorage.getItem('mean-token')
    };

    this.apiService.postRequest('roles/updateRole', sRequestModel, true, headers)
    .pipe()
    .subscribe(data => {
      this.router.navigate(['/users/listRole']);
    },
    error => {

    });
  }


}
