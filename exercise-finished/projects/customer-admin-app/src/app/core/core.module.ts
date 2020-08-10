import localeDeCh from '@angular/common/locales/de-CH';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { CommonModule, registerLocaleData } from '@angular/common';
import { LOCALE_ID, NgModule } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';

import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { HttpNotificationInterceptor } from './interceptors/http-notification-interceptor.service';
import { NotificationComponent } from './notification/notification/notification.component';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';

registerLocaleData(localeDeCh);

@NgModule({
  declarations: [HeaderComponent, FooterComponent, NotificationComponent],
  imports: [
    CommonModule,
    RouterModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule,
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'de-CH' },
    { provide: HTTP_INTERCEPTORS, useClass: HttpNotificationInterceptor, multi: true },
  ],
  exports: [HeaderComponent, FooterComponent, RouterModule],
})
export class CoreModule {}
