import { Component, OnInit, Input } from '@angular/core';
import {DataService} from './../data.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
public datas :any;
public valuesa: boolean=false;
public dataobj:object={};
public editdata:object={};

  constructor(private dataservice:DataService) { }
 

  ngOnInit() {
   this.fetchData();
  }

  fetchData()
  {
    this.dataservice.getData()
    .subscribe(data =>{ this.datas = data})
  }

  onDelete= function(delDatas) {
    this.dataobj={
      "name":delDatas.name,
      "id":delDatas.id,
      "address":delDatas.address
    }
    this.dataservice.deleteData(delDatas)
     .subscribe(() =>{ this.fetchData()})    
  }
  OnEdit(editdata){
    this.editdata= editdata;
    this.valuesa=!this.valuesa;
    
  }
}
