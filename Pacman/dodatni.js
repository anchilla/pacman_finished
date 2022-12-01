
var ctx = null;
var gameMap = [
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
	0, 1, 1, 1, 0, 1, 1, 1, 1, 0,
	0, 1, 0, 0, 0, 1, 0, 0, 0, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 0, 1, 0, 0, 0, 1, 1, 0,
	0, 1, 0, 1, 0, 1, 0, 0, 1, 0,
	0, 1, 1, 1, 1, 1, 1, 1, 1, 0,
	0, 1, 0, 0, 0, 0, 0, 1, 0, 0,
	0, 1, 1, 1, 0, 1, 1, 1, 1, 0,
	0, 0, 0, 0, 0, 0, 0, 0, 0, 0
];
var tileW = 40, tileH = 40;
var mapW = 10, mapH = 10;
var currentSecond = 0, frameCount = 0, framesLastSecond = 0;

window.onload = function()
{
		const canvas = document.getElementById("game");
	
	ctx = document.getElementById('game').getContext("2d");
	requestAnimationFrame(drawGame);
	ctx.font = "bold 10pt sans-serif";
		canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
};

function drawGame()
{
	if(ctx==null) { return; }

	var sec = Math.floor(Date.now()/1000);
	if(sec!=currentSecond)
	{
		currentSecond = sec;
		framesLastSecond = frameCount;
		frameCount = 1;
	}
	else { frameCount++; }

	for(var y = 0; y < mapH; ++y)
	{
		for(var x = 0; x < mapW; ++x)
		{
			switch(gameMap[((y*mapW)+x)])
			{
				case 0:
					ctx.fillStyle = "#685b48";
					break;
				default:
					ctx.fillStyle = "#5aa457";
			}

			ctx.fillRect( x*tileW, y*tileH, tileW, tileH);
		}
	}

	ctx.fillStyle = "#ff0000";
	ctx.fillText("FPS: " + framesLastSecond, 10, 20);

	requestAnimationFrame(drawGame);
}


//OVO jw obican grid
function grid(){
	context.beginPath();
for(var i=5; i<=800; i=i+60){
	//verticalne linije
	context.moveTo(i, 5);
	context.lineTo(i, 800);

	//horizontalne linije
	context.moveTo(5,i);
	context.lineTo(800,i);

	context.strokeStyle='red';
	context.stroke();

}
}

const normal = new Image();
	normal.src = "img/pacManNorm.PNG";
	const right = new Image();
	right.src = "img/pacManR.PNG";
	const left = new Image();
	left.src = "img/pacManL.PNG";
	const down = new Image();
	down.src = "img/pacManDown.PNG";
	let currentImage = new Image();
	currentImage.src = "img/pacManNorm.PNG";
ctx.drawImage(down,900,900);

/*	moveMouth()

	switch(keyPressed){
		case 'w':
	//player.mouth(this.position.x, this.position.y, this.position.x+20, 
		//this.position.y-26, this.position.x-20, this.position.y-26);
	currentImage.src = "img/pacManDown.png";
	break;
	case 'd':
		player.mouth(this.position.x, this.position.y, this.position.x+26, 
		this.position.y+20, this.position.x+26, this.position.y-20);
	break;
	case 'a':
	player.mouth(this.position.x, this.position.y, this.position.x-26, 
		this.position.y+20, this.position.x-26, this.position.y-20);
	break;
	case 's':
	player.mouth(this.position.x, this.position.y, this.position.x+20, 
		this.position.y+26, this.position.x-20, this.position.y+26);
	break;
}*/


function pacAnimation(){
	requestAnimationFrame(pacAnimation);
	//if (currentImage.src == "img/pacManNorm.png"){
	
	ctx.drawImage(currentImage,900,900);
	//}
	//else ();
	ctx.drawImage(down, 900, 900);
}
setInterval(pacAnimation, 1000);
//window.addEventListener("load", pacAnimation);


//circle rect collision

function collisionCheckCircleRect(circle, rect)
{
    var distx = Math.abs(circle.x - rect.x);
    var disty = Math.abs(circle.y - rect.y);

    if (distx > (rect.width/2 + circle.radius)) { return false; }
    if (disty > (rect.height/2 + circle.radius)) { return false; }

    if (distx <= (rect.width/2)) { return true; } 
    if (disty <= (rect.height/2)) { return true; }

    var hypot = (distx - rect.width/2)*(distx- rect.width/2) +
                         (disty - rect.height/2)*(disty - rect.height/2);

//console.log(hypot <= (circle.radius*circle.radius))
    return (hypot <= (circle.radius*circle.radius));
}

//moja varijanta ovog gore
function collisionPacRect(circle, rect)
{
    var distx = Math.abs(player.position.x - rect.x);
    var disty = Math.abs(player.position.y - rect.y);

    if (distx > (rect.height/2 + player.radius)) { return false; }
    if (disty > (rect.height/2 + player.radius)) { return false; }

    if (distx <= (rect.height/2)) { return true; } 
    if (disty <= (rect.height/2)) { return true; }

    var hypot = (distx - rect.height/2)*(distx- rect.height/2) +
                         (disty - rect.height/2)*(disty - rect.height/2);

//console.log(hypot <= (circle.radius*circle.radius))
    return (hypot <= (player.radius*player.radius));
}



//stari for each za collision pacman - rect
	arrayWall.forEach(rect => 
		{if//(player.position.y <= rect.y)
	 
	 (
	player.position.y - player.radius + player.velocity.y <= rect.y + rect.height &&
		player.position.x  + player.velocity.x>= rect.x &&
		player.position.y + player.radius + player.velocity.y >= rect.y &&
		player.position.x - player.radius + player.velocity.x <= rect.x + rect.height
		)
		
	{
		
		console.log("zidovi x: "+(rect.x));
		console.log("zidovi y: "+(rect.y));// + rect.height));
		console.log("pacman  velocity x: "+(player.velocity.x));
		console.log("pacman  velocity y: "+(player.velocity.y));
		console.log("pacman x: "+(player.position.x));
		console.log("pacman y: "+(player.position.y));// + rect.height));
		//console.log("collision");
		player.velocity.x = 0;
		player.velocity.y = 0;

		}
	});

	player.update();
	player.moveMouth();

// rad za jedenje peleta preko objekta

	//tileMap.drawPellets();

	//izgleda da ce morati nastari nacin, preko for, kod onog gore i da tu radim sa nizom
	pellets.forEach((pellet,i) => {
		//mozda zato sto postoji samo jedan obj tileMap. Kako to da menjam?
		//da prevucem ceo kod iz drawPellets() ovde? I izvucem ga iz tilemap klase.
		//moram napraviti whiteDot sliku odvojeno onda
		tileMap.drawPellets(context); 

	if(
		Math.hypot(
			//sta mi ovo daje?
	(pellet.x -player.position.x), (pellet.y - player.position.y))
		< (pellet.radius + player.radius)){
		pellets.splice(i, 1);
		}
	});


//--OVO STAVLJALA U FOR INT I, drawTiles
				//console.log("rez: "+(pellet.x -player.position.x)); 645 uvek je isto
			//console.log("rez: "+(pellet.y - player.position.y)); 405
	//console.log("rez: "+pellet.x); 735 i opet samo radi poslednji, jer nemam forEach
				//ako je pacman prosao tuda stavi to u niz i crtaj black
				//ovaj uslov daje false
				if(
			Math.hypot(
			(pellet.x -player.position.x), (pellet.y - player.position.y))
			< (pellet.radius + player.radius)){
				pellets.splice(i, 1);
			tile = 2;
			console.log("jedenje peleta deo");


//--CELA GHOST LOGIKA NJEGOVA--
//var ghost;
class Ghost{
	constructor({position, velocity}){
		//this.x = 720;
		//this.y = 480;
		this.position = position;
		this.velocity = velocity;
		this.width = 50;
		this.ghostImg = new Image();
		this.ghostImg.src = "img/ghostP1.JPG";
		this.prevCollisions = [];
	}
	/*constructor(x, y, height, width, velocityX, velocityY){
		this.x = x;
		this.y = y;
		//this.position = position;
		this.velocityX = velocityX;
		this.velocityY = velocityY;
		this.height = height;
		this.width = width;
		this.ghostImg = new Image();
		this.ghostImg.src = "img/ghostP1.JPG";
		this.prevCollisions = [];
}*/
	drawGhost(){
	context.drawImage(this.ghostImg, this.position.x, this.position.y);
}
moveGhost(){
		this.drawGhost();
		//this.x = Math.random() * canvas.width;
		this.x --;
		//this.y = Math.random() * canvas.height;
		//this.y --;
		//da mi direction bude random od 1 do 4, i onda imam caseove za to?
		//ili da menjam direction kada udarimu nes? Ili razlicite metode za razl directi
		//random  za direction ali drzi ganekih 30 frameova
	//this.x += this.velocity;
	//this.y += this.velocity;
}
updateGhost(){
	this.drawGhost();
	this.position.x += this.velocity.x;
	this.position.y += this.velocity.y;
		
	}



}
//kraj Ghost KLASE

	//const img = new Image();
	//img.src = "img/yellowDot.png";


function ceoNiz(){
	console.log("ceo niz: "+Object.values(rect));
}


//kao tiles() samo samo za pellets preko niza Pellets
//pellet ima x, y, i radius, propertije
// pellet.x , pellet.y , pellet.radius
//isproveravaj kako radi i i DOLE U FOREACH
//function drawPellets(context){
	//context.drawImage(img, pellet.x, pellet.y);
//}

	const player = new Player({position:{x:90, y:90}, velocity: {x:0, y:0}});
	const tileSize = 60;
	const tileMap = new TileMap(tileSize);
	//x, y, height, width, velocityX, velocityY)
	//const ghost = new Ghost(725, 485, 50, 50, -2, 0);
	//const ghost = new Ghost({position: {x:210, y:390}, velocity: {x:0, y:0}});
	const ghost = new Ghost({position: {x:725, y:485}, velocity: {x:-2, y:0}});
	//console.log("ghost: "+(ghost.position.x) +", "+(ghost.position.y));
	const ghosts =[];
	ghosts.push(ghost);
	tileMap.canvasTileSize(canvas);
	tileMap.drawTilesWithBoundaries();
	//pellets.forEach(pellet => console.log("pellets niz: "+Object.values(pellet)));
	//ghost.forEach(ghost => console.log("ghost: "+Object.values(ghost)));
	//ghost nije defined
	//console.log("arrayWall " +Object.values(arrayWall[15]));
	//console.log("array length tj. br slika : " +arrayWall.length);
	arrayWall.forEach(rect => console.log("ceo niz wall: "+Object.values(rect)));
	console.log("player y: "+player.position.y +" radius: "+player.radius);
	console.log("y-radius: "+(player.position.y - player.radius));
	console.log("pacman uslov: "+(player.position.x + player.radius + player.velocity.x));
	let ghostDirection =  '';

//on je stavio da se namestaju velocity x i y u zavisnosto od directioja koji je
//niz, koji se namesta preko boundaries, ako se sudari s granicom, stavi direction u niz
/*function ghostPath(){
	if(ghost.velocity.x == 5 && ghost.velocity.y == 0)
	{
		ghostDirection = 'right';
	}
	if(ghost.velocity.x == -5 && ghost.velocity.y == 0){
		ghostDirection = 'left';
	}
	if(ghost.velocity.x == 0 && ghost.velocity.y == -5){
		ghostDirection = 'up';
	}
	if(ghost.velocity.x == 0 && ghost.velocity.y == 5){
		ghostDirection = 'down';
	}
}*/

function ghostColisionWall({circle, wall}){
			return(
		/*circle.position.y - circle.radius + circle.velocity.y <= wall.y + wall.height &&
		circle.position.x + circle.radius + circle.velocity.x >= wall.x &&
		circle.position.y + circle.radius + circle.velocity.y >= wall.y &&
		circle.position.x - circle.radius + circle.velocity.x <= wall.x + wall.height);
	
	za circle collision
		ghost.position.y - ghost.radius + ghost.velocity.y <= rect.y + rect.height &&
		ghost.position.x + ghost.radius + ghost.velocity.x >= rect.x &&
		ghost.position.y + ghost.radius + ghost.velocity.y >= rect.y &&
		ghost.position.x - ghost.radius + ghost.velocity.x <= rect.x + rect.height
		
				ghost.y + ghost.velocityY + 10 <= rect.y + rect.height &&
		ghost.y + ghost.height + ghost.velocityY +10 >= rect.y &&
		ghost.x + ghost.width + ghost.velocityX +10>= rect.x &&
		ghost.x + ghost.velocityX +10<= rect.x + rect.height)
		*/
		// da satvim ovo +10 samo u height i width da je 60, a ne 50?
		ghost.position.y + ghost.velocity.y + 10 <= rect.y + rect.height &&
		ghost.position.y + ghost.width + ghost.velocity.y +10 >= rect.y &&
		ghost.position.x + ghost.width + ghost.velocity.x +10>= rect.x &&
		ghost.position.x + ghost.velocity.x +10<= rect.x + rect.height)

}

function animate(){
	requestAnimationFrame(animate);
	
	context.clearRect(0, 0, canvas.width, canvas.height);
	tileMap.drawTiles();
	
	pellets.forEach((pellet,i) => {
		tileMap.drawPellets(pellet); 
		//(pellet.radius + player.radius)
	if(
		Math.hypot(
	(pellet.x - player.position.x), (pellet.y - player.position.y))
		< player.radius +10){
		//nek ti izracunava rezultat ovoga  < pa ces videti zasto je tako - mozda jer je
	//meni veci radius za pellet, kod njega  je samo mali krug. Verovatno je to.
		pellets.splice(i, 1);
	//console.log("if je true, hipotenuza");
	//console.log("peleti length: "+pellets.length);
		}
	});

	arrayWall.forEach(rect => 
		{if(
		player.position.y - player.radius + player.velocity.y <= rect.y + rect.height &&
		player.position.x + player.radius + player.velocity.x>= rect.x &&
		player.position.y + player.radius + player.velocity.y >= rect.y &&
		player.position.x - player.radius + player.velocity.x <= rect.x + rect.height)
		{
			player.velocity.x = 0;
		player.velocity.y = 0;
		}
	});

	ghosts.forEach((ghost) => {
		//console.log("ghost: "+Object.values(ghost));
	ghost.drawGhost();
	ghost.updateGhost();

	const collisions = [];
	//ghostPath();
		arrayWall.forEach(rect => 

		{// console.log("rez: "+(ghost.y + ghost.velocityY));
		//console.log("rez rect: "+(rect.y + rect.height));
			//da li mi treba ovde velocity, on nije stavio
						/*ghost.velocityX==2 && ghost.velocityY==0 &&
		ghost.y + ghost.velocityY + 10 <= rect.y + rect.height &&
		ghost.y + ghost.height + ghost.velocityY +10 >= rect.y &&
		ghost.x + ghost.width + ghost.velocityX +10>= rect.x &&
		ghost.x + ghost.velocityX +10<= rect.x + rect.height)*/

			if(
			!collisions.includes("right") && 
				ghostColisionWall({circle: {...ghost, velocity: {x:2, y:0}},
		wall:rect}))
		//ovaj deo ne kapiram jer daje 0 i 0
		{
			
		//console.log("ghost: "+(ghost.x) +", "+(ghost.y)+", rect: "+
			//rect.x+", "+rect.y);
			collisions.push("right");
			//console.log("right");
			
		}

		if(!collisions.includes("left") && 
		ghostColisionWall({circle: {...ghost, velocity: {x:-2, y:0}},
		 wall:rect}))
		{
			collisions.push("left");
			//console.log("ghost: "+(ghost.x) +", "+(ghost.y)+", rect: "+
			//rect.x+", "+rect.y);
		
		}

		if(!collisions.includes("up") && 
		ghostColisionWall({circle: {...ghost, velocity: {x:0, y:-2}},
		 wall:rect}))
		{
			collisions.push("up");
			//console.log("up");
			
		}

		if(!collisions.includes("down") && 
		ghostColisionWall({circle: {...ghost, velocity: {x:0, y:2}},
		 wall:rect}))
		{
			collisions.push("down");
			//console.log("down");
		
		}

		//zatvorene komande u drugom forEachu
	}
	//zatvoren drugi forEach
	);
	/*	if(collisions.length > ghost.prevCollisions.length){
		ghost.prevCollisions = collisions;
	}
	//ovo menja array u string
	if(JSON.stringify(collisions) !== JSON.stringify(ghost.prevCollisions)){
		//console.log("gogo");
		console.log("coll: "+collisions); //zasto je ovde coll prazan?
		console.log("prev coll:" +ghost.prevCollisions);
	}*/
			console.log(collisions);
		//zatvoren prvi forEach
	});

	player.update();
	player.moveMouth();
	frameTimer++;
}

animate();


//--MOJ DEO S DUHOM--
//var ghost;
class Ghost{

	constructor(x, y, height, width, velocityX, velocityY){
		this.x = x;
		this.y = y;
		//this.position = position;
		this.velocityX = velocityX;
		this.velocityY = velocityY;
		this.height = height;
		this.width = width;
		this.ghostImg = new Image();
		this.ghostImg.src = "img/ghostP1.JPG";
		this.prevCollisions = [];
}
	drawGhost(){
	context.drawImage(this.ghostImg, this.x, this.y);
}

updateGhost(){
	this.drawGhost();
	this.x += this.velocityX;
	this.y += this.velocityY;
		
	}

}
//kraj Ghost KLASE

function ceoNiz(){
	console.log("ceo niz: "+Object.values(rect));
}

	const player = new Player({position:{x:90, y:90}, velocity: {x:0, y:0}});
	const tileSize = 60;
	const tileMap = new TileMap(tileSize);
	//x, y, height, width, velocityX, velocityY)
	const ghost = new Ghost(725, 485, 50, 50, -2, 0);
	//const ghost = new Ghost({position: {x:725, y:485}, velocity: {x:-2, y:0}});
	//console.log("ghost: "+(ghost.position.x) +", "+(ghost.position.y));
	const ghosts =[];
	ghosts.push(ghost);
	tileMap.canvasTileSize(canvas);
	tileMap.drawTilesWithBoundaries();
	//pellets.forEach(pellet => console.log("pellets niz: "+Object.values(pellet)));
	//ghost.forEach(ghost => console.log("ghost: "+Object.values(ghost)));
	//console.log("arrayWall " +Object.values(arrayWall[15]));
	//console.log("array length tj. br slika : " +arrayWall.length);
	arrayWall.forEach(rect => console.log("ceo niz wall: "+Object.values(rect)));
	//console.log("player y: "+player.position.y +" radius: "+player.radius);
	//console.log("y-radius: "+(player.position.y - player.radius));
	console.log("pacman uslov: "+(player.position.x + player.radius + player.velocity.x));
	let ghostDirection =  '';


function ghostColisionWall({circle, wall}){
			return(
		
				/*ghost.y + ghost.velocityY + 10 <= rect.y + rect.height &&
		ghost.y + ghost.height + ghost.velocityY +10 >= rect.y &&
		ghost.x + ghost.width + ghost.velocityX +10>= rect.x &&
		ghost.x + ghost.velocityX +10<= rect.x + rect.height)
		*/
		// da satvim ovo +10 samo u height i width da je 60, a ne 50?
		ghost.position.y + ghost.velocity.y + 5 <= rect.y + rect.height &&
		ghost.position.y + ghost.width + ghost.velocity.y +5 >= rect.y &&
		ghost.position.x + ghost.width + ghost.velocity.x +5>= rect.x &&
		ghost.position.x + ghost.velocity.x +5<= rect.x + rect.height)

}

function ghostChangeDirection(dirX, dirY){
	//uradi random dva puta ali odvojeno, za x, u animate, pa ako je x 0 onda radi ovu metodu, -
	//ako nije onda je druga opcija 0 . i random za y pa ako
	//x= 0 , y = [-2, 0, 2] | y=0, x = [-2, 0, 2]
		const randIndX = Math.floor(Math.random() * dirX.length);
   		const randIndY = Math.floor(Math.random() * dirY.length);
   		// get random item
   		//if(dirX.includes(2) && directionX.includes(-2) &&
				//!directionY.includes(-2) && !directionY.includes(0))
    	const x = dirX[randIndX];
    	const y = dirY[randIndY];
    	ghost.velocityX=x;
    	ghost.velocityY=y;
}

function animate(){
	requestAnimationFrame(animate);
	
	context.clearRect(0, 0, canvas.width, canvas.height);
	tileMap.drawTiles();
	
	pellets.forEach((pellet,i) => {
		tileMap.drawPellets(pellet); 
		//(pellet.radius + player.radius)
	if(
		Math.hypot(
	(pellet.x - player.position.x), (pellet.y - player.position.y))
		< player.radius +10){
		//nek ti izracunava rezultat ovoga  < pa ces videti zasto je tako - mozda jer je
	//meni veci radius za pellet, kod njega  je samo mali krug. Verovatno je to.
		pellets.splice(i, 1);
	//console.log("if je true, hipotenuza");
	//console.log("peleti length: "+pellets.length);
		}
	});

	arrayWall.forEach(rect => 
		{if(
		player.position.y - player.radius + player.velocity.y <= rect.y + rect.height &&
		player.position.x + player.radius + player.velocity.x>= rect.x &&
		player.position.y + player.radius + player.velocity.y >= rect.y &&
		player.position.x - player.radius + player.velocity.x <= rect.x + rect.height)
		{
			player.velocity.x = 0;
		player.velocity.y = 0;
		}
	});

	ghosts.forEach((ghost) => {
		//console.log("ghost: "+Object.values(ghost));
	ghost.drawGhost();
	ghost.updateGhost();
	const directionX = [];
	const directionY = [];
	//const collisions = [];
	//ghostPath();
		arrayWall.forEach(rect => 

		{//right
		// console.log("rez: "+(ghost.y + ghost.velocityY));
		//console.log("rez rect: "+(rect.y + rect.height));
			//da li mi treba ovde velocity, on nije stavio
		//!collisions.includes("right") mora i ovo da ne dodaje ponovo
						if(ghost.velocityX==2 && ghost.velocityY==0 &&
		ghost.y + ghost.velocityY <= rect.y + rect.height &&
		ghost.y + ghost.height + ghost.velocityY >= rect.y &&
		ghost.x + ghost.width + ghost.velocityX >= rect.x &&
		ghost.x + ghost.velocityX <= rect.x + rect.height)

		{
			//ili directionX =[-2, 0] i directionY = [-2,2] pa ih stalno ovako prebrisem
			//ili ga pre ovog svaki put napravim da je prazan
			if(!directionX.includes(-2) && !directionX.includes(0) &&
				!directionY.includes(-2) && !directionY.includes(2) &&
				!directionY.includes()){
			directionX.push(-2);
			directionX.push(0);
			directionY.push(-2);
			directionY.push(2);
			directionY.push(0);
		}
		console.log("right");

		const randIndX = Math.floor(Math.random() * directionX.length);
    	const x = directionX[randIndX];
		ghost.velocityX=x;
		if(x!==0){
			ghost.velocityY=0;
		}else{
			const randIndY = Math.floor(Math.random() * directionY.length);
			const y = directionY[randIndY];
		ghost.velocityY=y;
		}

		//ghostChangeDirection(directionX, directionY);
		//console.log("ghost: "+(ghost.x) +", "+(ghost.y)+", rect: "+
			//rect.x+", "+rect.y);
			
		}
		//left
		if(ghost.velocityX==-2 && ghost.velocityY==0 &&
		ghost.y + ghost.velocityY  <= rect.y + rect.height &&
		ghost.y + ghost.height + ghost.velocityY  >= rect.y &&
		ghost.x + ghost.width + ghost.velocityX >= rect.x &&
		ghost.x + ghost.velocityX <= rect.x + rect.height)
		{
			if(!directionX.includes(2) && !directionX.includes(0) &&
				!directionY.includes(-2) && !directionY.includes(2)
				){
			directionX.push(2);
			directionX.push(0);
			directionY.push(-2);
			directionY.push(2);
			directionY.push(0);
		}

		const randIndX = Math.floor(Math.random() * directionX.length);
		//console.log("randInd: "+randIndX);
    	const x = directionX[randIndX];
    	//console.log("const x: "+x);
    	//console.log("prvo x: " +ghost.velocityX);
		ghost.velocityX=x;
		if(x==0){
			const randIndY = Math.floor(Math.random() * directionY.length);
			const y = directionY[randIndY];
		ghost.velocityY = y;
		}else{
			
			ghost.velocityY = 0;
		}

		console.log("left: " +ghost.velocityX+", "+ghost.velocityY);
		//ghostChangeDirection(directionX, directionY);

		/*const randIndX = Math.floor(Math.random() * directionX.length);
   		const randIndY = Math.floor(Math.random() * directionY.length);
   		// get random item
    	const x = directionX[randIndX];
    	const y = directionY[randIndY];
    	ghost.velocityX=x;
    	ghost.velocityY=y;
    	console.log("ghost.x: "+ ghost.x);*/
		//console.log("left");
		//console.log(directionX.length);
		}
		//up
		if(ghost.velocityX==0 && ghost.velocityY==-2 &&
		ghost.y + ghost.velocityY  <= rect.y + rect.height &&
		ghost.y + ghost.height + ghost.velocityY >= rect.y &&
		ghost.x + ghost.width + ghost.velocityX >= rect.x &&
		ghost.x + ghost.velocityX <= rect.x + rect.height)
		{
			if(!directionX.includes(2) && !directionX.includes(-2) &&
				!directionY.includes(0) && !directionY.includes(2)){
			directionX.push(2);
			directionX.push(-2);
			directionY.push(0);
			directionY.push(2);
			}

			const randIndX = Math.floor(Math.random() * directionX.length);
    	const x = directionX[randIndX];
		ghost.velocityX=x;
		if(x!==0){
			ghost.velocityY=0;
		}else{
			const randIndY = Math.floor(Math.random() * directionY.length);
			const y = directionY[randIndY];
		ghost.velocityY=y;
		}

			console.log("up");
			//ghostChangeDirection(directionX, directionY);
		}
		//down
		if(ghost.velocityX==0 && ghost.velocityY==2 &&
		ghost.y + ghost.velocityY  <= rect.y + rect.height &&
		ghost.y + ghost.height + ghost.velocityY  >= rect.y &&
		ghost.x + ghost.width + ghost.velocityX >= rect.x &&
		ghost.x + ghost.velocityX <= rect.x + rect.height)
		{
			if(!directionX.includes(2) && !directionX.includes(-2) &&
				!directionY.includes(-2) && !directionY.includes(0)){
			directionX.push(2);
			directionX.push(-2);
			directionY.push(0);
			directionY.push(-2);
		}

		const randIndX = Math.floor(Math.random() * directionX.length);
    	const x = directionX[randIndX];
		ghost.velocityX=x;
		if(x!==0){
			ghost.velocityY=0;
		}else{
			const randIndY = Math.floor(Math.random() * directionY.length);
			const y = directionY[randIndY];
		ghost.velocityY=y;
		}

		console.log("down");
		//ghostChangeDirection(directionX, directionY);
		}
		//uradi opciju za ako su koordinate uradjene za dijagonalu
		//ili napraci da radi random za opciju kad je x 0, i y 0
		/*if(ghost.velocityX==2 && ghost.velocityY==2 ||
		 ghost.velocityX==-2 && ghost.velocityY==2 ||
		 ghost.velocityX==-2 && ghost.velocityY==-2 ||
		 ghost.velocityX==2 && ghost.velocityY==-2 )
		{}*/


		//zatvorene komande u drugom forEachu
	}
	//zatvoren drugi forEach
	);
	/*	if(collisions.length > ghost.prevCollisions.length){
		ghost.prevCollisions = collisions;
	}
	//ovo menja array u string
	if(JSON.stringify(collisions) !== JSON.stringify(ghost.prevCollisions)){
		//console.log("gogo");
		console.log("coll: "+collisions); //zasto je ovde coll prazan?
		console.log("prev coll:" +ghost.prevCollisions);
	}*/
			//console.log(collisions);
		//zatvoren prvi forEach
	});

	player.update();
	player.moveMouth();
	frameTimer++;
}


//--PATHWAYS LOGIKA--
if(collisions.length > ghost.prevCollisions.length){
		ghost.prevCollisions = collisions;
		//console.log("length uslov: "+ collisions);
	}
	//ovo menja array u string
	//console.log("posle length uslov: "+ collisions);
	if(JSON.stringify(collisions) !== JSON.stringify(ghost.prevCollisions)){
		//console.log("gogo");
		//console.log("unutra uslov: "+ collisions); //zasto je ovde coll prazan?
		//console.log("prev coll:" +ghost.prevCollisions);
		if(ghost.velocity.x < 0)
		 ghost.prevCollisions.push("left");
		else if(ghost.velocity.x > 0)
			ghost.prevCollisions.push("right");
		else if(ghost.velocity.y < 0)
			ghost.prevCollisions.push("up");
		else if(ghost.velocity.y > 0)
			ghost.prevCollisions.push("down");

		//ovo => mora da bude u ravni, a ne da se preb u sl red, inace ga ne prepoznaje
		const pathways = ghost.prevCollisions.filter((collision) => {
				return !collisions.includes(collision);
			})
		console.log({pathways});
		const direction = pathways[Math.floor(Math.random() * pathways.length)];
		console.log({direction});

		switch(direction){
			case "down":
				ghost.velocity.x = 0;
				ghost.velocity.y = 2;
				break;
			case "up":
				ghost.velocity.x = 0;
				ghost.velocity.y = -2;
				break;
			case "right":
			ghost.velocity.x = 2;
				ghost.velocity.y = 0;
				break;
			case "left":
			ghost.velocity.x = -2;
				ghost.velocity.y = 0;
				break;
		}
		ghost.prevCollisions = [];
	}

//---GHOST RANDOM moja logika---

const openPathways = [];
			for (var i = 0; i<pathways.length; i++){
				//nov=pathways[i];
				if(!collisions.includes(pathways[i])){
					openPathways.push(pathways[i]);
				}
			}
			//kada je open arrays nista on prodje kroz granicu jer samo nastavi
			//console.log(collisions);
			//console.log({openPathways});
		const direction = openPathways[Math.floor(Math.random() * openPathways.length)];
			//console.log(direction);
		if(direction == undefined ){
			if(ghost.velocity.x==2) { console.log("prvi"); ghost.velocity.x=-2; return;}
			if(ghost.velocity.x==-2) { console.log("drugi"); ghost.velocity.x=2; return;}
			if(ghost.velocity.y==2) { console.log("treci"); ghost.velocity.y=-2; return;}
			if(ghost.velocity.y==-2) { console.log("cetvrti"); ghost.velocity.y=2; return;}
			console.log("vel x: "+ghost.velocity.x);
			console.log("vel y: "+ghost.velocity.y);
		}else if(frameTimer%120==0){
		switch(direction){
			case "down":
				ghost.velocity.x = 0;
				ghost.velocity.y = 2;
				break;
			case "up":
				ghost.velocity.x = 0;
				ghost.velocity.y = -2;
				break;
			case "right":
			ghost.velocity.x = 2;
				ghost.velocity.y = 0;
				break;
			case "left":
			ghost.velocity.x = -2;
				ghost.velocity.y = 0;
				break;
		}
	}

//--IST0--
const openPathways = [];
			for (var i = 0; i<pathways.length; i++){
				//nov=pathways[i];
				if(!collisions.includes(pathways[i])){
					openPathways.push(pathways[i]);
				}
			}
			//kada je open arrays nista on prodje kroz granicu jer samo nastavi
			//console.log(collisions);
			//console.log({openPathways});
		const direction = openPathways[Math.floor(Math.random() * openPathways.length)];
		var timeOfChange;
			//console.log(direction);
		if(direction == undefined ){
		timeOfChange = frameTimer;
			if(ghost.velocity.x==2) { console.log("prvi"); ghost.velocity.x=-2;
			//ovo dole kao uslov uvek, a zato staviti switch za vel x i break
				const direction = openPathways[Math.floor(Math.random() * openPathways.length)];
				//console.log(direction);
				//changeDirection(direction);
			 return;}
			if(ghost.velocity.x==-2) { console.log("drugi"); ghost.velocity.x=2;
			const direction = openPathways[Math.floor(Math.random() * openPathways.length)];
				//console.log(direction);
				//changeDirection(direction);
			 return;}
			if(ghost.velocity.y==2) { console.log("treci"); ghost.velocity.y=-2;
			const direction = openPathways[Math.floor(Math.random() * openPathways.length)];
				//console.log(direction);
				//changeDirection(direction);
			 return;}
			if(ghost.velocity.y==-2) { console.log("cetvrti"); ghost.velocity.y=2;
			const direction = openPathways[Math.floor(Math.random() * openPathways.length)];
				//console.log(direction);
				//changeDirection(direction);
			 return;}
			//console.log("vel x: "+ghost.velocity.x);
			//console.log("vel y: "+ghost.velocity.y);
		}
		if((timeOfChange+1)==frameTimer){
	const direction = openPathways[Math.floor(Math.random() * openPathways.length)];
				console.log(direction);
				changeDirection(direction);
	}
		/*if(frameTimer%160==0 && direction == undefined ){
			if(ghost.velocity.x==2) { console.log("prvi"); ghost.velocity.x=-2; return;}
			if(ghost.velocity.x==-2) { console.log("drugi"); ghost.velocity.x=2; return;}
			if(ghost.velocity.y==2) { console.log("treci"); ghost.velocity.y=-2; return;}
			if(ghost.velocity.y==-2) { console.log("cetvrti"); ghost.velocity.y=2; return;}

		}else if(frameTimer%120==0){
		switch(direction){
			case "down":
				ghost.velocity.x = 0;
				ghost.velocity.y = 2;
				break;
			case "up":
				ghost.velocity.x = 0;
				ghost.velocity.y = -2;
				break;
			case "right":
			ghost.velocity.x = 2;
				ghost.velocity.y = 0;
				break;
			case "left":
			ghost.velocity.x = -2;
				ghost.velocity.y = 0;
				break;
		}
	}*/

//--COLLISION DEO--

//circle njegovo krajnje
ghost.position.y - ghost.radius +ghost.velocity.y<= rect.y + rect.height + padding &&
		ghost.position.y + ghost.radius +ghost.velocity.y >= rect.y - padding &&
		ghost.position.x + ghost.radius +ghost.velocity.x>= rect.x - padding &&
		ghost.position.x -ghost.radius +ghost.velocity.x<= rect.x + rect.height + padding



