import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  constructor() {}
  newUser = null;

  username = new FormControl('');
  email = new FormControl('');
  password = new FormControl('');
  addressLine = new FormControl('');
  city = new FormControl('');
  cityCode = new FormControl('');

  onSubmit(e) {
    e.preventDefault();

    this.newUser = {
      username: this.username.value,
      email: this.email.value,
      password: this.password.value,
      addressLine: this.addressLine.value,
      city: this.city.value,
      cityCode: this.cityCode.value,
    };
  }
}
