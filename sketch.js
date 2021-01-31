const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var base1,base2,base3
var box1,box2,box3,box5,box6,box7
var box8,box9,box10,box11,box12
var box13,box14,box15
var box16

var Box1,Box2,Box3,Box4,Box5,Box6,Box7
var Box8,Box9,Box10,Box11,Box12
var Box13,Box14,Box15
var Box16

var polygon,polygonImg

var rubber

function preload(){
    polygonImg = loadImage("polygon.png")
}

function setup(){

    createCanvas(1500,600)
    engine = Engine.create();
    world = engine.world;

    

    base1 = new Ground(700,450,350,10)
    base2 = new Ground(1200,300,350,10)
    base3 = new Ground(width/2,570,1500,20)

    box1 = new block(700,415,40,50)
    box2 = new block(660,415,40,50)
    box3 = new block(620,415,40,50)
    box4 = new block(580,415,40,50)
    box5 = new block(740,415,40,50)
    box6 = new block(780,415,40,50)
    box7 = new block(820,415,40,50)

    box8 = new block(700,415-50,40,50)
    box9 = new block(660,415-50,40,50)
    box10 = new block(620,415-50,40,50)
    box11 = new block(740,415-50,40,50)
    box12 = new block(780,415-50,40,50)

    box13 = new block(700,415-50-50,40,50)
    box14 = new block(660,415-50-50,40,50)
    box15 = new block(740,415-50-50,40,50)

    box16 = new block(700,415-50-50-50,40,50)

    Box1 = new block(1200,265,40,50)
    Box2 = new block(1160,265,40,50)
    Box3 = new block(1120,265,40,50)
    Box4 = new block(1080,265,40,50)
    Box5 = new block(1240,265,40,50)
    Box6 = new block(1280,265,40,50)
    Box7 = new block(1320,265,40,50)

    Box8 = new block(1200,265-50,40,50)
    Box9 = new block(1160,265-50,40,50)
    Box10 = new block(1120,265-50,40,50)
    Box11 = new block(1240,265-50,40,50)
    Box12 = new block(1280,265-50,40,50)

    Box13 = new block(1200,265-50-50,40,50)
    Box14 = new block(1160,265-50-50,40,50)
    Box15 = new block(1240,265-50-50,40,50)

    Box16 = new block(1200,265-50-50-50,40,50)

    

    var options = {
        isStatic:false,
        density:10,
        restitution:0.5
    }
    polygon = Bodies.circle(200,370,30,options)
    
    World.add(world,polygon)

    rubber = new slingshot(this.polygon,{x:200,y:300})

}

function draw(){

    background("lightGrey")

    Engine.update(engine);

    push()
    textSize(30)
    fill("white")
    stroke("black")
    strokeWeight(3)
    text("Drag the Hexagon to lanch it.",500,50)
    pop()

    base1.display()
    base2.display()
    base3.display()
    fill(128,0,0)
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    fill(160,82,45)
    box8.display()
    box9.display()
    box10.display()
    box11.display()
    box12.display()  
    fill(210,105,30)
    box13.display()
    box14.display()
    box15.display()
    fill(218,165,32)   
    box16.display()

    fill(128,0,0)
    Box1.display()
    Box2.display()
    Box3.display()
    Box4.display()
    Box5.display()
    Box6.display()
    Box7.display()
    fill(160,82,45)
    Box8.display()
    Box9.display()
    Box10.display()
    Box11.display()
    Box12.display()
    fill(210,105,30)
    Box13.display()
    Box14.display()
    Box15.display()
    fill(218,165,32)
    Box16.display()


    rubber.display()
    var pos = polygon.position

    push()
    imageMode(CENTER)
    image(polygonImg,pos.x,pos.y,70,70)
    pop()

    
}

function mouseDragged(){
    Matter.Body.setPosition(this.polygon,{x:mouseX,y:mouseY})
}

function mouseReleased(){
    rubber.fly()
}

function keyPressed(){
    if(keyCode === 32){
        rubber.attach(polygon.body)
    }
}
