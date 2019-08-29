import { Component, OnInit, Input, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css']
})
export class ServerElementComponent implements OnInit {

  @Input('srvElement') element: {type: string, name: string, content: string};
  @ViewChild('heading', {static: false}) header: ElementRef;
  @ContentChild('contentParagraph', {static: false}) paragraph: ElementRef; 

  constructor() { }

  ngOnInit() {
  }

}
