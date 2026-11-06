import { Component } from '@angular/core';

@Component({
  selector: 'app-perfil-screen',

  imports: [],

  templateUrl: './perfil-screen.html',

  styleUrl: './perfil-screen.scss',
})
export class PerfilScreen {
  perfil = {
    nombre: 'Jesabelli Luna Marino',

    email: 'belli@correo.com',

    telefono: '22 2334 4556',

    direccion: '7 Sur, 1301, Centro, Puebla, Pue.',

    nacimiento: '14/08/2006',
  };
}
