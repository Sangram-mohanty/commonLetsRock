import { Routes } from '@angular/router';
import { DefaultLayoutComponent } from './layout/default-layout/default-layout.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: 'dashboard',
        pathMatch: 'full'
    },
    {
        path: '',
    component: DefaultLayoutComponent,
    data: {
        title: 'Home'
      },
      children: [
        {
          path: 'dashboard',
          loadChildren: () => import('./views/dashboard/route').then((m) => m.routes)
        },
        {
          path: 'products',
          loadComponent: () => import('./layout/product/product.component').then(m => m.ProductComponent),
          data: {
            title: 'Product Page'
          }
        }

    ]
    },
    {
        path: 'login',
        loadComponent: () => import('./views/page/login/login.component').then(m => m.LoginComponent),
        data: {
          title: 'Login Page'
        }
      },
      { path: '**', redirectTo: 'dashboard' }
];
