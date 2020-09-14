function isTouching(plant, leaf){
    if (plant.x - leaf.x < leaf.width/2 + plant.width/2
       && leaf.x - plant.x < leaf.width/2 + plant.width/2
       && plant.y - leaf.y < leaf.height/2 + plant.height/2
       && leaf.y - plant.y < leaf.height/2 + plant.height/2) {
         //yes, they are touching
         return true;
   }
   else {
         //No, they aren't
         return false;
   }
 }
 
 
 function bounceOff(plant, leaf) {
   if(plant.x - leaf.x <= leaf.width/2 + plant.width/2
   && leaf.x - plant.x <= leaf.width/2 + plant.width/2) {
     plant.velocityX = plant.velocityX * (-1);
     leaf.velocityX =  leaf.velocityX * (-1);
   }
   if(plant.y - leaf.y <= leaf.height/2 + plant.height/2
     && leaf.y - plant.y <= leaf.height/2 + plant.height/2) {
      plant.velocityY = plant.velocityY * (-1);
      leaf.velocityY = leaf.velocityY * (-1);
   }
   
 }