import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
  name: string = "";

  checkoutForm = this.formBuilder.group({
    firstName: '',
    lastName: '',
    age: ''
  })

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
  }

  onSubmit(): void {
    console.warn('Form submitted', this.checkoutForm.value)
    this.checkoutForm.reset();
  }

}
