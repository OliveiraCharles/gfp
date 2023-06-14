import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { User } from "./../../../../../4-DB/models/userModel";
import { UserCrud } from '../../../../../3-Services/crud-user.service';
import { Router } from '@angular/router';
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  myFormGroup: FormGroup;
  user: User


  constructor(
    private service: UserCrud,
    private formBuilder: FormBuilder,
    private router: Router,
  ) { }

  ngOnInit() {
    this.myFormGroup = this.formBuilder.group({
      name: [null],
      email: [null],
      password: [null]
    });
  }
  onSubmit() {
    this.user = this.myFormGroup.value
    this.user.password = CryptoJS.SHA256(this.myFormGroup.value.password).toString()
    this.login(this.user)
    this.redirect('/movimentos')
  }

  login(user: User) {
    this.service.login(user).subscribe()
  }

  redirect(rota: string): void {
    this.router.navigateByUrl(rota);
  }

  cadastro() {

  }

  entrar() {

  }

}
