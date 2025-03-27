
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { LoggerService } from './services/logger.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor(private logger: LoggerService, private router: Router) {}

  canActivate(): boolean {
    if (this.logger.isLoggedIn()) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }
}
