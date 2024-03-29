import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/portfolio/navbar/navbar.component';
import { HeaderComponent } from './components/portfolio/header/header.component';
import { AcercaDeComponent } from './components/portfolio/acerca-de/acerca-de.component';
import { EstudiosComponent } from './components/portfolio/estudios/estudios.component';
import { HabilidadesComponent } from './components/portfolio/habilidades/habilidades.component';
import { ExpYProyComponent } from './components/portfolio/exp-y-proy/exp-y-proy.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddBtnComponent } from './components/portfolio/estudios/add-btn/add-btn.component';
import { ExperienciaComponent } from './components/portfolio/exp-y-proy/experiencia/experiencia.component';
import { ProyectosComponent } from './components/portfolio/exp-y-proy/proyectos/proyectos.component';
import { LoginComponent } from './components/login/login.component';
import { PortfolioComponent } from './components/portfolio/portfolio.component';
import { ReactiveFormsModule } from '@angular/forms';
import { DataService } from './services/data.service';
import { StudyService } from './services/study.service';
import { StateService } from './services/state.service';
import { ProyectService } from './services/proyect.service';
import { LocationsService } from './services/locations.service';
import { JobService } from './services/job.service';
import { AuthService } from './services/auth.service';
import { SkillService } from './services/skill.service';
import { FormsModule } from '@angular/forms';
import { EditBtnComponent } from './components/portfolio/estudios/edit-btn/edit-btn.component';
import { AddAcercaDeComponent } from './components/portfolio/acerca-de/add-acerca-de/add-acerca-de.component';
import { EditAcercaDeComponent } from './components/portfolio/acerca-de/edit-acerca-de/edit-acerca-de.component';
import { AddHabilidadComponent } from './components/portfolio/habilidades/add-habilidad/add-habilidad.component';
import { EditHabilidadComponent } from './components/portfolio/habilidades/edit-habilidad/edit-habilidad.component';
import { EditExperienciaComponent } from './components/portfolio/exp-y-proy/experiencia/edit-experiencia/edit-experiencia.component';
import { AddExperienciaComponent } from './components/portfolio/exp-y-proy/experiencia/add-experiencia/add-experiencia.component';
import { AddProyectoComponent } from './components/portfolio/exp-y-proy/proyectos/add-proyecto/add-proyecto.component';
import { EditProyectoComponent } from './components/portfolio/exp-y-proy/proyectos/edit-proyecto/edit-proyecto.component';
import { FooterComponent } from './components/portfolio/footer/footer.component';
import { BaseService } from './services/base.service';

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
    EditBtnComponent,
    AddAcercaDeComponent,
    EditAcercaDeComponent,
    AddHabilidadComponent,
    EditHabilidadComponent,
    EditExperienciaComponent,
    AddExperienciaComponent,
    AddProyectoComponent,
    EditProyectoComponent,
    FooterComponent,
  ],
  imports: [
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
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
