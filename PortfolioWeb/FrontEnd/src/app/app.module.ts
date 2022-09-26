import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { ContactoComponent } from './components/contacto/contacto.component';
import { HabilidadesComponent } from './components/habilidades/habilidades.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { interceptorProvider } from './service/interceptor-service';
import { SobremiComponent } from './components/sobre-mi/sobre-mi.component';
import { SobremiEComponent } from './components/sobremi-e/sobremi-e.component';
import { SobremiEdComponent } from './components/sobremi-ed/sobremi-ed.component';
import { HabilidadesBComponent } from './components/habilidades-b/habilidades-b.component';
import { HabilidadesFComponent } from './components/habilidades-f/habilidades-f.component';



@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    InicioComponent,
    ContactoComponent,
    HabilidadesComponent,
    ProyectosComponent,
    LoginComponent,
    HomeComponent,
    SobremiComponent,
    SobremiEComponent,
    SobremiEdComponent,
    HabilidadesBComponent,
    HabilidadesFComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [interceptorProvider],
  bootstrap: [AppComponent]
})
export class AppModule { }
