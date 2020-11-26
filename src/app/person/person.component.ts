import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-person',
  templateUrl: './person.component.html',
  styleUrls: ['./person.component.css']
})
export class PersonComponent implements OnInit {

  person:any;
constructor(private userservice:UserService){}
  ngOnInit(): void {
    this.getUser()
  }


getUser(){

  this.userservice.getUser().subscribe(
    res=> this.person=res
  )
}
}
