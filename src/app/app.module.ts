import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './core/movimento/components/list/list.component';
import { HeaderComponent } from './shared/components/home/header/header.component';
import { FooterComponent } from './shared/components/home/footer/footer.component';
import { SideComponent } from './shared/components/home/side/side.component';
import { FormComponent } from './core/movimento/components/form/form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './core/authentication/login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { FormEditMovimentoComponent } from './core/movimento/components/form-edit-movimento/form-edit-movimento.component';
import { EditComponent } from './core/categoria/components/edit/edit.component';
import { FormComponent as FormCategoria } from './core/categoria/components/form/form.component';
import { ListComponent as ListCategoria } from './core/categoria/components/list/list.component';
// require("module-alias/register");

@NgModule({
  declarations: [
    AppComponent,
    ListComponent,
    HeaderComponent,
    FooterComponent,
    SideComponent,
    FormComponent,
    LoginComponent,
    FormEditMovimentoComponent,
    EditComponent,
    FormCategoria,
    ListCategoria,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
