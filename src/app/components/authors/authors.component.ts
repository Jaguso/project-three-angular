import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { AuthorsService } from '../../services/authors.service';

@Component({
  selector: 'app-authors',
  templateUrl: './authors.component.html',
  styleUrls: ['./authors.component.css']
})
export class AuthorsComponent implements OnInit {

  constructor(private authorsService: AuthorsService) { }

  ngOnInit() {
    this.authorsService.getAuthors().subscribe((authors) => {
      console.log(authors);
    });
  }

  authorForm = new FormGroup({
    name: new FormControl(''),
    nationality: new FormControl('')
  });

  onSubmit() {
    console.warn(this.authorForm.value);
  }

}
