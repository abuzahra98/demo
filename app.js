function input(){


    var fname ='welcome dawood';
    var lname = 'abuzahra';
    var age = '23'; 
    var dd = prompt ('add your name');
    alert (dd);
    document.write(dd);
    
    var add = prompt('how many shert you want');
    if (add >= 5){
    alert('welcome dawood discount 30%');
    
    }
    else{
        alert('welcome dawood discount 10%');
    }
    
    
    }
    
    
    
    input();


var order = prompt ("what do you want Tshert or dress");
while (order !=="Tshert" && order !== "dress"){
    order = prompt ("what do you want Tshert or dress");
}
var itemorder ='';
if (order=="Tshert"){
    itemorder = '<img src="img/ts.jpg"/>';

}
else if(order=="dress"){
    itemorder = '<img src="img/tq.jpg"/>';
}

var numofitem = prompt("what is the number of item");
var result ='';
for(var i=0;i<numofitem;i++){
    result=result+itemorder
}
document.write(result);


