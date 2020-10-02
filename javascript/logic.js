function sleep(delay) {
	return new Promise(resolve => setTimeout(resolve, delay));
}
var i = 0;
while (i < 15) {
	document.querySelector(".heights").style.height = "195px"
	var tree = document.querySelectorAll("#Gouri li")[0].cloneNode(true);
	tree.style.height = (Math.floor(Math.random() * 125) + 100) + "px";
	tree.class = "heights";
	document.querySelector("#Gouri").append(tree);
	i += 1;
}
var selection_sort= document.querySelector("#bubble_sort").cloneNode(true);
var insertion_sort= document.querySelector("#bubble_sort").cloneNode(true);

 document.querySelector("#bubble_sort p").innerHTML = "<h1>Bubble Sort Algorithm !</h2>"
 selection_sort.querySelector("p").innerHTML = "<h1>Selection Sort Algorithm !</h2>"
 insertion_sort.querySelector("p").innerHTML = "<h1>insertion Sort Algorithm !</h2>"
selection_sort.id = "selection_sort"
insertion_sort.id = "insertion_sort"
insertion_sort.querySelector("#lol").id="lol2"
selection_sort.querySelector("#lol").id="lol1"
selection_sort.querySelector("#Gouri").id="Gouri1"
insertion_sort.querySelector("#Gouri").id="Gouri2"
document.querySelector("#main").append(selection_sort);
document.querySelector("#main").append(insertion_sort);
console.log(insertion_sort)


async function bubblesort() {
	var n = document.querySelector("#Gouri").childElementCount
	var rectangles = document.querySelectorAll(".heights")
	for (i = 0; i < n - 1; i++) {
		for (var j = i; j < n; j++) {
			rectangles[i].style.backgroundColor = "white"
			rectangles[j].style.backgroundColor = "white"
			await sleep(150)
			let first = Number(rectangles[i].style.height.split("p")[0])
			let second = Number(rectangles[j].style.height.split("p")[0])
			if (first > second) {
				rectangles[i].style.backgroundColor = "brown"
				rectangles[j].style.backgroundColor = "brown"
				await sleep(150)
				rectangles[i].style.height = second + "px"
				rectangles[j].style.height = first + "px"
			}
			rectangles[i].style.backgroundColor = "lightgreen"
			rectangles[j].style.backgroundColor = "lightgreen"
			await sleep(150)

		}
		rectangles[i].style.backgroundColor = "green"
		await sleep(150)
	}
	rectangles[n - 1].style.backgroundColor = "green"
}

async function selection_sorting() {
	var j = 0;
	var n = document.querySelector("#Gouri1").childElementCount
	var rectangles = document.querySelectorAll("#Gouri1 .heights")
	console.log(rectangles)

	for (i = 0; i < n - 1; i++) {
		var min = i
		for (j = i+1; j < n; j++) {
			let first = Number(rectangles[j].style.height.split("p")[0])
			let second = Number(rectangles[min].style.height.split("p")[0])
			rectangles[j].style.backgroundColor = "white"
			await sleep(150)
			if (second > first) {

			     min = j
			}
			 rectangles[j].style.backgroundColor = "lightgreen"
		}
    if (min != i)
		{
			rectangles[i].style.backgroundColor = "brown"
			rectangles[min].style.backgroundColor = "brown"
			await sleep(250)
			let temp = rectangles[i].style.height
			rectangles[i].style.height = rectangles[min].style.height
			rectangles[min].style.height = temp
		}
		rectangles[i].style.backgroundColor = "green"
 	 await sleep(250)
}
	rectangles[n-1].style.backgroundColor = "green"
}

async function insertion_sorting() {
	var j = 0;
	var n = document.querySelector("#Gouri2").childElementCount
	var rectangles = document.querySelectorAll("#Gouri2 .heights")
	console.log(rectangles)
	for (i = 1; i < n ; i++) {
			if (Number(rectangles[i].style.height.split("p")[0]) < Number(rectangles[i-1].style.height.split("p")[0])) {
			  var k = i
				while( k!=0 && (Number(rectangles[k].style.height.split("p")[0]) < Number(rectangles[k-1].style.height.split("p")[0]) )){
					rectangles[k].style.backgroundColor = "brown"
					rectangles[k-1].style.backgroundColor = "brown"
					await sleep(250)
					let temp = rectangles[k].style.height
					rectangles[k].style.height = rectangles[k-1].style.height
					rectangles[k-1].style.height = temp
					rectangles[k].style.backgroundColor = "lightgreen"
					rectangles[k-1].style.backgroundColor = "lightgreen"
					await sleep(250)
					k-=1
				}
			}
		}
		for (i = 0 ;i<n ;i++){
				rectangles[i].style.backgroundColor = "green"

		 }
}
document.querySelector("#lol").addEventListener("click", bubblesort);
document.querySelector("#lol1").addEventListener("click", selection_sorting);
document.querySelector("#lol2").addEventListener("click", insertion_sorting);
