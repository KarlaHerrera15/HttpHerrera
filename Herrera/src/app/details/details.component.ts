import { Component, Input } from '@angular/core';
import { Vegetables } from '../model/vegetables.model';
import { CartProduct } from '../model/cartproduct.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-details',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  @Input() vettcartProduct!: CartProduct[];
}
