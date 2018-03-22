import { Component, OnInit } from '@angular/core';

@Component({
   // selector: '[app-servers]',    css attribute (<div app-servers></div>)
   // selector: '.app-servers',     css class (<div class="app-servers"></div>)
  selector: 'app-servers',
  template: `
   <app-server></app-server>
   <app-server></app-server>`,
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
