import {Component, OnInit} from '@angular/core';
import {User} from '../shared/models/User';
import {UsersService} from '../shared/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.scss']
})
export class UsersListComponent implements OnInit {

  usersList: User[] = [];
  foods: any[] = [
    {value: '0', viewValue: 'от А до Я'},
    {value: '1', viewValue: 'от Я до А'}
  ];

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.usersList = this.userService.getUsersList();
  }

  search(query: string): void{
      console.log(query);
      this.usersList =  this.userService.findUser(query);
  }


  sort(value: string): void {
    this.usersList = this.userService.sortUser(value);
  }
}
