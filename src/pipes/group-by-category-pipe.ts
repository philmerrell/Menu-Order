import { Pipe, PipeTransform } from '@angular/core';
@Pipe({name: 'groupMenuByCategory'})
export class GroupsPipe implements PipeTransform {
  transform(value, args:string[]) : any {
    if(value) {
      var categories = {};
      value.forEach(function(o) {
        var category = o.category;
        categories[category] = categories[category] ? categories[category] : { name: category, items: [] };
        categories[category].items.push(o);  
      });
    return Object.keys(categories).map(function (key) { return categories[key] });
    }
  }
}