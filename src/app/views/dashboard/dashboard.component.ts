import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LastFewTransactionsComponent } from '../../layout/last-few-transactions/last-few-transactions.component';
import { SalesByCategoryComponent } from '../../layout/sales-by-category/sales-by-category.component';
import { SalesByMonthComponent } from '../../layout/sales-by-month/sales-by-month.component';
import { TopThreeProductsComponent } from '../../layout/top-three-products/top-three-products.component';
import { TopWidgetsComponent } from '../../layout/top-widgets/top-widgets.component';

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [TopWidgetsComponent,SalesByMonthComponent,SalesByCategoryComponent,LastFewTransactionsComponent,TopThreeProductsComponent,RouterOutlet],

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

}
