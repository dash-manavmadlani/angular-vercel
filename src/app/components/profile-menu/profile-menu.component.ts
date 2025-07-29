import { Component, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile-menu',
  standalone: true,
  imports: [CommonModule, RouterModule],
  template: `
    <div class="relative">
      <button 
        (click)="toggleDropdown($event)" 
        class="flex items-center justify-center w-10 h-10 bg-gray-200 rounded-full focus:outline-none cursor-pointer hover:bg-gray-300 transition-colors">
        <svg class="w-6 h-6 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 15c2.485 0 4.797.657 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0z" />
        </svg>
      </button>
      <div 
        *ngIf="dropdownOpen" 
        class="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg py-2 z-50 border"
        (click)="$event.stopPropagation()">
        <a routerLink="/profile" (click)="closeDropdown()" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors">My Profile</a>
        <a routerLink="/wishlist" (click)="closeDropdown()" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors">Wishlist</a>
        <a routerLink="/orders" (click)="closeDropdown()" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors">Orders</a>
        <a routerLink="/rewards" (click)="closeDropdown()" class="block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors">Rewards</a>
        <div class="border-t my-1"></div>
        <button (click)="logout()" class="w-full text-left block px-4 py-2 text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors">Log out</button>
      </div>
    </div>
  `,
  styles: [`
    .cursor-pointer { cursor: pointer; }
  `]
})
export class ProfileMenuComponent {
  dropdownOpen = false;

  constructor(private authService: AuthService) {}

  toggleDropdown(event: Event) {
    event.stopPropagation();
    this.dropdownOpen = !this.dropdownOpen;
  }

  closeDropdown() {
    this.dropdownOpen = false;
  }

  logout() {
    this.authService.logout();
    this.closeDropdown();
  }

  @HostListener('document:click', ['$event'])
  onDocumentClick(event: Event) {
    this.dropdownOpen = false;
  }
}
