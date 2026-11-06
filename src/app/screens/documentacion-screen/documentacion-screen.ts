import { Component } from '@angular/core';

@Component({
  selector: 'app-documentacion-screen',

  imports: [],

  templateUrl: './documentacion-screen.html',

  styleUrl: './documentacion-screen.scss',
})
export class DocumentacionScreen {
  urlDocumentacion = 'https://angular.dev';

  diapositivas = [
    { titulo: 'Node.js', imagen: 'assets/img/nodejs.jpg' },

    { titulo: 'TypeScript', imagen: 'assets/img/typescript.png' },

    { titulo: 'Angular', imagen: 'assets/img/angular.jpg' },

    { titulo: 'NPM', imagen: 'assets/img/npm.jpg' },
  ];
}
