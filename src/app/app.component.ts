import { Component } from '@angular/core';

@Component({              //definisemo ime selektor je ime taga preko koga ce mo ga zvati !!
  selector: 'first',                 
  templateUrl: './app.component.html',  // ovo ce se uvesti tamo na sajt kroz te tagove
  styleUrls: ['./app.component.css']    // naa nivou komponente svaki ima svoj css
})
export class AppComponent {
  name = 'PIA';
}

// za nesto vidljivo svuda stavimo export