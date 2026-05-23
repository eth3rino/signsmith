import { Component } from '@angular/core';
import { Wcu } from './wcu/wcu';
import { Welcome } from './welcome/welcome';
import { Contact } from './contact/contact';

@Component({
  selector: 'app-home',
  imports: [Wcu, Welcome, Contact],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {}
