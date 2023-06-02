import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'cadastrar-animal',
    loadChildren: () => import('./cadastrar-animal/cadastrar-animal.module').then( m => m.CadastrarAnimalPageModule)
  },
  {
    path: 'visualizar-animal',
    loadChildren: () => import('./visualizar-animal/visualizar-animal.module').then( m => m.VisualizarAnimalPageModule)
  },
  {
    path: 'consultar-animal',
    loadChildren: () => import('./consultar-animal/consultar-animal.module').then( m => m.ConsultarAnimalPageModule)
  },
  {
    path: 'editar-animal',
    loadChildren: () => import('./editar-animal/editar-animal.module').then( m => m.EditarAnimalPageModule)
  },
  {
    path: 'remover-animal',
    loadChildren: () => import('./remover-animal/remover-animal.module').then( m => m.RemoverAnimalPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
