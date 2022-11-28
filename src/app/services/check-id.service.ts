import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckIdService {
  private idCheck: number = 0 ;

  constructor() { }

  getcheckId(){
    return this.idCheck;
  }
  setChechId(id: any){
    console.log(this.idCheck);
    this.idCheck = id;
    console.log(this.idCheck);
  }

}
