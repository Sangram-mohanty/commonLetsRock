import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router'; // Correct import for Router
import { MessageService } from 'primeng/api';
import { CardModule } from 'primeng/card';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CardModule, CommonModule, FormsModule, ReactiveFormsModule, ButtonModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'] // Corrected property name
})
export class LoginComponent  {
 
  loginObj: Login;

  constructor(private http: HttpClient,private router: Router) {
    this.loginObj = new Login();
  }
 

 

  onLogin() {
    this.router.navigateByUrl('/dashboard')
   
  }
}


export class Login { 
  EmailId: string;
  Password: string;
  constructor() {
    this.EmailId = '';
    this.Password = '';
  } 
}