import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/header/header.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { EstudiosComponent } from './components/estudios/estudios.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ExpYProyComponent } from './components/exp-y-proy/exp-y-proy.component';
import { PortfolioService } from './services/portfolio.service';
import { HttpClientModule } from '@angular/common/http';
import { AddBtnComponent } from './components/add-btn/add-btn.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { RegisterFormComponent } from './components/register-form/register-form.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HeaderComponent,
    AcercaDeComponent,
    EstudiosComponent,
    HabilidadesComponent,
    ExpYProyComponent,
    AddBtnComponent,
    ExperienciaComponent,
    ProyectosComponent,
    LoginFormComponent,
    RegisterFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
