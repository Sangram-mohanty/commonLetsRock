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
