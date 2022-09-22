import { Component, OnInit } from '@angular/core';
import { Code } from "../_models/code";
import { ApiService } from "../_services/api.service";

@Component({
  selector: 'app-code',
  templateUrl: './code.component.html',
  styleUrls: ['./code.component.css']
})
export class CodeComponent implements OnInit {

  codes : Code[]=[];

  // code: any;

  name: any;


  p:number=1;

  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.getCodes()
  }

  getCodes(){
    this.api.getCodes().subscribe((res)=>{
      this.codes = res;
    })
  }


  // Search(){
  //   if (this.code=='') {
  //     this.ngOnInit()
      
  //   }else{
  //     this.codes = this.codes.filter(res=>{
  //       return res.code.toLocaleLowerCase().match(this.code.toLocaleLowerCase());
  //     })
  //   }

  // }


  Search(){
    if (this.name=='') {
      this.ngOnInit()
      
    }else{
      this.codes = this.codes.filter(res=>{
        return res.name.toLocaleLowerCase().match(this.name.toLocaleLowerCase());
      })
    }

  }


}
