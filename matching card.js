var cards = document.querySelectorAll(".square");
var secten = document.querySelector("#secten");
var sec = document.querySelector("#sec");
var minten = document.querySelector("#minten");
var min = document.querySelector("#min");
var secten2 = 0;
var sec2 = 0;
var minten2 = 0;
var min2 = 0;
var count=0;
var myVar;
var previse=[];
var imgesCopy = [{
	imgUrl:"https://images.unsplash.com/photo-1588015810531-dd522c9c8bbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=646&q=80",
	assigns:[]
},
{
	imgUrl:"https://images.unsplash.com/photo-1587393795320-6e43b260ecd0?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
	assigns:[]
},
{
	imgUrl:"https://images.unsplash.com/photo-1563730049333-31f8f9161f4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
	assigns:[]
},
{
	imgUrl:"https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
	assigns:[]
},
{
	imgUrl:"https://images.unsplash.com/photo-1584566006505-8923576e70d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
	assigns:[]
}
];


var imges = [{
	imgUrl:"https://images.unsplash.com/photo-1588015810531-dd522c9c8bbb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=646&q=80",
	assigns:[]
},
{
	imgUrl:"https://images.unsplash.com/photo-1587393795320-6e43b260ecd0?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
	assigns:[]
},
{
	imgUrl:"https://images.unsplash.com/photo-1563730049333-31f8f9161f4d?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
	assigns:[]
},
{
	imgUrl:"https://images.unsplash.com/photo-1571290274554-6a2eaa771e5f?ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
	assigns:[]
},
{
	imgUrl:"https://images.unsplash.com/photo-1584566006505-8923576e70d4?ixlib=rb-1.2.1&auto=format&fit=crop&w=675&q=80",
	assigns:[]
}
];

for (var i=1;i<11 ; i++){
var random =Math.floor(Math.random() * imges.length);
imges[random].assigns.push(i);
if (imges[random].assigns.length == 2){
	var index = imgesCopy.map(function(e) { return e.imgUrl; }).indexOf(imges[random].imgUrl);
	imgesCopy[index].assigns.push(imges[random].assigns[0],imges[random].assigns[1]);
}
imges = imges.filter(imge => imge.assigns.length<2);
}



cards.forEach(item => {
  item.addEventListener('click', event => {
  	var imge = imgesCopy.find(picid => picid.assigns.some(item => item == event.target.id)).imgUrl;
    event.target.style.backgroundImage = "url('"+ imge +"')";
  	if (!previse.includes(event.target.id)){
  		if (previse.length < 2){
        previse.push(event.target.id);
        if (previse.length == 2){
  			if (document.getElementById(previse[0]).style.backgroundImage == document.getElementById(previse[1]).style.backgroundImage){
  				document.getElementById(previse[0]).classList.add("correct");
  				document.getElementById(previse[1]).classList.add("correct");
  				count++;
  				if (count==5){
  				settime();}
  				previse=[];
  			}
            else{
                setTimeout(function(){ 
                document.getElementById(previse[0]).style.backgroundImage = "url('https://images.unsplash.com/photo-1551478279-713be6cb027d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=634&q=80')" ;
            	document.getElementById(previse[1]).style.backgroundImage = "url('https://images.unsplash.com/photo-1551478279-713be6cb027d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjExMDk0fQ&auto=format&fit=crop&w=634&q=80')";
                previse=[];
                 }, 800); 
  		        }
  		}
    }
  			
  	}
 	settime();

});

});



function settime() {
    myVar = setInterval(function (){
if (count==5){
clearInterval(myVar);
document.getElementById("time").textContent = "You Win in " + minten.textContent + min.textContent + " seconds !!";
document.getElementById("time").classList.add("end");
}
else {
    	secten2++;
	if (secten2>9){
		secten2 = 0;
		sec2++;
	}
	if (sec2>9){
		sec2 = 0;
		min2++;
	}
	if (min2>9){
		min2 = 0;
		minten2++;
	}
 sec.textContent = secten2;
 secten.textContent = sec2;
 minten.textContent = minten2;
 min.textContent = min2;}
    }, 100)}

