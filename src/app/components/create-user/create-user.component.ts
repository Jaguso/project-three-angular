import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({    
  selector: 'create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent {
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
    email: new FormControl(''),
  });

  onSubmit() {
    console.warn(this.profileForm.value);
  }
}