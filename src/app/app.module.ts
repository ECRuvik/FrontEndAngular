import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { HeaderComponent } from './components/portfolio/header/header.component';
import { AcercaDeComponent } from './components/portfolio/acerca-de/acerca-de.component';
import { EstudiosComponent } from './components/portfolio/estudios/estudios.component';
import { HabilidadesComponent } from './components/portfolio/habilidades/habilidades.component';
import { ExpYProyComponent } from './components/portfolio/exp-y-proy/exp-y-proy.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddBtnComponent } from './components/portfolio/add-btn/add-btn.component';
import { ExperienciaComponent } from './components/portfolio/exp-y-proy/experiencia/experiencia.component';
import { ProyectosComponent } from './components/portfolio/exp-y-proy/proyectos/proyectos.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { DataService } from './services/data.service';
import { StudyService } from './services/study.service';
import { StateService } from './services/state.service';
import { ProyectService } from './services/proyect.service';
import { LocationsService } from './services/locations.service';
import { JobService } from './services/job.service';
import { AuthService } from './services/auth.service';
import { SkillService } from './services/skill.service';

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
    LoginComponent,
    PortfolioComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [
    DataService,
    StudyService,
    SkillService,
    StateService,
    ProyectService,
    LocationsService,
    JobService,
    AuthService,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
