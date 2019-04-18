import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from '../../../../services/shared/api.service';

@Component({
  selector: 'app-list-user',
  templateUrl: './list-user.component.html',
  styleUrls: ['./list-user.component.scss']
})
export class ListUserComponent implements OnInit {
  public usersList: any;
  constructor(
    public apiService: ApiService,
    public router: Router
    ) { }

  ngOnInit() {
    this.getSampleData();
  }
  getSampleData() {
    const headers = {
     'Authorization': window.localStorage.getItem('mean-token')
    };

    this.apiService.getRequest('day/day', null, true, headers)
    .pipe()
    .subscribe(data => {
      console.log(data.data);
      this.usersList = data.data;
      // console.log('this.usersList');
    },
    error => {

    });
  }
  // edit user
  editUser(id) {
    console.log(id);
    // console.log(this.usersList);
    const userId = btoa(id);
     console.log('userId' + userId);
    //  console.log(userId);
    this.router.navigate(['/users/editUser'], {queryParams: { userId } });
  }
}
