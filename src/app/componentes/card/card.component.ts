import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  //TODO: Union Types -> Permite que uma variável tenha mais de um tipo/valor
  //TODO: Card reaproveitável
  @Input() variant: 'primary'| 'secondary'
  constructor() { }

  ngOnInit(): void {
  }

}
