import { MatCardModule } from '@angular/material/card';
import { RouterModule } from '@angular/router';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabecalhoComponent } from './componentes/cabecalho/cabecalho.component';
import { RodapeComponent } from './componentes/rodape/rodape.component';
import { LivroComponent } from './componentes/livro/livro.component';
import { ListaLivrosComponent } from './views/lista-livros/lista-livros.component';
import { ModalLivroComponent } from './views/modal-livro/modal-livro.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AutoriaPipe } from './pipes/autoria.pipe';
import { LoginComponent } from './componentes/login/login.component';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { ContainerComponent } from './componentes/container/container.component';
import { HomeComponent } from './pages/home/home.component';
import { CardComponent } from './componentes/card/card.component';
import { CardBuscaComponent } from './componentes/card-busca/card-busca.component';

@NgModule({
  declarations: [
    AppComponent,
    CabecalhoComponent,
    RodapeComponent,
    LivroComponent,
    ListaLivrosComponent,
    ModalLivroComponent,
    AutoriaPipe,
    LoginComponent,
    ContainerComponent,
    HomeComponent,
    CardComponent,
    CardBuscaComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatToolbarModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
