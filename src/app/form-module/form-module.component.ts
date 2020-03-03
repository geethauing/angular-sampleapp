import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

// import custom validator to validate that password and confirm password fields match
import { MustMatch } from '../_helpers/must-match.validator';

@Component({
  selector: 'app-form-module',
  templateUrl: './form-module.component.html',
  styleUrls: ['./form-module.component.css']
})
export class FormModuleComponent implements OnInit {
  // angForm: FormGroup;
  // constructor(private fb: FormBuilder) {
  //   this.createForm();
  //  }
  //  createForm() {
  //   this.angForm = this.fb.group({
  //     email: [''],
  //     password: ['']
  //   });
  // }
  // onClickSubmit(email,pwd) {
  //   alert('your email is:' + email + 'your password is:' + pwd);   
  // }
  // ngOnInit() {
  // }
  registerForm: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder) { }
  ngOnInit() {
    this.registerForm = this.formBuilder.group({
      title: ['', Validators.required],
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
      acceptTerms: [false, Validators.requiredTrue],
      country: this.validateMinMax(1,2),
      area: this.validateMinMax(3,3),
      prefix: this.validateMinMax(3,3),
      line: this.validateMinMax(4,4),
    }, {  
      validator: MustMatch('password', 'confirmPassword')
  });
}
//helper to dry the code
validateMinMax(min,max) {
  return ['',[Validators.required,Validators.minLength(min), Validators.maxLength(max),Validators.pattern('[0-9]+')]] //validates input is digit
}
//format to E164
get e164() {
  const form = this.registerForm.value;
  const num = form.country + form.area + form.prefix + form.line;
  return '+${num}';
}

   //Convinence getter f() for easy access to form fields
   get f() { return this.registerForm.controls; }

   onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.registerForm.invalid) {
        return;
    }

    // display form values on success
    alert('SUCCESS!! :-)\n\n' + JSON.stringify(this.registerForm.value, null, 4));
}
onReset() {
  this.submitted = false;
  this.registerForm.reset();
}
  }
  

