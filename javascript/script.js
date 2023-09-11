// function welcome(){
    
//     var days = ["Sunday","Monday","Tuseday","Wednesday","Thursday","Friday","Saturday"];
//     var today = new Date();
//     var msg = "Welcome. Today is "+days[today.getDate()];
//     return msg;
// }

// console.log(welcome());

(function(name){
    var days = ["Sunday","Monday","Tuseday","Wednesday","Thursday","Friday","Saturday"];
    var today = new Date();
    var msg = 'Welcome ' + name +' Today is '+days[today.getDate()];
   console.log(msg);
}("Levent"));