import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UserAuthService } from '../services/user-auth.service';

export const authGuard: CanActivateFn = (route, state) => {

  let userAuth=inject(UserAuthService)
  let router=inject(Router)
  if(userAuth.isUserLogged){
  return true;
  }else{

    router.navigate(['/signup'])
    return false
  }

};
