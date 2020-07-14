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

////////////////////////////////////////////////////
////----------------objecet.create--------------////
////////////////////////////////////////////////////

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
////////////////////////////////////
//------primitive vs objiect------//
////////////////////////////////////

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



////////////////////////////////////////
///------primitive vs function------///
///////////////////////////////////////


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

/////////////////////////////////////////////////
// -----passing function as arguments-------- ///
////////////////////////////////////////////////

/*
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
*/
///////////////////////////////////////////////
//--first class function returning function--//
///////////////////////////////////////////////
/** 
function interviewQuestion(job){
    if (job === 'teacher'){
        return function(name){
            console.log(name + ' Can you please explain the purpose of discrete mathematics?');
        }
    } else if(job === 'designer'){
        return function(name){
            console.log('Can you design a business card? ' + name);
        }
    } else {
        return function(name){
            console.log(name + 'What do you do?');
        }
    }
}



var teacherQuestion = interviewQuestion('teacher');
var designerQuestion = interviewQuestion('designer');
teacherQuestion('AKM Masum');
designerQuestion('Tanbir Sakib');
designerQuestion('Emon Younes');
designerQuestion('Golam Hassan Tohin');

interviewQuestion('teacher')('Kafi');
*/
 /*we can directly call two function one afer another.here first a function will be called than the return value with this function the another function will be called */


/////////////////////////////////////////////////////////////
/************** Example of returning functions***************
///////////////////////////////////////////////////////////// 
function heightMeasure(height){
    if (height >= 6){
        return function(name){
            console.log(name +' Congrats.You are selected ad Defender');
        }
    }else if(height >=5.6 && height <6){
        return function(name){
            console.log(name + ' hey boy.you are selected as midfielder');
        }
    }else{
        return function(name){
            console.log(name + ' You are selected as striker');
        }
    }
} 

heightMeasure(6.2)('Adnan');
heightMeasure(5.5)('Tanbir Sakib');
heightMeasure(5.7)('Anik Zaman');

*/


/////////////////////////////////////////////////////////
/////////----Immediateley invoked function ------////////
/////////////////////////////////////////////////////////

/**  function game() {
    var score =Math.random() * 10;
    console.log(score >= 5);
}
game(); 

(function() {
    var score = Math.random() * 10;
    console.log(score >= 5);
})(); 

(function(goodLuck) {
    var score = Math.random() * 10;
    console.log(score >= 5 - goodLuck);
})(5);  //we can pass arguments here

*/


//////////////////////////////////////////////
/////////////------CLOSURE-------/////////////
//////////////////////////////////////////////

/** 
function retirement(retirementAge) {
    var a = ' years left untill retirement'
    return function(yearOfBirth){
        var age = 2020 - yearOfBirth;
        console.log((retirementAge - age) + a);
    }
}


var retirementBangladesh = retirement(60);
retirementBangladesh(1990);
var retirementIndia = retirement(65);  
retirementIndia(2000);        //here we can access variables from retirement funtion  even after calling it
                                        //this the power of closure      
var retirementUSA = retirement(70);
retirementUSA(1980);
*/

/////////////////////////////////////////////////////////
////////example of closure with previous code////////////
////////////////////////////////////////////////////////
/** 
function interviewQuestion(job){
    return function(name){ 
    if (job === 'teacher'){
        console.log(name + ', What do you like to teach?');
        } else if(job === 'designer'){
        console.log('Can you design a business card? ' + name);
        } else {
        console.log(name + 'What do you do?');
        }
    }
}

interviewQuestion('teacher')('Tanveer');
*/
























































































