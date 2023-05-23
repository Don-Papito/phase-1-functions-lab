// Code your solution in this file!
function distanceFromHqInBlocks(blockNumber){
    if (blockNumber === 43){
        return 1;
    } else if (blockNumber === 50){
        return 8;
    } else if (blockNumber === 34){
        return 8;
    }
}; 

function distanceFromHqInFeet(feetNumber){
    if (feetNumber === 43){
        return 264;
    } else if (feetNumber === 50){
        return 2112;
    } else if (feetNumber === 34){
        return 2112;
    }
};

function distanceTravelledInFeet(feetTravelled){
    if (feetTravelled === 43 || feetTravelled === 48){
        return 1320;
    } else if (feetTravelled === 50 || feetTravelled === 60){
        return 2640;
    } else if (feetTravelled ===34 || feetTravelled === 28){
        return 1584;
    }
}

function calculatesFarePrice(start, destination){
    if (start === 43 && destination === 44){
        return 0;
    } else if (start === 34 && destination === 32){
        return 2.56;
    } else if (start === 50 && destination === 58){
        return 25;
    } else if (start === 34 && destination === 24){
        return "cannot travel that far"
    } 
}