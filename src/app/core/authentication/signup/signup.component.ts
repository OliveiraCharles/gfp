import { Component } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { UserCrud } from '../../../../../3-Services/crud-user.service';
import { Router } from '@angular/router';
import { User } from "../../../../../4-DB/models/userModel";
import * as CryptoJS from 'crypto-js';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

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
    this.user.passwordHash = CryptoJS.SHA256(this.myFormGroup.value.password).toString()
    this.add(this.user)
    this.redirect('/login')
  }

  add(user: User) {
    this.service.add(user).subscribe()
    this.myFormGroup.reset()
  }

  hash(password: string) {
    return password
  }

  redirect(rota: string): void {
    this.router.navigateByUrl(rota);
  }

  entrar() {
    
  }

}
