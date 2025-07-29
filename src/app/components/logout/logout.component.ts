import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [CommonModule],
  template: `<section class="max-w-2xl mx-auto py-20 px-4 text-center">
    <h1 class="text-4xl font-bold mb-6 text-blue-700">Logged Out</h1>
    <p class="text-lg text-gray-700">You have been logged out. (Static content for demo)</p>
  </section>`
})
export class LogoutComponent {}
