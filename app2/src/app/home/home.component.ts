import { Oferta } from './../shared/ofertas.model';
import { Component, OnInit } from '@angular/core';
import { OfertasService } from '../ofertas.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
  providers: [ OfertasService ]
})
export class HomeComponent implements OnInit {

  public ofertas!: Oferta[]

  constructor(private OfertasService: OfertasService) { }

  ngOnInit() {
    this.ofertas = this.OfertasService.getOfertas()
    console.log(this.ofertas)
  }

}
