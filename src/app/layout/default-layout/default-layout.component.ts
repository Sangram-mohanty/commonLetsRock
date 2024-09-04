import { Component } from '@angular/core';
import { DefaultFooterComponent } from '../default-footer/default-footer.component';
import { DefaultHeaderComponent } from '../default-header/default-header.component';
import { SideNavComponent } from '../side-nav/side-nav.component';
import { MainComponent } from '../main/main.component';

@Component({
  selector: 'app-default-layout',
  standalone: true,
  imports: [DefaultFooterComponent,DefaultHeaderComponent,SideNavComponent,MainComponent],
  templateUrl: './default-layout.component.html',
  styleUrl: './default-layout.component.scss'
})
export class DefaultLayoutComponent {

}
