import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service'

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.css']
})
export class UserDetailsComponent implements OnInit {
  userList: any = []

  searchTerm = ""
  constructor(private apiService:ServicesService) {}

  ngOnInit(): void {
    this.apiService.getUserList().subscribe((result)=>{
      this.userList = Object.values(result)[0];
    })

    this.apiService.search.subscribe((data)=>{
      this.searchTerm = data
    })
  }

}
