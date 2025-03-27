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
  onLogin() {
    this.loggerService.login(this.email, this.password).subscribe({
      next: (data) => {
        console.log('Login Success:', data);
        this.router.navigate(['/products']);
      },
      error: (err) => {
        console.error('Login error:', err);
        alert('Login failed! Check credentials.');
      }
    });
  }
}  
