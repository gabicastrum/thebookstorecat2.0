import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { catchError, debounceTime, EMPTY, filter, map, switchMap, tap, throwError } from 'rxjs';
import { Item, Livro } from 'src/app/models/interface';
import { LivroVolumeInfo } from 'src/app/models/livroVolumeInfo';
import { LivroService } from 'src/app/service/livro.service';

const PAUSA = 300;
@Component({
  selector: 'app-lista-livros',
  templateUrl: './lista-livros.component.html',
  styleUrls: ['./lista-livros.component.css'],
})
export class ListaLivrosComponent {
  campoBusca = new FormControl();
  mensagemErro = ''

  constructor(private service: LivroService) {}

  //ordem os operadores altera o fluxo/resultado
  livrosEncontrados$ = this.campoBusca.valueChanges.pipe(
    debounceTime(PAUSA),
    filter((valorDigitado) => valorDigitado.length > 3),
    tap(() => console.log('fluxo inicial')),
    switchMap((valorDigitado) => this.service.buscar(valorDigitado)),
    tap((retornoAPI) => console.log(retornoAPI)),
    map((items) =>  this.livrosResultadoParaLivros(items)),
    catchError(() => {
      this.mensagemErro = 'OPS, erro ao buscar livros. Recarregue a página.'
      return EMPTY
      //EMPTY é um observable que não emite nada, ele completa o observable e precisa recarregar a aplicação
      // console.log(erro);
      // return throwError(() => new Error(this.mensagemErro = 'OPS, erro ao buscar livros. Recarregue a página.'));
    })
  );

  livrosResultadoParaLivros(items: Item[]): LivroVolumeInfo[] {
    return items.map((item) => {
      return new LivroVolumeInfo(item);
    });
  }


}
