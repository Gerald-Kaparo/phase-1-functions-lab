// Code your solution in this file!
function distanceFromHqInBlocks (newDist) {
    if (newDist<42){
      return(42-newDist);
    }
    else {
  
    return(newDist-42);
  }
  }
  
  
  
  function distanceFromHqInFeet (newDist) {
    return distanceFromHqInBlocks(newDist)*264;
  }
  
  function distanceTravelledInFeet(numF,numL){
    if (numL>numF){
      return((numL-numF)*264);
    }
    else
      return((numF-numL)*264);
  }
  
  
  function calculatesFarePrice(pointSt,pointStp){
    let jarny = distanceTravelledInFeet(pointSt,pointStp);
    if (jarny<= 400){
      return 0;
    }
    if (jarny>=400 && jarny<=2000){
      return (jarny-400)* 0.02;
    }
    else if(jarny>=2000&& jarny<=2500){
      return 25;
    }
    else if (jarny > 2500){
      return "cannot travel that far";
    }
  }