import { NgModule, Component, ViewEncapsulation } from '@angular/core';
import { CommonModule }  from '@angular/common';
import { Routes, RouterModule }  from '@angular/router';
import { NgaModule } from '../theme/nga.module';

@Component({
  selector: 'pages',
  encapsulation: ViewEncapsulation.None,
  styles: [],
  template: `
    <ba-sidebar></ba-sidebar>
    <ba-page-top></ba-page-top>
    <div class="al-main">
      <div class="al-content">
        <ba-content-top></ba-content-top>
        <router-outlet></router-outlet>
      </div>
    </div>
    <footer class="al-footer clearfix">
      <div class="al-footer-right">Created with <i class="ion-heart"></i></div>
      <div class="al-footer-main clearfix">
        <div class="al-copy">&copy; <a href="http://akveo.com">Akveo</a> 2016</div>
        <ul class="al-share clearfix">
          <li><i class="socicon socicon-facebook"></i></li>
          <li><i class="socicon socicon-twitter"></i></li>
          <li><i class="socicon socicon-google"></i></li>
          <li><i class="socicon socicon-github"></i></li>
        </ul>
      </div>
    </footer>
    <ba-back-top position="200"></ba-back-top>
    `
})
class Pages {}


const routing = RouterModule.forChild([
  {
    path: 'login',
    loadChildren: () => System.import('./login/module')
  },
  {
    path: 'register',
    loadChildren: () => System.import('./register/module')
  },
  {
    path: 'pages',
    component: Pages,
    children: [
      { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
      { path: 'dashboard', loadChildren: () => System.import('./dashboard/module') },
      { path: 'editors', loadChildren: () => System.import('./editors/module') },
      { path: 'components', loadChildren: () => System.import('./components/module') },
      { path: 'charts', loadChildren: () => System.import('./charts/module') },
      { path: 'ui', loadChildren: () => System.import('./ui/module') },
      { path: 'forms', loadChildren: () => System.import('./forms/module') },
      { path: 'tables', loadChildren: () => System.import('./tables/module') },
      { path: 'maps', loadChildren: () => System.import('./maps/module') }
    ]
  }
]);


@NgModule({
  imports: [CommonModule, NgaModule, routing],
  declarations: [Pages]
})
export class PagesModule {
}
