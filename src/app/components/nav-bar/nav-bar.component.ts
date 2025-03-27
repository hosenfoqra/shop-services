import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html'
})
export class NavBarComponent {
  constructor(private router: Router, private loginService: LoginService) { }

  logout() {
    this.loginService.logout();
    this.router.navigate(['/login']);
  }
}
