import { ApplicationConfig, provideBrowserGlobalErrorListeners } from '@angular/core';
import { provideRouter, withHashLocation } from '@angular/router';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideBrowserGlobalErrorListeners(),
    // Hash location: GitHub Pages não faz rewrite de rotas no servidor,
    // então usamos URLs com # (ex.: /#/login) para o roteamento funcionar
    // mesmo em acesso direto/recarregamento de página.
    provideRouter(routes, withHashLocation()),
    provideAnimationsAsync(),
  ]
};
