import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  private isAuthenticated: boolean = false;

  login(username: string, password: string): Observable<boolean> {
    // For demonstration, accept any non-empty credentials.
    if (username && password) {
      this.isAuthenticated = true;
      localStorage.setItem('token', 'dummy-token');
      return of(true);
    }
    return of(false);
  }

  logout() {
    this.isAuthenticated = false;
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }
}
