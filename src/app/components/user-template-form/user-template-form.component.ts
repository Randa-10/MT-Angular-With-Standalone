import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-user-template-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './user-template-form.component.html',
  styleUrl: './user-template-form.component.css'
})
export class UserTemplateFormComponent {

  user:User={} as User
constructor(private userApi:UsersService , private router:Router){

}
//   addNewUser(){
// let u :User={
//   firstName:"ali",
//   lastName:"ahmed",
//   password:"123",
//   address:"sohag",
//   email:"string@gmail.com"
// }
// this.userApi.addNewUser(u).subscribe((data)=>{
//   console.log(data);
  
// })

//Day8

addNewUser(){


  this.userApi.addNewUser(this.user).subscribe((data)=>{
    console.log(data);
    this.router.navigate(['/Product'])
  })
  }
}
