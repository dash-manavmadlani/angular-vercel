import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-create-account',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterModule],
  template: `
    <section class="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div class="max-w-md w-full space-y-8">
        <div>
          <h2 class="mt-6 text-center text-3xl font-extrabold text-gray-900">
            Create your account
          </h2>
          <p class="mt-2 text-center text-sm text-gray-600">
            Join ShopEasy today
          </p>
        </div>
        <form class="mt-8 space-y-6" (ngSubmit)="onSubmit()">
          <div class="space-y-4">
            <div>
              <label for="fullName" class="block text-sm font-medium text-gray-700">Full Name</label>
              <input 
                id="fullName" 
                name="fullName" 
                type="text" 
                [(ngModel)]="fullName"
                required 
                class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                placeholder="Enter your full name">
            </div>
            <div>
              <label for="email" class="block text-sm font-medium text-gray-700">Email Address</label>
              <input 
                id="email" 
                name="email" 
                type="email" 
                [(ngModel)]="email"
                required 
                class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                placeholder="Enter your email">
            </div>
            <div>
              <label for="password" class="block text-sm font-medium text-gray-700">Create Password</label>
              <input 
                id="password" 
                name="password" 
                type="password" 
                [(ngModel)]="password"
                required 
                class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                placeholder="Create a password">
            </div>
            <div>
              <label for="confirmPassword" class="block text-sm font-medium text-gray-700">Re-type Password</label>
              <input 
                id="confirmPassword" 
                name="confirmPassword" 
                type="password" 
                [(ngModel)]="confirmPassword"
                required 
                class="mt-1 appearance-none relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 rounded-md focus:outline-none focus:ring-blue-500 focus:border-blue-500 sm:text-sm" 
                placeholder="Confirm your password">
            </div>
          </div>

          <div *ngIf="errorMessage" class="text-red-600 text-sm text-center">
            {{ errorMessage }}
          </div>

          <div *ngIf="successMessage" class="text-green-600 text-sm text-center">
            {{ successMessage }}
          </div>

          <div>
            <button 
              type="submit" 
              class="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 cursor-pointer transition-colors">
              Create Account
            </button>
          </div>

          <div class="text-center">
            <p class="text-sm text-gray-600">
              Already have an account? 
              <a routerLink="/login" class="font-medium text-blue-600 hover:text-blue-500 cursor-pointer">
                Sign in
              </a>
            </p>
          </div>
        </form>
      </div>
    </section>
  `
})
export class CreateAccountComponent {
  fullName = '';
  email = '';
  password = '';
  confirmPassword = '';
  errorMessage = '';
  successMessage = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Reset messages
    this.errorMessage = '';
    this.successMessage = '';

    // Basic validation
    if (!this.fullName || !this.email || !this.password || !this.confirmPassword) {
      this.errorMessage = 'Please fill in all fields';
      return;
    }

    if (this.password !== this.confirmPassword) {
      this.errorMessage = 'Passwords do not match';
      return;
    }

    if (this.password.length < 6) {
      this.errorMessage = 'Password must be at least 6 characters long';
      return;
    }

    // For now, just show success and navigate to login
    this.successMessage = 'Account created successfully! Redirecting to login...';
    
    setTimeout(() => {
      this.router.navigate(['/login']);
    }, 2000);
  }
}
