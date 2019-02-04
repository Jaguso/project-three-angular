import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'app-form-group',
  templateUrl: './form-group.component.html',
  styleUrls: ['./form-group.component.css']
})
export class FormGroupComponent implements OnInit {
  basicForm = new FormGroup({
    questionOne: new FormControl(''),
    questionTwo: new FormControl(''),
  });

  onSubmit() {
    console.warn(this.basicForm.value);
  }


  constructor() { }

  ngOnInit() {
  }

}
