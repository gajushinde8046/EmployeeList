import { Component, OnInit, Input, Output ,EventEmitter} from '@angular/core';
import{DataService} from './../data.service';
// import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-update',
  templateUrl: './update.component.html',
  styleUrls: ['./update.component.css']
})
export class UpdateComponent implements OnInit {
  public datas:any;
  @Input() public editdata:object={};
  @Output() public upevent=new EventEmitter()
 
  public valuesa: boolean;
  dataobj:object={};

  constructor(private dataservices:DataService) { }

  ngOnInit() {
    this.fetchData();
  }

  onUpdate=function(updata)
  {

    this.dataobj={
      "name":updata.name,
      "id":updata.id,
      "address":updata.address
    }
    this.valuesa=true;
    if(updata.name =="" || updata.id=="" || updata.address == ""){
      alert("please enter all Inputs")
      }
    else{
      this.upevent.emit(false);
      this.dataservices.updateData(updata)
      .subscribe(() =>{ this.fetchData()});    
      alert("Data is Updated Successfully")
      }
  }
    
  fetchData()
    {
     this.dataservices.getData()
     .subscribe(data =>{ this.datas = data})
    }
  }

  
 


  