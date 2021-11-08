import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-post',
  templateUrl: './create-post.component.html',
  styleUrls: ['./create-post.component.css']
})
export class CreatePostComponent implements OnInit {

  content: string = 'Hola Mundo';
  texto: string = '';
  constructor() { }

  ngOnInit(): void {
  }

  showText(){
    this.content = this.texto;
  }

}
