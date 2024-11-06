import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'discount',
  standalone: true
})
export class DiscountPipe implements PipeTransform {

  transform(value: number, dis:number=25): number {
let number=dis/100      //  25/100= 0.25
let mul=value*number    //  1000*0.25 =

let numberAfterDis=value-mul

    return numberAfterDis;
  }

}
