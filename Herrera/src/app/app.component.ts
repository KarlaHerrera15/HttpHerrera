import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Vegetables } from './model/vegetables.model';
import { Observable } from 'rxjs';
import { VegetableListComponent } from './vegetable-list/vegetable-list.component';
import { Input } from '@angular/core';
import { CartProduct } from './model/cartproduct.model';
import { DetailsComponent } from './details/details.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, VegetableListComponent, DetailsComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'herrera';
  vettVegetables : Vegetables[] = [];
  vettcartProduct : CartProduct[] = [];
  http: HttpClient;
  loading: boolean = false;
  o!: Observable<Vegetables[]>;

    constructor(http: HttpClient) {
    this.http = http;
    this.loading = true;
    this.o = this.http.get<Vegetables[]>('https://my-json-server.typicode.com/malizia-g/fine_anno_exp/verdure');
    this.o.subscribe(this.getData);
  }
  getData = (d: Vegetables[]) => {
    this.vettVegetables = d;
    console.log(this.vettVegetables)
    this.loading = false;
  }

  add(quantita: HTMLInputElement, vegetali: Vegetables): boolean{ 
    this.vettcartProduct.push(new CartProduct (vegetali, quantita.value))
    console.log(quantita.value, vegetali)
    return false;
  }

 
}
