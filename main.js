var names =["Avadhoot Berde", "Arya Berde","Manthan Berde","Nidhish Berde"];
var images =["https://image.shutterstock.com/image-vector/happy-young-father-holding-his-600w-731506243.jpg","https://st2.depositphotos.com/1967477/8228/v/950/depositphotos_82289046-stock-illustration-cartoon-happy-family-mother-holding.jpg","https://w7.pngwing.com/pngs/665/604/png-transparent-baby-boss-boy-character-illustration-the-boss-baby-brother-dreamworks-animation-film-the-boss-baby-child-toddler-boy.png","https://miro.medium.com/max/842/1*38QD8tbJ8z7Q4WyI9VC6QA.png"]
var i=0;
function change()
{

    document.getElementById("names").innerHTML= names[i];
    document.getElementById("img1").src = images[i];
 i++;
 console.log(i);
 var number = 5;
 if(i== number)
 {
     i=0;
 }
}