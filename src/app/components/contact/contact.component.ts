import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule],
  template: `<section class="max-w-3xl mx-auto py-20 px-4 text-center">
    <h1 class="text-4xl font-bold mb-6 text-blue-700">Contact Us</h1>
    <p class="text-lg text-gray-700 mb-8">Have questions or feedback? We'd love to hear from you!</p>
    <form class="space-y-6 max-w-md mx-auto">
      <input type="text" placeholder="Your Name" class="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500">
      <input type="email" placeholder="Your Email" class="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500">
      <textarea placeholder="Your Message" rows="4" class="w-full px-4 py-3 rounded border border-gray-300 focus:outline-none focus:border-blue-500"></textarea>
      <button type="submit" class="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors w-full">Send Message</button>
    </form>
  </section>`
})
export class ContactComponent {}
