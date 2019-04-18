import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-packet',
  templateUrl: './add-packet.component.html',
  styleUrls: ['./add-packet.component.scss']
})
export class AddPacketComponent implements OnInit {
  public addproductBox: Boolean = true;
  public submitted = false;

  addForm: FormGroup;
   constructor( public formBuilder: FormBuilder) { }

   ngOnInit() {
     this.addForm = this.formBuilder.group({
      packetCode: ['', Validators.required],
      packetName: ['', Validators.required],
      productCode: ['', Validators.required],
      mrp: ['', Validators.required],
      subRate: ['', Validators.required],
      fatPer: ['', Validators.required],
      snfPer: ['', Validators.required],
      units: ['', Validators.required],
      RegorNot: ['', Validators.required],
      MilkorProduct: ['', Validators.required],
      terminated: ['', Validators.required],
      usersCode: ['', Validators.required],
      crates: ['', Validators.required],
      sacNo: ['', Validators.required],
      uom: ['', Validators.required]

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

    alert('SUCCESS!! :-)');
 }


}
