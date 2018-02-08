import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

import { User } from './user.model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  @Input() user = User;
  @Output() editClicked = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onEdit() {
    this.editClicked.emit('a new value');
  }
}
