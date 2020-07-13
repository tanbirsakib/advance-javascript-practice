/*var Person = function(name, id, cgpa, yearOfBirth){
    this.name = name;
    this.id = id;
    this.cgpa = cgpa;
    this.yearOfBirth = yearOfBirth;
}
Person.prototype.calculateAge = function(){
    console.log(2020 - this.yearOfBirth);
}
Person.prototype.homeAddress = "Noapara,Raozan,Chittagong"

var sakib = new Person("Tanbir Sakib", "C171038", 3.423, 1996);
var younus = new Person("Emon Younes", 'C171040', 3.23, 1997);
var tuhin = new Person('Golam Tohin', 'C171041', 2.99,1998);

sakib.calculateAge();
younus.calculateAge();
tuhin.calculateAge();

console.log(sakib.homeAddress);
console.log(younus.homeAddress);
console.log(tuhin.homeAddress);
*/


//-------------------objecet.create--------------//

/*
var personProto = {
    calculateAge : function(){
        console.log(2020-this.yearOfBirth);
    }
}

var sakib = Object.create(personProto);
sakib.name = 'Tanbir Sakib';
sakib.cgpa = 3.42;
sakib.yearOfBirth = 1996;
sakib.homeAddress = 'Noapara';

var younus = Object.create(personProto,{
    name : {value : 'Emon Younes'},
    cgpa : {value : 3.46},
    yearOfBirth : {value : 1997},
    homeAddress : {value : 'Noapara,Raozan,Chittagong'}
})
*/

//-------------primitive vs objiect

/*
var student1 = {
    name : 'Joynal Abedin',
    id : 'C171043',
    cgpa : 3.25
}

var student2 = student1;

student1.age = 33;
student2.sex = 'male';

console.log(student1.age);     
console.log(student2.age);
console.log(student2.sex);    /*here we can see both objects will get the same result.because we dont create new 
                                object here.we just point our object with new var.when we put values ths direct the origin object*/
//console.log(student2.sex);




///------primitive vs function


/*
var age = 30;

var sakib = {
    name : 'Muhammed Tabir Hossen Sakib',
    city : 'Chittagong',
    university : 'International Islamic University Chittagong'
}

function change(a,b){
    a = 40;
    b.city = 'Dhaka'
}

change(age,sakib);
console.log(age);
console.log(sakib.city);
*/


// -------------- passing function as arguments


var years = [1996, 1997, 1995,2010,2005];

function arrayCalc(arr,func){
    var arrRes = [];
    for (var i = 0; i<arr.length;i++){
        arrRes.push(func(arr[i]));     //we passed calculateAge function as argument    
    }
    return arrRes;
}

function calculateAge(el){
    return 2020 - el;
}
function isFullAge(el){
    return el >= 18;
}

function maxHeartRate(el){
    if(el >= 18 && el <= 81){
        return Math.round(206.9 - (0.67*el));
    }
    else return -1;
}



var ages = arrayCalc(years,calculateAge); //here we pass calculateAge functon to arrayCalc function
var fullAges = arrayCalc(ages,isFullAge); //here we pass isFullAge to arrayCalc function
var maxRate = arrayCalc(ages, maxHeartRate); // passing maxHeartRate function to arrayCalc function

console.log(ages);
console.log(fullAges);
console.log(maxRate);

























































































