
class Student {

  constructor(id, ad, gpa, courses) {
    this.id = id; 
    this.ad=ad; 
    this.gpa = gpa; 
    this.courses=courses;
  }
  toString() {
    return this.id+","+this.ad +"," +this.gpa+ ","+ this.courses;
  
 }
}

class Courses {

 constructor(ad, time, date, rooms){

  this.ad=ad;
  this.time=time;
  this.date=date;
  this.rooms=rooms;

}
toString() {
    return this.ad+","+this.time +"," +this.date+ ","+ this.rooms;
  

 }
}

class Point{
 constructor(x, y){

this.x=x;
this.y=y;
}

toString() {
    return this.x+","+this.y;
  

 }

}

class Point3D extends Point{

constructor(x,y,z){
 super(x,y);
 this.z=z;
 }

toString() {
   return this.x+","+this.y +"," +this.z;
 

 }

}

class Distance {

constructor(km=0){

this.km=Math.round(km);

}


get miles() {
    return Math.round(this.km *1.6);
  }
  set miles(value=0) {
 this.km=Math.round(value/1.6);
  }
toString() {
   return this.km+" km";
  
 }
static fromMiles(value){
   let d =new Distance();
   d.miles=value;
   return d;

}
}

class CW4 extends Menu{

   constructor(){
   super();
   this.course=new Courses("BLM305", "14:00", "27.10.2018", "B121");
     this.student=new Student("1421221008","Dila", "2.40", "BLM305" );
   this.point=new Point("3" , "5");
  this.point3d=new Point3D("3","5", "2");
  this.distance=new Distance(2000);


}



}










