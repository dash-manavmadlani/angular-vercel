import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './products.component.html',
})
export class ProductsComponent {
  selectedCategory = 'All';
  
  categories = ['All', 'Electronics', 'Fashion', 'Home & Kitchen', 'Sports', 'Books'];
  
  products = [
    {
      id: 1,
      name: 'Wireless Headphones',
      price: 99.99,
      image: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=300&h=300&fit=crop',
      category: 'Electronics',
      rating: 4.5
    },
    {
      id: 2,
      name: 'Smart Watch',
      price: 199.99,
      image: 'https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=300&h=300&fit=crop',
      category: 'Electronics',
      rating: 4.8
    },
    {
      id: 3,
      name: 'Running Shoes',
      price: 79.99,
      image: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?w=300&h=300&fit=crop',
      category: 'Fashion',
      rating: 4.3
    },
    {
      id: 4,
      name: 'Coffee Maker',
      price: 149.99,
      image: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?w=300&h=300&fit=crop',
      category: 'Home & Kitchen',
      rating: 4.6
    },
    {
      id: 5,
      name: 'Laptop',
      price: 899.99,
      image: 'https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=300&h=300&fit=crop',
      category: 'Electronics',
      rating: 4.7
    },
    {
      id: 6,
      name: 'Designer T-Shirt',
      price: 29.99,
      image: 'https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=300&h=300&fit=crop',
      category: 'Fashion',
      rating: 4.2
    },
    {
      id: 7,
      name: 'Yoga Mat',
      price: 39.99,
      image: 'https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?w=300&h=300&fit=crop',
      category: 'Sports',
      rating: 4.4
    },
    {
      id: 8,
      name: 'Cooking Set',
      price: 89.99,
      image: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=300&h=300&fit=crop',
      category: 'Home & Kitchen',
      rating: 4.5
    },
    {
      id: 9,
      name: 'Programming Book',
      price: 49.99,
      image: 'https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?w=300&h=300&fit=crop',
      category: 'Books',
      rating: 4.9
    }
  ];

  get filteredProducts() {
    if (this.selectedCategory === 'All') {
      return this.products;
    }
    return this.products.filter(product => product.category === this.selectedCategory);
  }

  selectCategory(category: string) {
    this.selectedCategory = category;
  }

  getStarArray(rating: number): boolean[] {
    const stars = [];
    for (let i = 1; i <= 5; i++) {
      stars.push(i <= rating);
    }
    return stars;
  }
}
