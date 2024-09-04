import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [CardModule,ButtonModule],
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})


export  default class ProfileComponent implements OnInit {


 data:any
constructor(  private route: ActivatedRoute,){
}


  ngOnInit(): void {

    let id = ''
    this.route.params.subscribe(params => id = params['id']);
    console.log(id)

    const DATA = [
      {
        id:1,
        nombre:'FEDERICO',
        alias:'federico',
        img: 'assets/img/federico2.jpg'
      },
      {
        id:2,
        nombre:'SANTIAGO',
        alias:'santiago',
        img: 'assets/img/santiago2.jpg'
      },
      {
        id:3,
        nombre:'LUCAS',
        alias:'lucas',
        img: 'assets/img/lucas2.jpg'
      },
      {
        id:4,
        nombre:'LUCAS',
        alias:'lucas_2',
        img: 'assets/img/lucas_2.jpg'
      },
    ]

  const a =  DATA.filter((e)=>{
    return e.alias == id
    })

  this.data = a

  }



}
