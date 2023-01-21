import { Component ,OnInit , Input, SimpleChanges } from '@angular/core';
import { Chart } from 'chart.js';
import { EmptableComponent } from '../emptable/emptable.component';
import { employeeinfo } from 'src/app/employeeinfo';
import { ExternalReference } from '@angular/compiler';


@Component({
  selector: 'app-chart',
  templateUrl: './chart.component.html',
  styleUrls: ['./chart.component.css']
})
export class ChartComponent implements OnInit {

  public obj = new EmptableComponent()
  
  @Input() list = this.obj.listofemp_chart;
  dataset: { label: string, data: string }[] =[]
  emp :any
  lbl:any
  char:any
  //@Input() tableflag :any;
  //@Input() specificemployee :any
 
  constructor(){
    
  
  }

  ngOnChanges(changes: SimpleChanges){
    //if (myChart) {    myChart.destroy();  }
    try{
     this.exe()
      
    }
    catch{
      this.char.destroy()
      this.exe()
      console.log("catchhhhh")
    }
      
     
  }
 ngOnInit(): void {
 
  
  /*if(this.specificemployee == undefined){ this.specificemployee == -1
  console.log("ana da5lt")
  }*/

  //this.exe()
  /*
  for (let i = 0; i < this.list.length; i++) {
    console.log("el list" , this.list.length)
    console.log("el list chart" , this.obj.listofemp_chart.length)
    console.log("hnaaa")
    this.emp = [this.list[i].jan , this.list[i].feb , this.list[i].mar , this.list[i].apr , this.list[i].may];
    this.lbl = this.list[i].empname
    this.dataset.push({label:this.lbl , data: this.emp})
    }
    
    
    new Chart("mychart", {
      type: 'bar',
      
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May' ],
        datasets:this.dataset
      },
      options: {
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });
   */
}

reload() :void{

  console.log("reload")
  //console.log(this.tableflag , this.specificemployee)
  window.location.reload()
}

cleardataset(){
  this.dataset=[]
  this.list =[]
  console.log("dataset " , this.dataset.length)
}

destroychart(C :Chart){
  C.destroy()
  console.log("destroyed")
}
exe():void{
  
  this.dataset=[]
     for (let i = 0; i < this.list.length; i++) {
      
      console.log("on change")
      this.emp = [this.list[i].jan , this.list[i].feb , this.list[i].mar , this.list[i].apr , this.list[i].may];
      this.lbl = this.list[i].empname
      this.dataset.push({label:this.lbl , data: this.emp})
      }
      
      
      
      this.char = new Chart("mychart", {
        type: 'bar',
        
        data: {
          labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May' ],
          datasets:this.dataset
        },
        options: {
          scales: {
            y: {
              beginAtZero: true
            }
          }
        }
        
      });
}
}






