import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {
  
  public title = 'hola';
  public ejemplo = 'funciona';
  public click = '';

  constructor() { }

  pruebaClick() {
    this.click = 'Click! '
  }

  ngOnInit(): void {
  }

}
