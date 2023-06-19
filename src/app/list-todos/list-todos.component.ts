import { Component } from '@angular/core';

@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent {

  todos= [
    {id: 1, description :'Learn to dance'},
    {id: 2, description :'Become an expert in India'},
    {id: 3, description :'Visit USA'},
  ];

  // todo = {
  //   id: 1,
  //   description : 'Learn to Dance'
  // }
}
