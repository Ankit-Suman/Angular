import { Component, OnInit } from '@angular/core';


export class MyItems {    
  Value: string;
  Contact:number;
  email:string; 
  img:string;   
  constructor(Value:string,Contact:number,email:string,img:string)    
  {    
    this.Value = Value;
    this.Contact=Contact;
    this.email=email;
    this.img=img;    
  }    
}

@Component({
  selector: 'app-employeecard',
  templateUrl: './employeecard.component.html',
  styleUrls: ['./employeecard.component.css']
})
export class EmployeecardComponent implements OnInit {
  myItems: MyItems[] = new Array();    
    
  // Other variables    
  IsForUpdate: boolean = false;    
  newItem: any = {};    
  updatedItem: any; 

  gridColumns = 3;

  toggleGridColumns() {
    this.gridColumns = this.gridColumns === 3 ? 4 : 3;
  }


  constructor() { this.myItems.push(    
       
    );  }

  ngOnInit(): void {
  }

  AddItem() {    
    this.myItems.push(    
      this.newItem    
    );    
    this.newItem = {};    
  }
  EditItem(i : any) {  
    this.newItem.Value = this.myItems[i].Value;  
    this.updatedItem = i;  
    this.IsForUpdate = true;  
  }  
    
  // When user clicks on update button to submit updated value  
  UpdateItem() {  
    let data = this.updatedItem;  
    for (let i = 0; i < this.myItems.length; i++) {  
      if (i == data) {  
        this.myItems[i].Value = this.newItem.Value;  
      }  
    }  
    this.IsForUpdate = false;  
    this.newItem = {};  
  }  
  DeleteItem(i:any) {  
    this.myItems.splice(i, 1);  
  }


}
