import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}
                // hangi module le başlayayım olaya: AppModule
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));
