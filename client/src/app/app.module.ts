import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MatNativeDateModule } from '@angular/material/core';

import { NavbarModule } from '@widgets/navbar/navbar.module';
import { AppRoutingModule } from '@app/app-routing.module';
import { AppComponent } from '@app/app.component';
import { PagesModule } from '@pages/pages.module';
import { SharedModule } from '@shared/shared.module';
import { AuthRequestInterceptor } from '@modules/auth/services/interceptors/auth-request-interceptor.service';
import { AuthResponseInterceptor } from '@modules/auth/services/interceptors/auth-response-interceptor.service';
import { ErrorAlertModule } from '@widgets/error-alert/error-alert.module';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    MatNativeDateModule,
    FormsModule,
    NavbarModule,
    PagesModule,
    SharedModule,
    ErrorAlertModule,
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthRequestInterceptor,
      multi: true,
    },
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthResponseInterceptor,
      multi: true,
    },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
