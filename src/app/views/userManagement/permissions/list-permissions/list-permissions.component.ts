import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../../services/shared/api.service';

@Component({
  selector: 'app-list-permissions',
  templateUrl: './list-permissions.component.html',
  styleUrls: ['./list-permissions.component.scss']
})
export class ListPermissionsComponent implements OnInit {
  public permissionsList: any;
  constructor(public apiService: ApiService, public router: Router) {}

  ngOnInit() {
    this.getSampleData();
  }

  getSampleData() {
    const headers = {
      Authorization: window.localStorage.getItem('mean-token')
    };

    this.apiService
      .postRequest('permission/getPermission', null, true, headers)
      .pipe()
      .subscribe(
        data => {
          //console.log(data.data);
          this.permissionsList = data.data;
          //console.log(data);
        },
        error => {}
      );
  }
  editUser(i) {
    //console.log(JSON.stringify(this.permissionsList[i]));
    let permission = this.permissionsList[i];
    let id = btoa(permission[0]);
    var did = window.atob(id);
    this.router.navigate(['/users/editPermissions'], {
      queryParams: { id }
    });
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
    let permission = this.permissionsList[i];
    //console.log('delete =' + permission[0]);
    this.apiService
      .postRequest(
        'permission/deletePermission',
        { permissionId: permission[0] },
        true,
        headers
      )
      .pipe()
      .subscribe(
        data => {
          //this.router.navigate(['/users/editRole']);
          //  this.router.navigateByUrl('/reload');
          window.location.reload();
        },
        error => {}
      );
  }
}
