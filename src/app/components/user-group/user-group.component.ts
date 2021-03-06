import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { UserGroup } from "../../services/data-getter.service";

@Component({
  selector: 'app-user-group',
  templateUrl: './user-group.component.html',
  styleUrls: ['./user-group.component.scss'],
})
export class UserGroupComponent implements OnInit {

  @Input() userGroup: UserGroup;
  @Input() isNew: boolean;
  @Output() addUserGroup = new EventEmitter();
  @Output() cancelAddingUserGroup = new EventEmitter();
  title: string;

  constructor() { }

  ngOnInit() {
    if(this.isNew) {
      this.userGroup = {
        id: null,
        name: '',
        parkingName: '',
        places: null
      };
      this.title = 'Нове авто';
    }
  }

  addNew() {
    if(this.isNew) {
      this.addUserGroup.emit(this.userGroup);
    }
  }

  cancelAdding() {
    if(this.isNew) {
      this.cancelAddingUserGroup.emit();
    }
  }
}
