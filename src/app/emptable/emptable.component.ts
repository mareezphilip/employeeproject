import { Component ,  ViewChild , AfterViewInit } from '@angular/core';
import { employeeinfo } from 'src/app/employeeinfo';
import { initializeemployee } from 'src/app/initemployees.services';
import { ChartComponent } from '../chart/chart.component';
import { AppComponent } from '../app.component';

@Component({
  selector: 'app-emptable',
  templateUrl: './emptable.component.html',
  styleUrls: ['./emptable.component.css']
})
export class EmptableComponent implements AfterViewInit{
 
  public obj = new initializeemployee()
  
  public listofemployees : employeeinfo[] = this.obj.getemployess()
  public lastposition :any
  chartfromchild:any
  @ViewChild(ChartComponent) chart_com :any
  
  ngAfterViewInit(): void {
    this.chartfromchild = this.chart_com.char
  }
  Add() :void{
    let newemp = new employeeinfo("" , 0 ,0,0,0,0)
    this.obj.addemployee(newemp)
    this.lastposition = this.listofemployees.length - 1
    newemp.empname = this.listofemployees[this.lastposition].empname
    newemp.jan=this.listofemployees[this.lastposition].jan
    newemp.feb=this.listofemployees[this.lastposition].feb
    newemp.mar=this.listofemployees[this.lastposition].mar
    newemp.apr=this.listofemployees[this.lastposition].apr
    newemp.may=this.listofemployees[this.lastposition].may
    

  }
  //*num:number=-1 ;
  flag:any =true;
  listofemp_chart : employeeinfo[] = this.listofemployees
  temp :any



  nameclicked(i :number):void { 
          
          this.flag = !this.flag
          console.log(this.flag , i )
          /*if(this.flag==true){
            this.listofemp_chart ==this.listofemployees
          }*/
          
          this.listofemp_chart= []
          
          //this.chartfromchild.destroy()
          new ChartComponent().destroychart(this.chartfromchild)
          this.listofemp_chart.push(this.listofemployees[i])

          console.log(this.listofemp_chart[0].empname)
          console.log("ana hnaaa")
          console.log("5lst")
          
      
        }
        reloademployees(){
          this.listofemp_chart=this.listofemployees
        }

        allowonlunumbers(event:any):boolean{
           
          const charcode = (event.whitch)?event.whitch: event.keyCode;
          if(charcode>31 && (charcode <48 || charcode>57)){
            console.log("enter number");
            return false
          }

          return true
        }
        
      }
    
     
  
  

