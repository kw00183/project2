import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  constructor(public fb: FormBuilder) {
    this.form = this.fb.group({
      name: [''],
    })
  }

  ngOnInit() { }

  onSubmit() {
    console.log('Name Control Value', this.form.value);
  }
}
