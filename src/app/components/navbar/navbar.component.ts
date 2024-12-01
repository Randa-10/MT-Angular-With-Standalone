import { Component, OnInit } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UserAuthService } from '../../services/user-auth.service';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css',
})
export class NavbarComponent implements OnInit {
  isUserLoggedNave: boolean = true;

  constructor(private userAuth: UserAuthService) {}
  ngOnInit(): void {
    //  this.isUserLoggedNave=this.userAuth.isUserLogged
    this.userAuth.getUserState().subscribe((x) => {
      this.isUserLoggedNave = x;
    });
  }
}
