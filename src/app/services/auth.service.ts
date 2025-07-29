import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isLoggedInSubject = new BehaviorSubject<boolean>(false);
  public isLoggedIn$ = this.isLoggedInSubject.asObservable();

  // Static credentials for demo
  private staticEmail = 'user@shopeasy.com';
  private staticPassword = 'password123';

  constructor(private router: Router) {
    // Check if user was previously logged in (localStorage)
    const savedLoginState = localStorage.getItem('isLoggedIn');
    if (savedLoginState === 'true') {
      this.isLoggedInSubject.next(true);
    }
  }

  login(email: string, password: string): boolean {
    if (email === this.staticEmail && password === this.staticPassword) {
      this.isLoggedInSubject.next(true);
      localStorage.setItem('isLoggedIn', 'true');
      this.router.navigate(['/']);
      return true;
    }
    return false;
  }

  logout(): void {
    this.isLoggedInSubject.next(false);
    localStorage.removeItem('isLoggedIn');
    this.router.navigate(['/']);
  }

  get isLoggedIn(): boolean {
    return this.isLoggedInSubject.value;
  }
}
