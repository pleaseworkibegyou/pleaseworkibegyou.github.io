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
      document.body.style.backgroundSize = "cover"
      break;
      case "Professional":
          document.body.style.backgroundImage = "url(/assets/code2.PNG)"
          document.body.style.backgroundSize = "cover"
      break;
      case "":
      document.body.style.backgroundImage = "none"
      break;
    }
  }
  pageChange(){
    document.getElementById("firstLandingPage").style.visibility = "hidden"
    document.body.style.backgroundImage = "none"
  }
}
