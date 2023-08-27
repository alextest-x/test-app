
import { UsersService } from './services/users.service';
import { Component, OnInit } from '@angular/core';
import { Usuarios } from './interfaces/usuarios.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  implements OnInit{
   title : string = 'consumir Appi';
   //userList : any = [];
   userList : Usuarios [] = [];

   //userList= Object.keys;
   // jsonObj ={ }
   constructor(private usersService: UsersService){
   console.log('El componente se ha creado');
  }


ngOnInit(): void {
  console.log('El componente se ha inicializado');
  this.usersService.getUser()
  .subscribe((response: any) =>  this.userList = response);
  }
}
