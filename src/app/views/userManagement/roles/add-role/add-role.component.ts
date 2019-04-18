import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder} from '@angular/forms';
import { MustMatch } from '../../../_helpers/MustMatch';
import { ApiService } from '../../../../services/shared/api.service';
import { Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-role',
  templateUrl: './add-role.component.html',
  styleUrls: ['./add-role.component.scss']
})
export class AddRoleComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean;

  constructor(
    public formBuilder: FormBuilder,
    public apiService: ApiService,
    public router: Router
    ) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      roleName: ['', Validators.required]
        },);
  }

   // convenience getter for easy access to form fields
   get f() { return this.addForm.controls; }
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
   'Authorization': window.localStorage.getItem('mean-token')
  }

  this.apiService.postRequest('roles/addRole', sRequestModel, true, headers)
  .pipe()
  .subscribe(data => {
    this.router.navigate(['/users/listRole']);
  },
  error => {

  });
}

}
