import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListComponent } from './core/movimento/components/list/list.component';
import { FormComponent } from './core/movimento/components/form/form.component';
import { LoginComponent } from './shared/components/auth/login/login.component';
import { FormEditMovimentoComponent } from './core/movimento/components/form-edit-movimento/form-edit-movimento.component';
import { FormComponent as FormCategoria } from './core/categoria/components/form/form.component';
import { EditComponent } from './core/categoria/components/edit/edit.component';
import { ListComponent as ListCategoria} from './core/categoria/components/list/list.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: LoginComponent },
  { path: 'movimentos', component: ListComponent },
  { path: 'movimento/edit/:id', component: FormEditMovimentoComponent },
  { path: 'movimento/add', component: FormComponent },
  { path: 'categorias', component: ListCategoria },
  { path: 'categoria/edit/:id', component: EditComponent },
  { path: 'categoria/add', component: FormCategoria },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
