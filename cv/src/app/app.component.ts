import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'cv';
  changeBg(modeSelected : string){
    switch(modeSelected){
      case "personal":
      document.body.style.backgroundImage = "url(/assets/anotherbike.jpg)"
      break;
      case "Professional":
          document.body.style.backgroundImage = "url(/assets/bike.jpg)"
      break;
      case "":
      document.body.style.backgroundImage = "none"
      break;
    }
  }
}
