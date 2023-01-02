import { Component, OnInit } from '@angular/core';
import { ServicesService } from '../services.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private api:ServicesService) { }

  ngOnInit(): void {
  }

  search(event:any){
    let searchKey = event.target.value
    this.api.search.next(searchKey)
  }

}
