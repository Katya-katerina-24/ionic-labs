import { Component, OnInit } from '@angular/core';
import { DataGetterService } from "../services/data-getter.service";
import { ActivatedRoute } from "@angular/router";
import { SharedDataService } from '../services/shared-data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.page.html',
  styleUrls: ['./users.page.scss'],
})
export class UsersPage implements OnInit {
  userGroup: string;
  users: any[];

  textData: string;

  constructor(private dataGetter: DataGetterService,
    private route: ActivatedRoute,
    private sharedData: SharedDataService) { }

  ngOnInit() {
    this.userGroup = this.route.snapshot.paramMap.get('userGroup');
    this.dataGetter.getUsers(this.userGroup).subscribe(
      data => {
        this.users = data;
      }
    );
  }

  passData() {
    this.sharedData.setTextData(this.textData);
  }

}
