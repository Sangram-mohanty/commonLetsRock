import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { Router } from '@angular/router';
import { faBox, faChartBar, faCoffee, faContactBook, faDashboard, faHand, faLocation, faMoneyBill, faShop } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-side-nav',
  standalone: true,
  imports: [FontAwesomeModule,CommonModule,RouterLink],
  templateUrl: './side-nav.component.html',
  styleUrl: './side-nav.component.scss'
})
export class SideNavComponent implements OnInit {
  faCoffee = faCoffee;
  faDashboard = faDashboard;
  faLocation = faLocation;
  faShop = faShop;
  faBox = faBox;
  faMoneyBill = faMoneyBill;
  faChartBar = faChartBar;
  faContactBook = faContactBook;
  faHand = faHand;
  route: string | undefined;
  constructor(private router: Router) {}
  ngOnInit(): void {
   
  }
  navigateTo(route: string) {
    this.router.navigate([route]);
  }

}
