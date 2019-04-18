import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {
  public addproductBox: Boolean = true;
  public submitted = false;

  addForm: FormGroup;
   constructor( public formBuilder: FormBuilder) { }

   ngOnInit() {
     this.addForm = this.formBuilder.group({
       productName: ['', Validators.required],
       fatPer: ['', Validators.required],
       snfPer: ['', Validators.required],
       m_or_p: ['', Validators.required],
       productAlias: ['', Validators.required],
       defaultUnit: ['', Validators.required],
       kgPerLtr: ['', Validators.required],
       prodPosition: ['', Validators.required],
       reqForTrg: ['', Validators.required]

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
