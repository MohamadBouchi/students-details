import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { CommonModule } from '@angular/common';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'students-details-login',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  constructor(
    public authService: AuthService,
    private router: Router
  ) {}

  login() {
    this.authService.login().subscribe(
      () => {
        if (this.authService.isLoggedIn){
          const redirecUrl = '/dashboard';

          const navigationExtras: NavigationExtras = {
            queryParamsHandling: 'preserve',
            preserveFragment: true
          };

          this.router.navigate([redirecUrl], navigationExtras);
        }
      }
    )
  };


  logout() {
    this.authService.logOut();
  }
}
