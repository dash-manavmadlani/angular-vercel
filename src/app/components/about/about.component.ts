import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule],
  template: `<section class="max-w-3xl mx-auto py-20 px-4 text-center">
    <h1 class="text-4xl font-bold mb-6 text-blue-700">About ShopEasy</h1>
    <p class="text-lg text-gray-700 mb-4">ShopEasy is your one-stop shop for the latest electronics, fashion, home essentials, and more. We are passionate about bringing you the best products at unbeatable prices, with a seamless and enjoyable shopping experience.</p>
    <p class="text-gray-600">Our mission is to make online shopping easy, secure, and fun for everyone. Thank you for choosing ShopEasy!</p>
  </section>`
})
export class AboutComponent {}
