
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  private isAuthenticated = false;

<<<<<<< HEAD
  constructor(private http: HttpClient, private router: Router) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>("http://localhost:3000/api/login", { username: email, password })
      .pipe(tap(data => {
        this.isAuthenticated = true;
        localStorage.setItem('token', data.token);
      }));
=======
  login(email: string, password: string): boolean {
    if (email === 'hosen' && password === 'hosen') { 
      this.isAuthenticated = true;
      return true;
    }
    return false;
>>>>>>> a0b93259256b155bc10a5c5987088b35998dd0f2
  }

  logout(): void {
    this.isAuthenticated = false;
    localStorage.removeItem('token');
  }

  isLoggedIn(): boolean {
    return this.isAuthenticated || !!localStorage.getItem('token');
  }
}
