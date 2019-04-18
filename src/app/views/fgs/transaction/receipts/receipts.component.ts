import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-receipts',
  templateUrl: './receipts.component.html',
  styleUrls: ['./receipts.component.scss']
})
export class ReceiptsComponent implements OnInit {
  showActions: Boolean = false;
  showList: Boolean = true;
  showEdit: Boolean = false;
  public mpcs_name = 'Bangalore';
  public erp_reference_code = 'BAN7896';
  public gl_reference = 'GL2566';
  public address = 'JP Nahar 1st Phase';
  public primary_contact_person = 'Deva Ravi';
  public contact_number = '9738181869';
  constructor() { }

  ngOnInit() {
  }
  addUser() {
    this.showActions = true;
    this.showList = false;
    this.showEdit = false;
  }
  listUser() {
    this.showList = true;
    this.showActions = false;
    this.showEdit = false;
  }
  editUser() {
    this.showEdit = true;
    this.showList = false;
    this.showActions = false;
  }

}
