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