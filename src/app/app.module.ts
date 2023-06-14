import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListComponent } from './core/movimento/components/list/list.component';
import { HeaderComponent } from './core/navigation/home/header/header.component';
import { FooterComponent } from './core/navigation/home/footer/footer.component';
import { SideComponent } from './core/navigation/home/side/side.component';
import { FormComponent } from './core/movimento/components/form/form.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './core/authentication/login/login.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from '@angular/common/http';
import { FormEditMovimentoComponent } from './core/movimento/components/form-edit-movimento/form-edit-movimento.component';
import { EditComponent } from './core/categoria/components/edit/edit.component';
import { FormComponent as FormCategoria } from './core/categoria/components/form/form.component';
import { ListComponent as ListCategoria } from './core/categoria/components/list/list.component';
import { SignupComponent } from './core/authentication/signup/signup.component';
import { MainComponent } from './core/navigation/home/main/main.component';
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
    SignupComponent,
    MainComponent,
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
