import { NavigationEnd, Router } from '@angular/router';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title: string;
  subtitle: string;
  userLogged: boolean = false;

  constructor(private router: Router) {
    router.events
      .subscribe((event: NavigationEnd | any) => {
        switch (event.url) {
          case '/':
            this.title = 'Faça login'
            this.subtitle = 'e utilize nossas soluções'
            this.userLogged = false;
            break;
          case '/signup':
            this.title = 'Cadastre-se'
            this.subtitle = 'e entre para o nosso time'
            this.userLogged = false;
            break;
          case '/recover':
            this.title = 'Recupere o acesso'
            this.subtitle = 'para continuar com a gente'
            this.userLogged = false;
            break;
          case '/new-password':
            this.title = 'Siga as instruções'
            this.subtitle = 'para criar sua nova senha'
            this.userLogged = false;
            break;
          case '/home':
            this.userLogged = true;
            break;
        }
      });
  }
}
