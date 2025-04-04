import { RouterOutlet } from '@angular/router';
import { Component } from '@angular/core';
import { Toolbox } from './toolbox/toolbox.component';
import { Canvas } from "./canvas/canvas.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Toolbox, Canvas],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

 

  public ngOnInit(): void {
  
  }


}
