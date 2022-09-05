
var button1 = document.getElementById('StartPlayer1');
var hold1 = document.getElementById('hold1');
var button2 = document.getElementById('StartPlayer2');
var hold2 = document.getElementById('hold2');
var StartNewGame = document.getElementById('new game');
var count1 = 0 ;
var total1 = 0 ;
var count2 = 0 ;
var total2 = 0 ;
const total_point = 100;


StartNewGame.addEventListener('click', function() {

count1 = 0 ;
total1 = 0 ;
count2 = 0 ;
total2 = 0 ;
button1.disabled = false;
hold1.disabled = false;
button2.disabled = true;
hold2.disabled = true;
document.getElementById('count1').innerHTML = 0 ;
document.getElementById('total1').innerHTML = 0 ;
document.getElementById('Player1').innerHTML = "Joueur 1";
document.getElementById('count2').innerHTML = 0 ;
document.getElementById('total2').innerHTML = 0 ;
document.getElementById('Player2').innerHTML = "Joueur 2";
})




button1.addEventListener('click', function() {

    var resultat = Math.floor(Math.random() *(7-1)+1);
    document.getElementById('dé').innerHTML = resultat;

        if (resultat > 1) {
            count1 += resultat;
            document.getElementById('count1').innerHTML = count1;
    
        } else {
            count1 = 0;
            document.getElementById('count1').innerHTML = count1;
            button1.disabled = true;
            hold1.disabled = true;
            button2.disabled = false;
            hold2.disabled = false;
        }
    });


hold1.addEventListener('click', function() {
    total1 += count1;
    document.getElementById('total1').innerHTML = total1;
    count1 = 0;
    document.getElementById('count1').innerHTML = count1;
    if (total1 >= total_point){
        document.getElementById('Player1').innerHTML = "Winner" ;
        button1.disabled = true;
        hold1.disabled = true;
        button2.disabled = true;
        hold2.disabled = true;

    } else{ 
        button1.disabled = true;
        hold1.disabled = true;
        button2.disabled = false;
        hold2.disabled = false;
    }      
});


button2.addEventListener('click', function() {

    var resultat = Math.floor(Math.random() *(7-1)+1);
    document.getElementById('dé').innerHTML = resultat;

        if (resultat > 1) {
            count2 += resultat;
            document.getElementById('count2').innerHTML = count2;
    
        } else {
            count2 = 0;
            document.getElementById('count2').innerHTML = count2;
            button2.disabled = true;
            hold2.disabled = true;
            button1.disabled = false;
            hold1.disabled = false;
        }
    });



hold2.addEventListener('click', function() {
    total2 += count2;
    document.getElementById('total2').innerHTML = total2;
    count2 = 0;
    document.getElementById('count2').innerHTML = count2;
    if (total2 >= total_point){
        document.getElementById('Player2').innerHTML = "Winner";
        button1.disabled = true;
        hold1.disabled = true;
        button2.disabled = true;
        hold2.disabled = true;

    } else{ 
        button2.disabled = true;
        hold2.disabled = true;
        button1.disabled = false;
        hold1.disabled = false;
    }      
});

  

    
    
