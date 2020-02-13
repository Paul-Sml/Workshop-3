var config = {
	type: Phaser.AUTO,
	width: 1920,
	height: 1080,
physics: {
        default: 'arcade',
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    },
scene: {
		init: init,
		preload: preload,
		create: create,
		update: update
	}
};

var game = new Phaser.Game(config);
var direction=0;
var timer=0;
var timerreset=1;
var timerreset2=1;
var timer2=0;
var direction2=0;
var timer3=0;
var direction3=0;
var timerreset3=1;
var pointdevie=2;
var jeanjean=50;
var score=0;
var timer4=0;
var direction4=0;
var timerreset4=1;
function init(){
 	var platforms;
	var player;
	var cursors; 
	var endurance;
	var sauvefin;
	var direction;
	var timer;
	var endurance;
	var timerreset;
	var timer2;
	var timerreset2;
	var direction2;
	var timer3;
	var timerreset3;
	var direction3;
	var timer4;
	var timerreset4;
	var direction4;
	var pointdevie;
	var invincibilite;
	var jeanjean;
	var scoreTexte;
	var star;
	var score;
}

function preload(){
	this.load.image('background','image2/fond.png');	
	this.load.image('fond','image2/fond.png');
	this.load.image('sol','image2/platform.png');
	this.load.image('solmoyen','image2/platformmoyenne.png');
	this.load.image('solpetit','image2/platformpetite.png');
	this.load.image('solhaut','image2/platformlonguehauteur.png');
	this.load.image('perso','image2/meufvududessus.png',{frameWidth: 32, frameHeight: 32});
	this.load.image('garde','image2/flicvududessus.png',{frameWidth: 40, frameHeight: 36});
	this.load.image('etoile','image2/etoile.png');
}



function create(){
	
	this.add.image(960,540,'background');
	platforms = this.physics.add.staticGroup();
	
	platforms.create(100,480,'sol');
	
	platforms.create(300,480,'solhaut');
	platforms.create(300,380,'solhaut');
	platforms.create(300,260,'solhaut');
	platforms.create(300,160,'solhaut');
	
platforms.create(150,380,'solmoyen')

platforms.create(151,180,'solmoyen')

platforms.create(114,80,'solhaut')

platforms.create(410,80,'solhaut')

platforms.create(410,180,'solhaut')

platforms.create(410,280,'solhaut')

platforms.create(410,480,'solhaut')

platforms.create(530,145,'solhaut')
platforms.create(530,225,'solhaut')
platforms.create(530,325,'solhaut')
platforms.create(530,425,'solhaut')

platforms.create(620,90,'sol');
	platforms.create(620,480,'sol');
	
	
	platforms.create(830,140,'solhaut')
platforms.create(830,225,'solhaut')
platforms.create(830,325,'solhaut')
platforms.create(830,435,'solhaut')
platforms.create(830,525,'solhaut')

platforms.create(630,45,'solpetit')

platforms.create(789,840,'solpetit')
	
	platforms.create(737,380,'sol')

platforms.create(737,190,'sol')

platforms.create(690,286,'solmoyen')
	
	platforms.create(290,580,'sol');
	platforms.create(100,580,'sol');
	platforms.create(490,580,'sol');
	platforms.create(690,580,'sol');
	platforms.create(790,580,'sol');
	
	platforms.create(937,530,'solhaut');
	platforms.create(937,430,'solhaut');
	platforms.create(937,330,'solhaut');
	platforms.create(937,230,'solhaut');
	platforms.create(937,140,'solhaut');
	
	platforms.create(1045,530,'solhaut');
	platforms.create(1045,430,'solhaut');
	platforms.create(1045,330,'solhaut');
	platforms.create(1045,230,'solhaut');
	platforms.create(1045,140,'solhaut');
	
		platforms.create(1160,530,'solhaut');
	platforms.create(1160,430,'solhaut');
	platforms.create(1160,330,'solhaut');
	platforms.create(1160,230,'solhaut');
	platforms.create(1160,140,'solhaut');
	
		platforms.create(1700,101,'sol');
			platforms.create(1600,101,'sol');
	
	platforms.create(100,790,'sol');
	platforms.create(200,790,'sol');
	platforms.create(600,790,'sol');
	platforms.create(800,790,'sol');
	platforms.create(1000,790,'sol');
	platforms.create(1200,790,'sol');
	platforms.create(1400,790,'sol');
	platforms.create(1600,790,'sol');
	platforms.create(1700,790,'sol');
	
	platforms.create(100,890,'sol');
	platforms.create(300,890,'sol');
	platforms.create(500,890,'sol');
	platforms.create(700,890,'sol');
	platforms.create(1000,890,'sol');
	platforms.create(1200,890,'sol');
	platforms.create(1400,890,'sol');
	platforms.create(1600,890,'sol');
		platforms.create(1800,890,'sol');
			platforms.create(1900,890,'sol');
	
	platforms.create(100,0,'sol');
	platforms.create(300,0,'sol');
	platforms.create(500,0,'sol');
	platforms.create(700,0,'sol');
	platforms.create(900,0,'sol');
	platforms.create(1000,0,'sol');
	platforms.create(1200,0,'sol');
	platforms.create(1400,0,'sol');
	platforms.create(1600,0,'sol');
	platforms.create(1800,0,'sol');
	platforms.create(1900,0,'sol');
	
	platforms.create(1400,640,'solhaut');
	 platforms.create(1400,590,'solhaut');
	 	platforms.create(1400,490,'solhaut');
			platforms.create(1400,390,'solhaut');
				platforms.create(1400,290,'solhaut');
					platforms.create(1400,190,'solhaut');
						platforms.create(1400,90,'solhaut');
						platforms.create(1400,10,'solhaut');
						
						platforms.create(1920,640,'solhaut');
						platforms.create(1920,540,'solhaut');
						platforms.create(1920,440,'solhaut');
						platforms.create(1920,340,'solhaut');
						platforms.create(1920,240,'solhaut');
						platforms.create(1920,140,'solhaut');
						platforms.create(1920,40,'solhaut');
						platforms.create(1920,740,'solhaut');
						platforms.create(1920,840,'solhaut');
						
			
			platforms.create(1280,630,'solhaut');
			platforms.create(1280,590,'solhaut');
			platforms.create(1280,490,'solhaut');
			platforms.create(1280,390,'solhaut');
			platforms.create(1280,290,'solhaut');
			platforms.create(1280,190,'solhaut');
			platforms.create(1280,140,'solhaut');
			
				platforms.create(1640,630,'solhaut');
					platforms.create(1640,600,'solhaut');
					platforms.create(1640,500,'solhaut');
					platforms.create(1640,410,'solhaut');
					platforms.create(1640,300,'solhaut');
		
			
			platforms.create(200,690,'sol');
	platforms.create(300,690,'sol');
	platforms.create(500,690,'sol');
	platforms.create(700,690,'sol');
	platforms.create(900,690,'sol');
	platforms.create(1000,690,'sol');
	platforms.create(1191,690,'sol');

	
	
platforms.create(0,830,'solhaut');
platforms.create(0,730,'solhaut');
platforms.create(0,630,'solhaut');
			platforms.create(0,590,'solhaut');
			platforms.create(0,490,'solhaut');
			platforms.create(0,390,'solhaut');
			platforms.create(0,290,'solhaut');
			platforms.create(0,190,'solhaut');
			platforms.create(0,140,'solhaut');
			platforms.create(0,0,'solhaut');
			
			platforms.create(400,790,'solhaut');
			
			platforms.create(1520,510,'solhaut');
			
			platforms.create(1520,610,'solhaut');
				platforms.create(1520,742,'solhaut');
				
				
					platforms.create(1800,610,'solhaut');
				platforms.create(1800,742,'solhaut');
					platforms.create(1800,510,'solhaut');
				platforms.create(1800,442,'solhaut');
					platforms.create(1800,310,'solhaut');
				platforms.create(1800,242,'solhaut');
					platforms.create(1800,150,'solhaut');

				
				platforms.create(1494,360,'sol');
		
			
			
	platforms.create(99,280,'sol');
	player = this.physics.add.sprite(50,530,'perso');
	player.setCollideWorldBounds(true);
	player.body.setGravityY(000);
	this.physics.add.collider(player,platforms);
	
		stars = this.physics.add.group({
		key : 'etoile',
		setXY: {x:500,y:630,},
	
		});
	this.physics.add.collider(stars,platforms);
	this.physics.add.overlap(player,stars,collectStar,null,this);
	
		stars = this.physics.add.group({
		key : 'etoile',
		setXY: {x:100,y:840},
	
		});
	this.physics.add.collider(stars,platforms);
	this.physics.add.overlap(player,stars,collectStar,null,this);
	
		stars = this.physics.add.group({
		key : 'etoile',
		setXY: {x:470,y:40},
	
		});
	this.physics.add.collider(stars,platforms);
	this.physics.add.overlap(player,stars,collectStar,null,this);
	
			stars = this.physics.add.group({
		key : 'etoile',
		setXY: {x:1500,y:310},
	
		});
	this.physics.add.collider(stars,platforms);
	this.physics.add.overlap(player,stars,collectStar,null,this);
	
		
	
		stars = this.physics.add.group({
		key : 'etoile',
		setXY: {x:500,y:740},
	
		});
		
		this.physics.add.collider(stars,platforms);
	this.physics.add.overlap(player,stars,collectStar,null,this);
	
	garde1 = this.physics.add.sprite(1330,729,'garde');
	garde1.setCollideWorldBounds(true);
	garde1.body.setGravityY(000);
	this.physics.add.collider(garde1,platforms);
	this.physics.add.collider(player,garde1, hitgarde, null, this);
	
	
	
	garde2 = this.physics.add.sprite(50,40,'garde');
	garde2.setCollideWorldBounds(true);
	garde2.body.setGravityY(000);
	this.physics.add.collider(garde2,platforms);
	this.physics.add.collider(player,garde2, hitgarde, null, this);
	
	garde3 = this.physics.add.sprite(1484,200,'garde');
	garde3.setCollideWorldBounds(true);
	garde3.body.setGravityY(000);
	this.physics.add.collider(garde3,platforms);
	this.physics.add.collider(player,garde3, hitgarde, null, this);
	
	garde4 = this.physics.add.sprite(1084,744,'garde');
	garde4.setCollideWorldBounds(true);
	garde4.body.setGravityY(000);
	this.physics.add.collider(garde4,platforms);
	this.physics.add.collider(player,garde4, hitgarde, null, this);
	
	
	cursors = this.input.keyboard.createCursorKeys(); 
	dasht= this.input.keyboard.addKey('W');
	
	
		endurance = this.add.text(20,1006,'Vie ', {fontSize: '62px', fill:'#FFF'});
		scoreText = this.add.text(20,950,'Cle a molette 0', {fontSize: '62px', fill:'#F00'});
}



function update(){
	if (cursors.left.isDown) {
	player.setVelocityX(-300);
	
	} 
	
	if (cursors.right.isDown) {
		player.setVelocityX(300);
		
	}
	
	if (cursors.up.isDown) {
	player.setVelocityY(-300);	
	

	} 
	if (cursors.down.isDown) {
		player.setVelocityY(300);
}
	if (cursors.left.isUp && cursors.right.isUp) { 
	player.setVelocityX(0);	
	}
	if (cursors.up.isUp && cursors.down.isUp) {
	player.setVelocityY(0);	

	}
	
	if (cursors.up.isUp && cursors.down.isUp && cursors.left.isUp && cursors.right.isUp) {

	}
	
	if (cursors.right.isDown) {
	 player.angle=90;
	}
	else if (cursors.left.isDown) {
	player.angle=270;
	}
	else if (cursors.up.isDown) {
	player.angle=360;	
	}
	else if (Math.abs(player.body.velocity.y) > 0) {
	player.angle=180;	
	}
	if (timer<1000) {
	timer=timer+1;	
	}
	
	if (direction==0) {
	garde1.setVelocityY(-100);
	garde1.angle=360;
	if (timerreset==1) {
	timer=350;
	timerreset=0;
	}
	if (timer==1000) {
	direction=1;
	timerreset=1;
	}
	}
	if (direction==1) {
	garde1.setVelocityX(-100);
	garde1.angle=270;
	if (timerreset==1) {
	timer=810;
	timerreset=0;
	}
	if (timer==1000) {
	direction=2;
	timerreset=1;
	}
	}
	
	if (direction==2) {
	garde1.setVelocityY(100);
	garde1.angle=180;
	if (timerreset==1) {
	timer=650;
	timerreset=0;
	}
	if (timer==1000) {
	direction=3;
	timerreset=1;
	}
	}
	
	if (direction==3) {
	garde1.setVelocityX(100);
	garde1.angle=90;
	if (timerreset==1) {
	timer=850;
	timerreset=0;
	}
	if (timer==1000) {
	direction=4;
	timerreset=1;
	}
	}
	
	if (direction==4) {
	garde1.setVelocityY(-100);
	garde1.angle=360;
	if (timerreset==1) {
	timer=680;
	timerreset=0;
	}
	if (timer==1000) {
	direction=5;
	timerreset=1;
	}
	}
	
		if (direction==5) {
	garde1.setVelocityX(-100);
	garde1.angle=270;
	if (timerreset==1) {
	timer=880;
	timerreset=0;
	}
	if (timer==1000) {
	direction=2;
	timerreset=1;
	}
	}
	
	//2ieme garde
	if (timer2<1000) {
	timer2=timer2+1;	
	}
	
	if (direction2==0) {
	garde2.setVelocityY(200);
	garde2.angle=180;
	if (timerreset2==1) {
	timer2=989;
	timerreset2=0;
	}
	if (timer2==1000) {
	direction2=1;
	timerreset2=1;
	}
	}
	if (direction2==1) {
	garde2.setVelocityX(100);
	garde2.angle=90;
	if (timerreset2==1) {
	timer2=798;
	timerreset2=0;
	}
	if (timer2==1000) {
	direction2=4;
	timerreset2=1;
	}
	}
	
	if (direction2==4) {
	garde2.setVelocityY(-200);
	garde2.angle=360;
	if (timerreset2==1) {
	timer2=899;
	timerreset2=0;
	}
	
	if (timer2==1000) {
	direction2=5;
	timerreset2=1;
	}
	}
	
	
	
	if (direction2==5) {
	garde2.setVelocityX(100);
	garde2.angle=90;
	if (timerreset2==1) {
	timer2=898;
	timerreset2=0;
	}
	if (timer2==1000) {
	direction2=6;
	timerreset2=1;
	}
	}
	
	if (direction2==6) {
	garde2.setVelocityY(200);
	garde2.angle=180;
	if (timerreset2==1) {
	timer2=799;
	timerreset2=0;
	}
	if (timer2==1000) {
	direction2=4;
	timerreset2=1;
	}
	}
	
	
//garde 3
if (timer3<900) {
	timer3=timer3+1;	
	}
	if (direction3==0) {
	garde3.setVelocityX(200);
	garde3.angle=90;
	if (timerreset3==1) {
	timer3=830;
	timerreset3=0;
	}
	if (timer3==900) {
	direction3=1;
	timerreset3=1;
	garde3.setVelocityX(0);
	}
	}
	if (direction3==1) {
	garde3.setVelocityY(200);
	garde3.angle=180;
	if (timerreset3==1) {
	timer3=729;
	timerreset3=0;
	}
	if (timer3==900) {
	direction3=2;
	timerreset3=1;
	garde3.setVelocityY(0);
	}
	}
	if (direction3==2) {
	garde3.setVelocityY(-200);
	garde3.angle=360;
	if (timerreset3==1) {
	timer3=729;
	timerreset3=0;
	}
	if (timer3==900) {
	direction3=3;
	timerreset3=1;
	garde3.setVelocityY(0);
	}
	}
	if (direction3==3) {
	garde3.setVelocityX(-200);
	garde3.angle=270;
	if (timerreset3==1) {
	timer3=830;
	
	
	timerreset3=0;
	}
	if (timer3==900) {
		garde3.setVelocityX(0);
	direction3=0;
	timerreset3=1;
	}
	}
	

//garde 4

if (timer4<900) {
	timer4=timer4+1;	
	}
	if (direction4==0) {
	garde4.setVelocityX(200);
	garde4.angle=90;
	if (timerreset4==1) {
	timer4=830;
	timerreset4=0;
	}
	if (timer4==900) {
	direction4=1;
	timerreset4=1;
	garde4.setVelocityX(0);
	}}
	if (direction4==1) {
	garde4.setVelocityX(-200);
	garde4.angle=270;
	if (timerreset4==1) {
	timer4=630;
	timerreset4=0;
	}
	if (timer4==900) {
	direction4=2;
	timerreset4=1;
	garde4.setVelocityX(0);}}
	
		if (direction4==2) {
	garde4.setVelocityY(90);
	garde4.angle=180;
	if (timerreset4==1) {
	timer4=830;
	timerreset4=0;
	}
	if (timer4==900) {
	direction4=3;
	timerreset4=1;
	garde4.setVelocityY(0);}}
	
		if (direction4==3) {
	garde4.setVelocityY(-90);
	garde4.angle=360;
	if (timerreset4==1) {
	timer4=830;
	timerreset4=0;
	}
	if (timer4==900) {
	direction4=4;
	timerreset4=1;
	garde4.setVelocityY(0);}}
	
		if (direction4==4) {
	garde4.setVelocityX(200);
	garde4.angle=90;
	if (timerreset4==1) {
	timer4=630;
	timerreset4=0;
	}
	if (timer4==900) {
	direction4=5;
	timerreset4=1;
	garde4.setVelocityX(0);}}
	
			if (direction4==5) {
	garde4.setVelocityX(-200);
	garde4.angle=270;
	if (timerreset4==1) {
	timer4=630;
	timerreset4=0;
	}
	if (timer4==900) {
	direction4=2;
	timerreset4=1;
	;}}
	

	if (jeanjean<50) {
	jeanjean=jeanjean+1;
	player.setTint(0xff0000);
	}
	if (jeanjean==50 && pointdevie>0) {
	player.clearTint();	
	}
	 if (player.y>900) {
    player.play('turn');
	gameOver=true;
	endurance.setText('Vous avez reussi à sortir de l usine');
	
}
endurance.setText('Vie '+pointdevie);
	
}


function hitgarde(player, garde1){
	pointdevie=pointdevie-1;
	
	if (pointdevie==1) {
		jeanjean=0;
	player.setY(530);
    player.setX(50);
	}
	if (pointdevie==0) {
	this.physics.pause();
	player.setTint(0xff0000);
	player.play('turn');
	gameOver=true;
	}
}

function hitgarde(player, garde2){
	pointdevie=pointdevie-1;
	
	if (pointdevie==1) {
	jeanjean=0;
	player.setY(530);
    player.setX(50);
	}
	
	if (pointdevie==0) {
	
	this.physics.pause();
	player.setTint(0xff0000);
	player.play('turn');
	gameOver=true;
	}
}

function hitgarde(player, garde3){
	pointdevie=pointdevie-1;
	
	if (pointdevie==1) {
	jeanjean=0;
	player.setY(530);
    player.setX(50);
	}
	
	if (pointdevie==0) {
	
	this.physics.pause();
	player.setTint(0xff0000);
	gameOver=true;
	}
}

function hitgarde(player, garde4){
	pointdevie=pointdevie-1;
	
	if (pointdevie==1) {
	jeanjean=0;
	player.setY(530);
    player.setX(50);
	}
	
	if (pointdevie==0) {
	
	this.physics.pause();
	player.setTint(0xff0000);
	gameOver=true;
	}
}



function collectStar(player, star){
	star.disableBody(true,true);
	score += 1;
scoreText.setText('Cle a molettes '+score);}