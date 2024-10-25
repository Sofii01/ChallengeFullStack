import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import {FormControl, Validators, FormGroupDirective, NgForm } from '@angular/forms';
import {LoginService} from '../services/login.service'
import { Router } from '@angular/router';
import {ErrorStateMatcher} from '@angular/material/core';



export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  matcher = new MyErrorStateMatcher();
  form: FormGroup;

  showPassword = false;
  authenticated = false;
  errorMessage: string = '';

  constructor(
    private fb: FormBuilder,
    private loginService: LoginService,
    private router: Router,
  ) {
    this.form = this.fb.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(8)]]
    })
  }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  onSubmit(){
    if(this.form.invalid){
      return;
    }

    const email = this.form.get('email')?.value;
    const password = this.form.get('password')?.value;

    this.loginService.login({email, password}).subscribe(
      response =>{
        console.log(response)
        if(response && response.token){
          this.authenticated = true;
          this.router.navigate(['/dashboard']);
        }
        if(this.loginService.getToken == null){
          this.router.navigate([''])
        }

      },
      error => {
        console.log(error)
        this.errorMessage = 'Usuario no registrado o credenciales incorrectas.';
      }
    )
  }

}


