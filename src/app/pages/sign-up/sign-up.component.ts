import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css',
})
export class SignupComponent {
  signupObj: Signup;

  constructor(private http: HttpClient, private router: Router) {
    this.signupObj = new Signup();
  }

  onSignup() {
    this.http
      .post(
        'https://freeapi.miniprojectideas.com/api/EventBooking/CreateUser',
        this.signupObj
      )
      .subscribe((res: any) => {
        if (res.result) {
          alert('Signup Successful');
          this.router.navigateByUrl('Signup');
        } else {
          alert(res.message);
        }
      });
  }
}

export class Signup {
  UserId!: number;
  Name!: string;
  Email!: string;
  Password!: string;
  ContactNo!: string;
  Role!: string;

  constructor() {
    this.UserId = 0;
    this.Name = '';
    this.Email = '';
    this.Password = '';
    this.ContactNo = '';
    this.Role = '';
  }
}
