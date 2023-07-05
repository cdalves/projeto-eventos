import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CheckIdService {
  private idCheck!: number;
  
  constructor() { }

  getcheckId(){
    return this.idCheck;
  }
  setChechId(id: any){
    this.idCheck = id;
  }

}
