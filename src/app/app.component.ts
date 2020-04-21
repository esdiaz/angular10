import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'curso-angular';

  public userSubscribed : boolean = false;

  subscriptionChanged(event : any){
    console.log("Emitido", event);
    this.userSubscribed = event;
  }
}
