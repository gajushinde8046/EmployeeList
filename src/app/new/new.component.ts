import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import {DataService} from './../data.service';
import{ActivatedRoute,Router} from '@angular/router';
import { iData} from './../data';
@Component({
  selector: 'app-new',
  templateUrl: './new.component.html',
  styleUrls: ['./new.component.css']
})
export class NewComponent implements OnInit {
  public datas :any;
  dataobj:object={};
  name:string;
  id:number;
  address:string;
  addData:string = '';
  // @Output() public newevent=new EventEmitter()
constructor(private dataservice:DataService,private router:Router) { }

ngOnInit() {}

onSubmit =function(submitDatas) {
  
  this.dataobj={
    "name":submitDatas.name,
    "id":submitDatas.id,
    "address":submitDatas.address
  }
  if(submitDatas.name =="" || submitDatas.id=="" || submitDatas.address == ""){
    alert("please enter all Inputs");
  }
  else{
   
    // this.newevent.emit(false);
    
    alert("New Employee is Added");
    this.dataservice.createData(submitDatas)
    .subscribe(() =>{ this.fetchData()}); 
    this.router.navigate(['/List']);
    // this.addData=null;
    this.fetchData();
  }

}

fetchData()
  {
    this.dataservice.getData()
    .subscribe(data =>{ this.datas = data})
  }
}