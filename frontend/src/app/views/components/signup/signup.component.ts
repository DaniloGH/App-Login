import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidatorFn, Validators, AsyncValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {
  signupForm: FormGroup;
  emailPattern = '^[_A-Za-z0-9-\\+]+(\\.[_A-Za-z0-9-]+)*@[A-Za-z0-9-]+(\\.[A-Za-z0-9]+)*(\\.[A-Za-z]{2,})$';
  pwdPattern = '^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*[$*&@#])[0-9a-zA-Z$*&@#]{8,}$';

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
    this.signupForm = this.formBuilder.group({
      email: [null, [Validators.required, Validators.pattern(this.emailPattern)]],
      pwd: [null, [Validators.required, Validators.pattern(this.pwdPattern)]], 
      checkPwd: [null, [Validators.required]],
    }, {
      validator: this.compareFields('pwd', 'checkPwd') 
    });
  }

  compareFields(field: string, otherField: string){
    const validator = (formGroup: FormGroup) => {
      const firstField = formGroup.controls[field];
      const secondField = formGroup.controls[otherField];

      if(firstField.errors){
        return;
      }
      if(firstField.value && secondField.value){
        firstField.value !== secondField.value ? secondField.setErrors({ diff: true}) : null;
      }
    }
    return validator;
  }

  onSubmit() {
    if(this.signupForm.valid){
      console.log('Dados enviados ao servidor: ', JSON.stringify(this.signupForm));
    }
  }
}