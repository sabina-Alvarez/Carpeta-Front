import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HomeComponent } from './paginas/home/home.component';
import { MujeresComponent } from './paginas/mujeres/mujeres.component';
import { MenoresComponent } from './paginas/menores/menores.component';
import { HeadComponent } from './componentes/head/head.component';
import { NavegadorComponent } from './componentes/navegador/navegador.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    HomeComponent,
    MujeresComponent,
    MenoresComponent,
    HeadComponent,
    NavegadorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
