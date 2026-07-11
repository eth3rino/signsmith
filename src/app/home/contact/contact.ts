import { Component } from '@angular/core';
import { Whatsapp } from './whatsapp/whatsapp';

@Component({
  selector: 'app-contact',
  imports: [Whatsapp],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}
