import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ServicesService } from '../services.service'

@Component({
  selector: 'app-view-user',
  templateUrl: './view-user.component.html',
  styleUrls: ['./view-user.component.css']
})
export class ViewUserComponent implements OnInit {
  userId:any;
  userDetails:any=[];
  constructor(private activatedroute:ActivatedRoute, private api:ServicesService) { }

  ngOnInit(): void {
    this.activatedroute.params.subscribe((result)=>{
      this.userId=result['id']
    })
    this.api.viewUser(this.userId).subscribe((data: any)=>{
      console.log(data);
      this.userDetails=data
    })
  }

}
