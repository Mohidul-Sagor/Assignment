// https://github.com/Mohidul-Sagor/Assignment 


// Kilometer To Meter

function kilometerToMeter(kiloMeter) {
    if (kiloMeter < 0) {
        return "The input is invalid";
    } 
    else {
        var meter = kiloMeter * 1000;
        return meter;
    }
}

var count = kilometerToMeter(127);
console.log(count);


// Calculating Budget

function budgetCalculator(Watch,Phone,Laptop) {
    if (Watch < 1 || Phone < 1 || Laptop < 1) {
        return " The Input is Invalid"
    }
    else {
        var totalWatchPrice = Watch*50;
        var totalPhonePrice = Phone*100;
        var totalLaptopPrice = Laptop*500;
        var totalPrice = totalWatchPrice + totalPhonePrice + totalLaptopPrice;
        return totalPrice;
    }
}

var totalBudget = budgetCalculator(5,3,1);
console.log(totalBudget);

// Finding Hotel Cost

function hotelCost(dayStayed) {
    if (dayStayed < 1) {
        return "The input is invalid"
    }
     else {
        if (dayStayed <= 10) {
            var totalCost = dayStayed * 100;
        }
        else if( dayStayed > 10 && dayStayed <= 20){
            var firstTenDaysCost = 10*100;
            var dayRemain = dayStayed - 10;
            var remainderDaysCost = dayRemain * 80;
            var totalCost = firstTenDaysCost + remainderDaysCost;
        }
        else {
            var firstTenDaysCost = 10*100;
            var secondTenDaysCost = 10*80;
            var dayRemain = dayStayed - 20;
            var remainderDaysCost = dayRemain * 50;
            totalCost = firstTenDaysCost + secondTenDaysCost + remainderDaysCost;
        }
    
        return totalCost;
    }
}

var totalHotelCost = hotelCost(25);
console.log(totalHotelCost);


// Finding the lagest name from a Array 

function megaFriend(myFriends) {
    if (myFriends == []) {
        return "The Array Is Empty"
    }
    else {
        var largeName = myFriends[0];
        for (let i = 0; i < myFriends.length; i++) {
        
            var friendName = myFriends[i];
            if (friendName.length > largeName.length) {
                largeName = myFriends[i];
            }
        }
    
        return largeName;  
    }
}

var friends = ["Abir","Chamak","Abdullah","Sagor"];
var largeFriendName = megaFriend(friends);
console.log(largeFriendName);