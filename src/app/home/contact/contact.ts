import { Component } from '@angular/core';
import { Whatsapp } from './whatsapp/whatsapp';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { simpleInstagram, simpleWhatsapp } from '@ng-icons/simple-icons';
import { LucideMail } from '@lucide/angular';

@Component({
  selector: 'app-contact',
  imports: [Whatsapp, NgIcon, LucideMail],
  providers: [provideIcons({simpleInstagram, simpleWhatsapp})],
  templateUrl: './contact.html',
  styleUrl: './contact.scss',
})
export class Contact {}
