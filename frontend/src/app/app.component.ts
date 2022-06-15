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

  constructor(private router: Router) {
    router.events
      .subscribe((event: NavigationEnd | any) => {
        switch (event.url) {
          case '/':
            this.title = 'Faça login'
            this.subtitle = 'e utilize nossas soluções'
            break;
          case '/signup':
            this.title = 'Cadastre-se'
            this.subtitle = 'e entre para o nosso time'
            break;
          case '/recover':
            this.title = 'Recupere o acesso'
            this.subtitle = 'para continuar com a gente'
            break;
          case '/new-password':
            this.title = 'Siga as instruções'
            this.subtitle = 'para criar sua nova senha'
            break;
        }
      });
  }
}
