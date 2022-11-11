 console.log("Hello world");

 // this won't get any errors because it is a comment
 let x = 500;
 let y = 276;

 let sum = x + y;
 let pi = 3.14;

 console.log("x is", x);

 let name = "Nella Radcliffe";

 let crazMAth = 100 * 500 / 679 + 40 - 765;

 let isGameOver = false; 

 console.log(isGameOver, typeof isGameOver);

 let ages = [25,17,16,85];

 console.log("ages is an array", ages);

 let secondAge = ages[1];
 
 console.log("student is", name);
 console.log("student name is")


//@ts-check
 /** @type {HTMLCanvasElement} */ //@ts-ignore
 let canvas = document.getElementById("canvas-1");
 canvas.width = 100;
 canvas. height = 100;
 /** @type {CancasRenderingContex2D} */
 let context = canvas.getContext("2d");

 

 class Clickbox{
	constructor(x,y,size){
		this.x = x;
		this.y = y;
		this.size = size;
		
		this.isClicked = false;
		this.refreshrate = 500;
		this.lastrefresh = 0;
		this.colors = colors;
		this.color = "red";

		this.setColor();
	
	}

	setColor(){
		let colorIndex = Math.random(Math.random() * colors.length);
		let color = colors[colorIndex];
	}


	update(timeElapsed) {
		this.lastRefresh += timeElapsed;

		if(this.lastRefresh < this.refreshRate) return;

		if(this.lastRefresh >= this.refreshRate){
			this.setColor();
		}
	}
	draw() {}
 }

 let squares = [];
 let gridSize = 4;
 let size = canvas.width / gridSize;
 let colors= [
	"red",
	"orange",
	"yellow",
	"green",
	"blue",
	"indigo",
	"violet"];


 for (let row = 0; row < gridSize; row ++) {
	for(let col= 0; col < gridSize; col++){
		let colorIndex = Math.random(Math.random() * colors.length);
		let color = colors[colorIndex];
		drawSquare(col * size, row * size, color, size);
	}

 }

 
 context.fillstyle = "red";
 context.fillRect(0,0,35,25)

 context.fillStyle = "blue";
 context.fillRect(25,0,25,25)

 drawSquare(25,0,"blue");


 function drawSquare(x,y,color, size = 25){
	let square = new Path2D();
	square.rect(x,y,size,size);

	squares.push(square);

	context.fillstyle = color; 
    context.fillRect(x,y,size,size);
	
}

console.log(squares);

let currentTime = 0;
let refreshRate = 500;
let lastRefresh = 0;


function drawloop(timestamp){
	
	let elapsedTime = timestamp - currentTime;
	currentTime = timestamp;

	lastRefresh = lastRefresh + elapsedTime;

	if(lastRefresh >= refreshRate)

	for (let row = 0; row < gridSize; row ++) {
		for(let col= 0; col < gridSize; col++){
			let colorIndex = Math.random(Math.random() * colors.length);
			let color = colors[colorIndex];
			drawSquare(col * size, row * size, color, size);
		}
      }
}

requestAnimationFrame(drawloop);
