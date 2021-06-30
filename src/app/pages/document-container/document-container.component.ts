import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-document-container',
  templateUrl: './document-container.component.html',
  styleUrls: ['./document-container.component.scss']
})
export class DocumentContainerComponent implements OnInit {
 public documentList:DocumentList[]=[];
 public filterdocumentList:DocumentList[]=[];
 public activeLink:string='All';

  constructor() { }

  ngOnInit(): void {
  this.documentList=[
    {'Id':1,'Name':'Terminal instruction','Category':'Technical'},
    {'Id':2,'Name':'Installation guides','Category':'Technical'},
    {'Id':3,'Name':'Carrier Opprtunities','Category':'Human Resources'},
    {'Id':4,'Name':'Customer Onboarding','Category':'Financial'},
    {'Id':5,'Name':'Outlet branding','Category':'Marketing'},
    {'Id':6,'Name':'Account Procedure','Category':'Financial'},
    {'Id':7,'Name':'Traning','Category':'Human Resources'},
    {'Id':7,'Name':'Printing Guidance','Category':'Marketing'},
    {'Id':9,'Name':'Technical support','Category':'Technical'},
  ];
  this.filterdocumentList=this.documentList;
  
  }

  filterDataByName(item:any){
    let text=item.target.value.toLowerCase();
    if(text){
      this.filterdocumentList=this.documentList.filter(l => l.Name.toLowerCase().startsWith(text));
    }else{
      this.filterdocumentList=this.documentList;
    }
    
  }
  filterDataByCategory(value:any){
    this.activeLink=value;
    if(value=="All"){
      this.filterdocumentList=this.documentList;
    }else{
    this.filterdocumentList=this.documentList.filter(l => l.Category==value);
    }
  }

}

export interface DocumentList {
  Id: number;
  Name:string;
  Category: string;
}
