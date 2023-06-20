import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';
import { HardcodedAuthenticationService } from './hardcoded-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardService implements CanActivate {

  constructor(private router:Router,
    private hardcodedAuthenticationService:HardcodedAuthenticationService) { }

  canActivate (route: ActivatedRouteSnapshot, state: RouterStateSnapshot) : boolean {
    console.log('RouteGuardService called...')
    if ( this.hardcodedAuthenticationService.isUserLoggedIn()) {
      return true;
    } else {
      //
      this.router.navigate(['/login']);
      return false;
    }
  }

}
