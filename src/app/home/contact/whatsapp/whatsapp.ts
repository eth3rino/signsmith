import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { simpleWhatsapp } from '@ng-icons/simple-icons';

@Component({
  selector: 'app-whatsapp',
  imports: [NgIcon],
  providers: [provideIcons({simpleWhatsapp})],
  templateUrl: './whatsapp.html',
  styleUrl: './whatsapp.scss',
})
export class Whatsapp {}
