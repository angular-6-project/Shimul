import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-salesman',
  templateUrl: './add-salesman.component.html',
  styleUrls: ['./add-salesman.component.scss']
})
export class AddSalesmanComponent implements OnInit {
  addForm: FormGroup;
  submitted: boolean;

  constructor( public formBuilder: FormBuilder) { }

  ngOnInit() {
    this.addForm = this.formBuilder.group({
      SalesmanCode: ['', Validators.required],
      SalesmanName: ['', Validators.required],
    });
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
        alert('SUCCESS!! :-)');
  }
}
