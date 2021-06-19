import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Validators, FormBuilder } from '@angular/forms';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent {

  public contestantsForm: FormGroup;
  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  createForm() {
    this.contestantsForm = this.fb.group({
      contestant0: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      contestant1: new FormControl(null, [Validators.required, Validators.minLength(2)]),
      contestant2: new FormControl(null, [Validators.minLength(2)]),
      contestant3: new FormControl(null, [Validators.minLength(2)]),
      contestant4: new FormControl(null, [Validators.minLength(2)]),
      contestant5: new FormControl(null, [Validators.minLength(2)]),
      contestant6: new FormControl(null, [Validators.minLength(2)]),
      contestant7: new FormControl(null, [Validators.minLength(2)])
    });
  }

  onSubmit() {
    console.log('Contestants Form Value', this.contestantsForm.value);
  }
}
