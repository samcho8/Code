var goodluck = "Good luck!";
var badluck = "Trust nobody.";
var intermediate = "Be wary of who you trust.";
var interest = "Try to get people to talk to you today!";
var num = Math.floor(Math.random() * 5);
switch (num)
{
    case 1:
        console.log(goodluck);
        break;
    case 2:
        console.log(intermediate);
        break;
    case 3:
        console.log(interest);
        break;
    case 4:
        console.log(badluck);
        break;
    
}