import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {
  
  transform(value: any, ...args: any[]): any {
    if(!args){
      return value;
    }

    return value.filter((val:any)=>{
      let rVal=(val.firstname.toLocaleLowerCase().includes(args)) || (val.lastname.toLocaleLowerCase().includes(args));
      return rVal;
    })
  }

}
