import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { WcuComponent } from './wcu/wcu.component';

@Component({
  selector: 'app-home',
  imports: [RouterModule, WelcomeComponent, WcuComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
