// Vamos criar um espaço onde poderemos desenhar coisas!
var canvas = new fabric.Canvas('myCanvas'); 

// Agora, vamos dizer onde o jogador começa no jogo.
playerX = 10;
playerY = 10;

// E vamos definir o tamanho dos blocos que o jogador usará.
blockImageWidth = 30;
blockImageHeight = 30;

// Aqui, estamos criando dois "objetos" que vão guardar a imagem do jogador e dos blocos.
var playerObject= "";
var blockImageObject= "";

function playerUpdate() // Essa função vai preparar o jogador e colocá-lo na tela.
{
	fabric.Image.fromURL("player.png", function(Img) { // Vamos pegar a imagem do jogador chamada "player.png".
	playerObject = Img;

	playerObject.scaleToWidth(150); // Vamos ajustar o tamanho do jogador.
	playerObject.scaleToHeight(140);
	playerObject.set({ // E agora vamos colocar o jogador na posição inicial.
	top:playerY,
	left:playerX
	});
	canvas.add(playerObject); // E finalmente, vamos adicionar o jogador à tela!

	});
}

function newImage(getImage)
{
	fabric.Image.fromURL(getImage, function(Img) {
	blockImageObject = Img;

	blockImageObject.scaleToWidth(blockImageWidth);
	blockImageObject.scaleToHeight(blockImageHeight);
	blockImageObject.set({
	top:playerY,
	left:playerX
	});
	canvas.add(blockImageObject);

	});

}

window.addEventListener("keydown", myKeyDown);

function myKeyDown(e)
{
keyPressed = e.keyCode;
if(e.shiftKey == true && keyPressed == '80')
{
	blockImageWidth = blockImageWidth + 10;
	blockImageHeight = blockImageHeight + 10;
	document.getElementById("currentWidth").innerHTML = blockImageWidth;
	document.getElementById("currentHeight").innerHTML = blockImageHeight;	
}
if(e.shiftKey && keyPressed == '77')
{
	blockImageWidth = blockImageWidth - 10;
	blockImageHeight = blockImageHeight - 10;
	document.getElementById("currentWidth").innerHTML = blockImageWidth;
	document.getElementById("currentHeight").innerHTML = blockImageHeight;
}

	if(keyPressed == '38')
	{
		up();
	}
	if(keyPressed == '40')
	{
		down();
	}
	if(keyPressed == '37')
	{
		left();
	}
	if(keyPressed == '39')
	{
		right();
	}
	if(keyPressed == '87')
	{
		newImage('wall.jpg'); 
	}
	if(keyPressed == '71')
	{
		newImage('ground.png'); 
	}
	if(keyPressed == '76')
	{
		newImage('light_green.png'); 
	}
	if(keyPressed == '84')
	{
		newImage('trunk.jpg'); 
	}
	if(keyPressed == '82')
	{
		newImage('roof.jpg'); 
	}
	if(keyPressed == '89')
	{
		newImage('yellow_wall.png'); 
	}
	if(keyPressed == '68')
	{
		newImage('dark_green.png'); 
	}
	if(keyPressed == '85')
	{
		newImage('unique.png'); 
	}
	if(keyPressed == '67')
	{
		newImage('cloud.jpg'); 
	}
	
}
function up()
{
	if(playerY >=0)
	{
		playerY = playerY - blockImageHeight;
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function down()
{
	if(playerY <=500)
	{
		playerY = playerY + blockImageHeight;
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function left()
{
	if(playerX >0)
	{
		playerX = playerX - blockImageWidth;
		canvas.remove(playerObject);
		playerUpdate();
	}
}

function right()
{
	if(playerX <=850)
	{
		playerX = playerX + blockImageWidth;
		canvas.remove(playerObject);
		playerUpdate();
	}
}
