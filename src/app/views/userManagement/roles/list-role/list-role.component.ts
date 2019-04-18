import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../../services/shared/api.service';

@Component({
  selector: 'app-list-role',
  templateUrl: './list-role.component.html',
  styleUrls: ['./list-role.component.scss']
})
export class ListRoleComponent implements OnInit {
  public roleList: any;
  constructor(public apiService: ApiService, public router: Router) {}

  ngOnInit() {
    this.getSampleData();
  }

  getSampleData() {
    const headers = {
      Authorization: window.localStorage.getItem('mean-token')
    };

    this.apiService
      .postRequest('roles/getRoles', null, true, headers)
      .pipe()
      .subscribe(
        data => {
          // console.log(data.data);
          this.roleList = data.data;
          // console.log(data);
        },
        error => {}
      );
  }

  editUser(i) {
    // localStorage.removeItem('roleId');
    // localStorage.setItem('roleId', roleList[1]);
    // console.log(JSON.stringify(this.roleList[i]));
    const role = this.roleList[i];
    this.router.navigate(['/users/editRole/'], {
      queryParams: { role },
      skipLocationChange: true
    });
    // window.history.pushState('','','#/users/editRole/')
    // //console.log(role);
    // alert(this.roleList[0]);
  }

  deleteUser(i) {
    //   this.userService.deleteUser(user.id)
    //     .subscribe( data => {
    //       this.users = this.users.filter(u => u !== user);
    //     })
    // };
    const headers = {
      Authorization: window.localStorage.getItem('mean-token')
    };
    const role = this.roleList[i];
    // console.log('delete =' + role[0]);
    this.apiService
      .postRequest('roles/deleteRole', { roleId: role[0] }, true, headers)
      .pipe()
      .subscribe(
        data => {
          // this.router.navigate(['/users/editRole']);
          //  this.router.navigateByUrl('/reload');
          window.location.reload();
        },
        error => {}
      );
  }
}
