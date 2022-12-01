/* 8 - za nulu*/
/*8 - - gornja horizontalna
canvas.width -(canvas.width/7), (canvas.height/5));
	context.lineTo((canvas.width/2) +(canvas.width/9), (canvas.height/5)) */
	context.beginPath();
	context.moveTo(canvas.width - 130, (canvas.height/2)-80);
	context.lineTo((canvas.width/2) + 300, (canvas.height/2)-80);
	context.stroke();
/*8 - | leva vertikalna*/
	context.beginPath();
	context.moveTo((canvas.width/2) + 100, (canvas.height/2)-80);
	context.lineTo((canvas.width/2) + 100, (canvas.height/2)+160);
	context.stroke();

/* za sredisnje, (canvas.height/2)-80);
	context.lineTo(canvas.width - 430, (canvas.height/2)+40);
*/

/*9 - | desna vertikalna*/
	context.beginPath();
	context.moveTo(canvas.width - 430, (canvas.height/2)-80);
	context.lineTo(canvas.width - 430, (canvas.height/2)+160);
	context.stroke();
/*9 - _ donja horizontalna*/
	context.beginPath();
	context.moveTo(canvas.width - 430, (canvas.height/2)+160);
	context.lineTo((canvas.width/2) + 100, (canvas.height/2)+160);
	context.stroke();
