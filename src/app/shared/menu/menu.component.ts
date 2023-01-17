import { Component } from '@angular/core';

interface MenuItem {
  route : string;
  text  : string;
}

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent{

 menu: MenuItem[] = [
  { route : '/graphics/bars',        text : 'Bars'},
  { route : '/graphics/barsdouble',  text : 'Bars Double'},
  { route : '/graphics/donnut',      text : 'Donnut'},
  { route : '/graphics/donnut-http', text : 'Donnut Http'},
 ]


 

}
