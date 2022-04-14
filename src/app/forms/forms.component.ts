import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  isSubmitted: boolean = false;

  groupedForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    age: ''
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {

  }

  onSubmit(): void {
    this.isSubmitted = true;
    console.warn('Form submitted', this.groupedForm.value)
  }

  resetForm(): void{
    this.isSubmitted = false;
    this.groupedForm.reset();
  }

}
