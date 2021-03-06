import {LOCALE_ID, NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import localeFr from '@angular/common/locales/fr';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {AccordionModule} from 'primeng/accordion';
import {MenuItem} from 'primeng/api';
import {LoginComponent} from './login/login.component';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';

import {AuthentificationService} from './_services/authentification.service';
import {MessagesModule} from 'primeng/messages';
import {ToastModule} from 'primeng/toast';
import {MessageService} from 'primeng/api';
import {DatePipe, registerLocaleData} from '@angular/common';
import {MomentModule} from 'ngx-moment';
import 'moment/locale/fr';
import {MenuModule} from 'primeng/menu';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {JwtInterceptorService} from './_services/jwt-interceptor.service';
import { ProfileComponent } from './profile/profile.component';
import {UserService} from './_services/user.service';
import { LpSolverTestComponent } from './lp-solver-test/lp-solver-test.component';
import {MarkdownModule} from 'ngx-markdown';
import { ListeJeuxComponent } from './liste-jeux/liste-jeux.component';
import { DetailJeuComponent } from './detail-jeu/detail-jeu.component';
import {CardModule} from 'primeng/card';
import {ButtonModule} from 'primeng/button';
import {TableModule} from 'primeng/table';
import {RatingModule} from 'primeng/rating';

import {TabMenuModule} from 'primeng/tabmenu';
import { RegisterComponent } from './register/register.component';
import { AjoutjeuComponent } from './ajoutjeu/ajoutjeu.component';
import { AjoutcommentairesComponent } from './ajoutcommentaires/ajoutcommentaires.component';
import {AvatarModule} from 'primeng/avatar';
import {EditprofileComponent} from "./editprofile/editprofile.component";
import { AchatjeuComponent } from './achatjeu/achatjeu.component';
import {InputTextModule} from "primeng/inputtext";


registerLocaleData(localeFr, 'fr');

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ProfileComponent,
    LpSolverTestComponent,
    ListeJeuxComponent,
    DetailJeuComponent,
    RegisterComponent,
    AjoutjeuComponent,
    AjoutcommentairesComponent,
    EditprofileComponent,
    AchatjeuComponent,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MarkdownModule.forRoot(),
    FormsModule,    // added here too
    AppRoutingModule,
    MomentModule,
    MessagesModule,
    ToastModule,
    HttpClientModule,
    AccordionModule,
    CardModule,
    ButtonModule,
    TableModule,
    ReactiveFormsModule,
    TableModule,
    CardModule,
    RatingModule,
    ButtonModule,
    MenuModule,
    TabMenuModule,
    AvatarModule,
    FormsModule,
    InputTextModule
  ],
  providers: [DatePipe, AuthentificationService, MessageService,
    {provide: LOCALE_ID, useValue: 'fr-FR'},
        { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorService, multi: true },
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
