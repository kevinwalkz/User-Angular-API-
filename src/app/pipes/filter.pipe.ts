import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(userList: any[], filterString:String, propName:any): any[] {
    const result:any=[]
    if(!userList || filterString=='' || propName==''){
      return userList
    }
    
    
    userList.forEach((users:any)=>{
      if(users[propName].trim().toLowerCase().includes(filterString.toLowerCase())){
        result.push(users)
      }
    })
    return result
  }

}
