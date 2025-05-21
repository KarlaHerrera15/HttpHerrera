import { Component, Input } from '@angular/core';
import { Vegetables } from '../model/vegetables.model';
import { DetailsComponent } from '../details/details.component';

@Component({
  selector: 'app-vegetable-list',
  standalone: true,
  imports: [DetailsComponent],
  templateUrl: './vegetable-list.component.html',
  styleUrl: './vegetable-list.component.css'
})
export class VegetableListComponent {
@Input() vegetali!: Vegetables;

  
}
