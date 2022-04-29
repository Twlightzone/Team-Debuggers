var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["e30202c4-5bdd-4b4b-a50f-11e3c5b02c06"],"propsByKey":{"e30202c4-5bdd-4b4b-a50f-11e3c5b02c06":{"name":"Player.png","sourceUrl":null,"frameSize":{"x":512,"y":512},"frameCount":3,"looping":true,"frameDelay":12,"version":"D3r9G4V6jD5gDm.HB.Vs6A2tEe7d6_Oa","loadedFromSource":true,"saved":true,"sourceSize":{"x":1024,"y":1024},"rootRelativePath":"assets/e30202c4-5bdd-4b4b-a50f-11e3c5b02c06.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var player = createSprite(200,380,50,50);
var ground = createSprite(200,400,50000,20);

function draw() {
  background(28, 179, 231);

movenment();
loadChunks();
loadTrees();


drawSprites();
}

function movenment(){
    if (keyDown("RIGHT_ARROW")) {
    player.setVelocity(+3,0);
  } 
    if (keyDown("LEFT_ARROW")) {
    player.setVelocity(-3,0);
  } 
  if (player.isTouching(ground)){
    player.bounceOff(ground);
  }
  if (keyDown("UP_ARROW" && player.position<=350)) {
    player.velocityY-=3;
  }
}

function loadTrees(){
  if (keyDown("DOWN_ARROW")){
        
  }
}

function loadChunks(){
  if (World.frameRate%60===true){
    
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
