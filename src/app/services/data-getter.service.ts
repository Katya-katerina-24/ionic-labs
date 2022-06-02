import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';

export interface UserGroup {
  id: number;
  parkingName: string;
  name: string;
  places: number;
}

@Injectable({
  providedIn: 'root'
})
export class DataGetterService {
  private userGroups: UserGroup[] = [
    {
      id: 1,
      parkingName: 'Dream',
      name: 'Artem Andreevich',
      places: 400
    },
    {
      id: 2,
      parkingName: 'Merkuriy',
      name: 'Katya Buk',
      places: 700
    }
  ];
  private user = [
    {
      id: 1,
      name:'Toyota',
      parkingName: 'Dream',
      number: 'BE2727EE',
      place: 40
    },
    {
      id: 2,
      name:'Skoda',
      userGroup: 'Merkuriy',
      number: 'BE9743EM',
      place: 12
    }


  ];
  getUsers(userGroup: string): Observable<any[]> {
    return of(this.user.filter(elem => {
      return elem.userGroup === userGroup;
    }))
  }


  private userName = '';
  private Users = ['admin','user'];



  constructor() { }

  getUser() {
    return this.userName;
  }
  setUser(name: string) {
    this.userName = name;
  }

  // userExists(name: string) {
  //   return of(this.user.filter(elem => {
  //     return elem.name === name;
  //   }));
  // }

  userExists(name: string):boolean{
    return this.Users.indexOf(name) !==-1;
  }



  getUserGroups(): Observable<UserGroup[]> {
    return of(this.userGroups);
  }

  addUserGroup(newUserGroup: UserGroup) {
    this.userGroups.push(newUserGroup);
  }

  deleteUserGroup(index: number) {
    this.userGroups.splice(index, 1);
  }
}
