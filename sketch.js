//barrinha do player (raquete)
var Raquete;
//barrinha do pc (raquete)
var raquete_pc;
//bolinha
var bola;
//estradinha (rede)
var rede;

//configurações
function setup()
{
//criar a tela
createCanvas(500,500);

//sprites das raquetes x,y,largura,altura
raquete = createSprite(10,250,10,80);
raquete.shapeColor = "black";

raquete_pc = createSprite(490,250,10,80);
raquete_pc.shapeColor = 'black';

bola = createSprite(250,250,20,20);
bola.shapeColor = 'black';
bola.velocityX = 8;
bola.velocityY = 8;


//paredes
parede_cima = createSprite(250,0,500,5);
parede_cima.shapeColor = "black";
parede_baixo = createSprite(250,500,500,5);
parede_baixo.shapeColor = "black";
}

//acontecer dentro da tela
function draw()
{

  //fundo da tela :)
 background('gray');
  
  //controle
  raquete.y = World.mouseY;
  


  

  //collide- impede algo de passar
  //bounce - batida

  //bolinha quicar e voltar
  bola.bounceOff(parede_baixo);
  bola.bounceOff(parede_cima);

//aparecer todos os sprites na tela
drawSprites();

}
