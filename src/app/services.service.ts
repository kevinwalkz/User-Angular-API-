import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicesService {

  search = new BehaviorSubject("")

  constructor(private api:HttpClient) { }
  
  getUserList(){
    return this.api.get('https://dummyjson.com/users')
  }

  viewUser(userId:any){
    return this.api.get('https://dummyjson.com/users/'+userId)
  }
}
