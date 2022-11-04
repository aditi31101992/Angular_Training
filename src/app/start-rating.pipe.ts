import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'startRating'
})
export class StartRatingPipe implements PipeTransform {

  transform(value: String) : String{
    if(value >= '80' && value == '100')
    return "★★★★★";
    else if(value >='60' && value < '80')
    return "★★★★";
    else if(value >='40' && value <'60')
    return "★★★";
    else if(value >= '20' && value < '40')
    return "★★";
    else
    return "★";
  }

}
