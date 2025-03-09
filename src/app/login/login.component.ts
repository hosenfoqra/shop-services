import { Component } from '@angular/core';
import { LoggerService } from '../services/logger.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password = '';
  email = '';

  constructor(private loggerService: LoggerService, private router: Router){}
  onLogin(){
    if (this.loggerService.login(this.email, this.password)) {
      this.router.navigate(['/shop']); 
    } else {
      alert('Invalid credentials');
    }
  }
}
