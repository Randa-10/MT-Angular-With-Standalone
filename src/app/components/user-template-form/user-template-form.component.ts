import { Component } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { User } from '../../models/user';

@Component({
  selector: 'app-user-template-form',
  standalone: true,
  imports: [],
  templateUrl: './user-template-form.component.html',
  styleUrl: './user-template-form.component.css'
})
export class UserTemplateFormComponent {

constructor(private userApi:UsersService){

}
  addNewUser(){
let u :User={
  firstName:"ali",
  lastName:"ahmed",
  password:"123",
  address:"sohag",
  email:"string@gmail.com"
}
this.userApi.addNewUser(u).subscribe((data)=>{
  console.log(data);
  
})


  }
}
