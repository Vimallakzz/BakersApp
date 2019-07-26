import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadingStrategy } from '@angular/router';
import { AppLayoutComponent } from './layouts/components/app-layout/app-layout.component';
import { Observable, timer, of } from 'rxjs';
import { flatMap } from 'rxjs/operators';
import { LoginComponent } from './login/components/login/login.component';

export class AppCustomPreloader implements PreloadingStrategy {
  preload(route: any, load: Function): Observable<any> {
    const loadModule = (delay) => delay
            ? timer(10).pipe(flatMap(_ => load()))
            : load();
    return route.data && route.data.preload ? loadModule(route.data.delay) : of(null);
  }
}

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: '',
    component: AppLayoutComponent,
    children: [
      {
        path: 'dashboard',
        loadChildren: './modules/dashboard/dashboard.module#DashboardModule',
        data: {
          preload: true,
          delay: 'true'
        }
      },
      {
        path: 'complaint',
        loadChildren: './modules/complaint/complaint.module#ComplaintModule',
        data: {
          preload: true,
          delay: 'true'
        }
      },
      {
        path: 'baker',
        loadChildren: './modules/baker/baker.module#BakerModule',
        data: {
          preload: true,
          delay: 'true'
        }
      },
      {
        path: 'tsf',
        loadChildren: './modules/tsf/tsf.module#TsfModule',
        data: {
          preload: true,
          delay: 'true'
        }
      },
      {
        path: 'asm',
        loadChildren: './modules/asm/asm.module#AsmModule',
        data: {
          preload: true,
          delay: 'true'
        }
      },
      {
        path: 'inbox',
        loadChildren: './modules/inbox/inbox.module#InboxModule',
        data: {
          preload: true,
          delay: 'true'
        }
      },
      {
        path: '**' , redirectTo: 'dashboard'
      }
    ]
  },
  { path: '**', redirectTo: 'dashboard' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: AppCustomPreloader})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
