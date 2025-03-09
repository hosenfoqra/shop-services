import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private isAuthenticated = false; 

  login(email: string, password: string): boolean {
    if (email === 'ruba@mindolife.com' && password === '1q2w3e') { 
      this.isAuthenticated = true;
      return true;
    }
    return false;
  }

  logout(): void {
    this.isAuthenticated = false;
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated;
  }
}
