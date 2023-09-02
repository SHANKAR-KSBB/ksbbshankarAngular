import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  userID: string='';
  password: string='';
  
  login() 
  {
    console.log('UserID:', this.userID);
    console.log('Password:', this.password);
  }

  path:string="../assets/th.jpg";
}
