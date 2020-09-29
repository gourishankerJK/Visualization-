var i = 0;
	while (i < 7) {
		document.querySelector("#height0").style.height = "195px"
		var tree = document.querySelector("#height0").cloneNode(true);
		if (i <=3){
			tree.style.height = (i+1)*100 +"px";
}
else {
	tree.style.height = (i+1)*35 +"px";
}
		tree.id = "height" + (i+1)
		tree.class = "heights";
		document.querySelector("#Gouri").append(tree);
		i += 1;
	}

	function sleep(delay){
	    return new Promise(resolve=>setTimeout(resolve,delay));
	}


async function bubblesort(){
var n = document.querySelector("#Gouri").childElementCount
var rectangles = 	document.querySelectorAll(".heights")
for(i = 0 ;i<n-1 ;i++){
	 for (var j =i ;j<n ;j++){
		 rectangles[i].style.backgroundColor = "white"
		 rectangles[j].style.backgroundColor = "white"
		 await sleep(300)
		 let first = Number(rectangles[i].style.height.split("p")[0])
		 let second = Number(rectangles[j].style.height.split("p")[0])
		 if (first > second ){
			 rectangles[i].style.backgroundColor = "brown"
			 rectangles[j].style.backgroundColor = "brown"
			 await sleep(250)
			 rectangles[i].style.height = second +"px"
			 rectangles[j].style.height = first+"px"
		 }
		 rectangles[i].style.backgroundColor = "lightgreen"
		 rectangles[j].style.backgroundColor = "lightgreen"
		 await sleep(250)

	 }
	 rectangles[i].style.backgroundColor = "green"
	 await sleep(250)
 }
 rectangles[n-1].style.backgroundColor = "green"
 }
// console.log(Number(i.style.height.split("p")[0]))



//
// i = 0
// var heights = []
// for (i = 1 ; i< 7 ; i++){
// 	  var s = "#height"+i;
// 	    var heightpx = document.querySelector(s).style.height
// 			var height = parseInt(heightpx.split("p")[0])
// 			heights.push(height)
//
// }
// function bubblesort(){
// var j = 0
// for (i = 0 ;i< heights.length-1 ;i++){
// 	for ( j = i+1 ;j<heights.length;j++){
// 	if (heights[i] > heights[j]){
// 		let temp;
// 		var s = "#height"+(i+1);
// 			var d = "#height"+(j+1);
// 			console.log(s)
// 			console.log(d)
// 			console.log(heights[i])
//     document.querySelector(s).style.height = heights[j]+"px"
// 		document.querySelector(d).style.height = heights[i]+"px"
// temp = heights[i];
// heights[i] = heights[j];
// heights[j] = temp;
//
// }
// 	}
// }
// }
document.querySelector("#lol").addEventListener("click" , bubblesort);
