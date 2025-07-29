import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  featuredProducts = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
      category: 'Electronics'
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
      category: 'Electronics'
    },
    {
      id: 3,
      name: 'Running Shoes',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
      category: 'Fashion'
    },
    {
      id: 4,
      name: 'Coffee Maker',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop',
      category: 'Home & Kitchen'
    }
  ];

  categories = [
    {
      name: 'Electronics',
      icon: '📱',
      description: 'Latest gadgets and tech'
    },
    {
      name: 'Fashion',
      icon: '👕',
      description: 'Trendy clothing and accessories'
    },
    {
      name: 'Home & Kitchen',
      icon: '🏠',
      description: 'Everything for your home'
    },
    {
      name: 'Sports',
      icon: '⚽',
      description: 'Sports and fitness gear'
    }
  ];
}
