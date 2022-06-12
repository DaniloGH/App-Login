import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Faça login';

  constructor(private router: Router) {
    router.events
      .subscribe((event: NavigationEnd | any) => {
        switch (event.url) {
          case '/':
            this.title = 'Faça login'
            break;
          case '/signup':
            this.title = 'Cadastre-se'
            break;
          case '/forgot-password':
            this.title = 'Recupere sua senha'
            break;
        }
      });
  }
}
