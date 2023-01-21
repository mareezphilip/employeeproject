import { employeeinfo } from "./employeeinfo";
export class initializeemployee{

   emp1:any;
   emp2:any;
   emp3:any;
   emp4:any;
   emp5:any;
   listofemployees : employeeinfo[]=[];

   newname:string="";
   newjan:number=0;
   newfeb:number=0;
   newmar:number=0;
   newapr:number=0;
   newmay:number=0;

    constructor(){
        this.emp1 = new employeeinfo("mareez philip" , 200 ,300 , 250 , 500,600)
        this.emp2= new employeeinfo("mona Ahmed " , 300 ,200 , 500 , 200,200)
        this.emp3= new employeeinfo("marven philip" , 600 ,500 , 250 , 200,400)
        this.emp4= new employeeinfo("marina samoil" , 300 ,200 , 600 , 250 ,250)
        this.emp5= new employeeinfo("mariem shokry" , 500 ,200 , 300 , 500,400)
        this.listofemployees.push(this.emp1)
        this.listofemployees.push(this.emp2)
        this.listofemployees.push(this.emp3)
        this.listofemployees.push(this.emp4)
        this.listofemployees.push(this.emp5)


    }


     /* getemployees () :employeeinfo[]{
         return new Array(this.emp1, this.emp2 , this.emp3 , this.emp4 , this.emp5)
      }
*/

      getemployess() :employeeinfo[]{
        return this.listofemployees
      }
      addemployee(newemp: any):void{
         
        //let newemp = new employeeinfo(this.newname, this.newjan, this.newfeb , this.newmar , this.newapr , this.newmay)
        this.listofemployees.push(newemp)
      }
}