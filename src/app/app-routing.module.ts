import { LoginComponent } from './components/login/login.component';
import { FuncionarioListComponent } from './components/funcionario/funcionario-list/funcionario-list.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { NavComponent } from './components/nav/nav.component';
import { AuthGuard } from './auth/auth.guard';
import { FuncionarioCreateComponent } from './components/funcionario/funcionario-create/funcionario-create.component';

const routes: Routes = [
  { path: 'login', component: LoginComponent},
  {
    path: '', component: NavComponent, canActivate: [AuthGuard], children: [
      {path: 'home', component: HomeComponent},
      {path: 'funcionarios', component: FuncionarioListComponent},
      {path: 'funcionarios/create', component: FuncionarioCreateComponent}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
