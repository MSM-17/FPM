import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, NgForm, ReactiveFormsModule, Validators } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Router } from '@angular/router';
import { ChartModule } from 'primeng/chart'; // Adjust the library path if necessary
import { LoginService } from '../../../services/login.service';
import { LoginResponse } from '../../../models/model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,CommonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  LoginForm!: FormGroup;
  minLength = 6
  data: any;

  options: any;
  constructor(public fb: FormBuilder, public router:Router, public loginService: LoginService){
  }

  ngOnInit() {
    this.generateForm();
  }

  generateForm(){
    this.LoginForm = this.fb.group({
      email: ['',[Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(this.minLength)]],
      remember: [false],
    });
  }

  onSubmit(){
    console.log(this.LoginForm.value);
    if(this.LoginForm.valid){
      this.loginService.login({email: this.LoginForm.value.email, password: this.LoginForm.value.password}).subscribe({
        next:(res:LoginResponse) =>{
          if(res.success){
            this.router.navigate(['/Dashboard']);
          }else{
            window.alert(res.message);
          }
        },
        error:(err) =>{
          window.alert(err.message);
        }
      })
    }
  }

  goToDashboard(){
    this.router.navigate(['/Dashboard']);
  }
}
