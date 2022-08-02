import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name: 'orderBy',
    pure: false
})
export class OrderBy implements PipeTransform{

 transform(array, orderBy, asc = true, oldTime){
     if (!orderBy || orderBy.trim() == ""){
       return array;
     } 
     
     //ascending
     if (asc && oldTime){
        //  let newArray = Array.from(array).sort((item1: any, item2: any) => { 
        //          return this.orderByComparator(item1[orderBy], item2[orderBy]);
        //        });
       return Array.from(array).sort((item1: any, item2: any) => { 
         return this.orderByComparator(item1[orderBy], item2[orderBy]);
       });

   // return this.setActiveCallOnTop(newArray);
     }
     else{
        //  let newArray = Array.from(array).sort((item1: any, item2: any) => { 
        //          return this.orderByComparator(item2[orderBy], item1[orderBy]);
        //        });
       //not asc
       return Array.from(array).sort((item1: any, item2: any) => { 
         return this.orderByComparator(item2[orderBy], item1[orderBy]);
       });
    //return this.setActiveCallOnTop(newArray);
     }
 
 }

 private setActiveCallOnTop = (array:any[]) =>{
    return array.filter(x=>x.activeCall == 1).concat(array.filter(x=>x.activeCall ==0));
   }
 
 orderByComparator(a:any, b:any):number{
 
     if((isNaN(parseFloat(a)) || !isFinite(a)) || (isNaN(parseFloat(b)) || !isFinite(b))){
       //Isn't a number so lowercase the string to properly compare
       if(a.toLowerCase() < b.toLowerCase()) return -1;
       if(a.toLowerCase() > b.toLowerCase()) return 1;
     }
     else{
       //Parse strings as numbers to compare properly
       if(parseFloat(a) < parseFloat(b)) return -1;
       if(parseFloat(a) > parseFloat(b)) return 1;
      }
 
     return 0; //equal each other
 }
}