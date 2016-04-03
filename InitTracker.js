var main = function() {

var CurrentInitiativeHolder = 0;
var CurrentInitiativeValue = 0;
var RoundCounter = 1;
var InitiativeRolled = false;
var Score1=Score2=Score3=Score4=Score5=Score6=Score7=Score8=Score9=Score10 = 0;

var Combatant1Ready = true;
var Combatant2Ready = true;
var Combatant3Ready = true;
var Combatant4Ready = true;
var Combatant5Ready = true;
var Combatant6Ready = true;
var Combatant7Ready = true;
var Combatant8Ready = true;
var Combatant9Ready = true;
var Combatant10Ready = true;

var Combatant = Array(11);
for (var i = 0; i < Combatant.length; ++i) { Combatant[i] = 0; }

$('#ActivateButton1').click(function(){
    if (Combatant[1] === 0) {
        $(this).css('background-color','Green');
        $(this).text('&');
        $("#ConField1,#numField1").prop('disabled', false);
        $("#ConField1,#numField1").css('background-color','black');        
        Combatant[1] = 1;
    }else if(Combatant[1] === 1){
        $(this).css('background-color','#FFCC33');
        $(this).text('@');
        Combatant[1] = 2;
    }else if(Combatant[1] === 2){
        $(this).css('background-color','#660099');
        $(this).text('D');
        Combatant[1] = 3;
    }else if(Combatant[1] === 3){
        $(this).css('background-color','#C0C0C0');
        $(this).text('L');
        Combatant[1] = 4;
    }else if(Combatant[1] === 4){
        $(this).css('background-color','#B22222');
        $(this).text('*');
        $("#ConField1,#numField1").prop('disabled', true);
        $("#ConField1,#numField1").css('background-color','grey');
        Combatant[1] = 0;
    }
});

$('#ActivateButton2').click(function(){
    if (Combatant[2] === 0) {
        $(this).css('background-color','Green');
        $(this).text('&');
        $("#ConField2,#numField2").prop('disabled', false);
        $("#ConField2,#numField2").css('background-color','black');        
        Combatant[2] = 1;
    }else if(Combatant[2] === 1){
        $(this).css('background-color','#FFCC33');
        $(this).text('@');
        Combatant[2] = 2;
    }else if(Combatant[2] === 2){
        $(this).css('background-color','#660099');
        $(this).text('D');
        Combatant[2] = 3;
    }else if(Combatant[2] === 3){
        $(this).css('background-color','#C0C0C0');
        $(this).text('L');
        Combatant[2] = 4;
    }else if(Combatant[2] === 4){
        $(this).css('background-color','#B22222');
        $(this).text('*');
        $("#ConField2,#numField2").prop('disabled', true);
        $("#ConField2,#numField2").css('background-color','grey');
        Combatant[2] = 0;
    }
});

$('#ActivateButton3').click(function(){
    if (Combatant[3] === 0) {
        $(this).css('background-color','Green');
        $(this).text('&');
        $("#ConField3,#numField3").prop('disabled', false);
        $("#ConField3,#numField3").css('background-color','black');        
        Combatant[3] = 1;
    }else if(Combatant[3] === 1){
        $(this).css('background-color','#FFCC33');
        $(this).text('@');
        Combatant[3] = 2;
    }else if(Combatant[3] === 2){
        $(this).css('background-color','#660099');
        $(this).text('D');
        Combatant[3] = 3;
    }else if(Combatant[3] === 3){
        $(this).css('background-color','#C0C0C0');
        $(this).text('L');
        Combatant[3] = 4;
    }else if(Combatant[3] === 4){
        $(this).css('background-color','#B22222');
        $(this).text('*');
        $("#ConField3,#numField3").prop('disabled', true);
        $("#ConField3,#numField3").css('background-color','grey');
        Combatant[3] = 0;
    }
});

$('#ActivateButton4').click(function(){
    if (Combatant[4] === 0) {
        $(this).css('background-color','Green');
        $(this).text('&');
        $("#ConField4,#numField4").prop('disabled', false);
        $("#ConField4,#numField4").css('background-color','black');        
        Combatant[4] = 1;
    }else if(Combatant[4] === 1){
        $(this).css('background-color','#FFCC33');
        $(this).text('@');
        Combatant[4] = 2;
    }else if(Combatant[4] === 2){
        $(this).css('background-color','#660099');
        $(this).text('D');
        Combatant[4] = 3;
    }else if(Combatant[4] === 3){
        $(this).css('background-color','#C0C0C0');
        $(this).text('L');
        Combatant[4] = 4;
    }else if(Combatant[4] === 4){
        $(this).css('background-color','#B22222');
        $(this).text('*');
        $("#ConField4,#numField4").prop('disabled', true);
        $("#ConField4,#numField4").css('background-color','grey');
        Combatant[4] = 0;
    }
});

$('#ActivateButton5').click(function(){
    if (Combatant[5] === 0) {
        $(this).css('background-color','Green');
        $(this).text('&');
        $("#ConField5,#numField5").prop('disabled', false);
        $("#ConField5,#numField5").css('background-color','black');        
        Combatant[5] = 1;
    }else if(Combatant[5] === 1){
        $(this).css('background-color','#FFCC33');
        $(this).text('@');
        Combatant[5] = 2;
    }else if(Combatant[5] === 2){
        $(this).css('background-color','#660099');
        $(this).text('D');
        Combatant[5] = 3;
    }else if(Combatant[5] === 3){
        $(this).css('background-color','#C0C0C0');
        $(this).text('L');
        Combatant[5] = 4;
    }else if(Combatant[5] === 4){
        $(this).css('background-color','#B22222');
        $(this).text('*');
        $("#ConField5,#numField5").prop('disabled', true);
        $("#ConField5,#numField5").css('background-color','grey');
        Combatant[5] = 0;
    }
});

$('#ActivateButton6').click(function(){
    if (Combatant[6] === 0) {
        $(this).css('background-color','Green');
        $(this).text('&');
        $("#ConField6,#numField6").prop('disabled', false);
        $("#ConField6,#numField6").css('background-color','black');        
        Combatant[6] = 1;
    }else if(Combatant[6] === 1){
        $(this).css('background-color','#FFCC33');
        $(this).text('@');
        Combatant[6] = 2;
    }else if(Combatant[6] === 2){
        $(this).css('background-color','#660099');
        $(this).text('D');
        Combatant[6] = 3;
    }else if(Combatant[6] === 3){
        $(this).css('background-color','#C0C0C0');
        $(this).text('L');
        Combatant[6] = 4;
    }else if(Combatant[6] === 4){
        $(this).css('background-color','#B22222');
        $(this).text('*');
        $("#ConField6,#numField6").prop('disabled', true);
        $("#ConField6,#numField6").css('background-color','grey');
        Combatant[6] = 0;
    }
});

$('#ActivateButton7').click(function(){
    if (Combatant[7] === 0) {
        $(this).css('background-color','Green');
        $(this).text('&');
        $("#ConField7,#numField7").prop('disabled', false);
        $("#ConField7,#numField7").css('background-color','black');        
        Combatant[7] = 1;
    }else if(Combatant[7] === 1){
        $(this).css('background-color','#FFCC33');
        $(this).text('@');
        Combatant[7] = 2;
    }else if(Combatant[7] === 2){
        $(this).css('background-color','#660099');
        $(this).text('D');
        Combatant[7] = 3;
    }else if(Combatant[7] === 3){
        $(this).css('background-color','#C0C0C0');
        $(this).text('L');
        Combatant[7] = 4;
    }else if(Combatant[7] === 4){
        $(this).css('background-color','#B22222');
        $(this).text('*');
        $("#ConField7,#numField7").prop('disabled', true);
        $("#ConField7,#numField7").css('background-color','grey');
        Combatant[7] = 0;
    }
});

$('#ActivateButton8').click(function(){
    if (Combatant[8] === 0) {
        $(this).css('background-color','Green');
        $(this).text('&');
        $("#ConField8,#numField8").prop('disabled', false);
        $("#ConField8,#numField8").css('background-color','black');        
        Combatant[8] = 1;
    }else if(Combatant[8] === 1){
        $(this).css('background-color','#FFCC33');
        $(this).text('@');
        Combatant[8] = 2;
    }else if(Combatant[8] === 2){
        $(this).css('background-color','#660099');
        $(this).text('D');
        Combatant[8] = 3;
    }else if(Combatant[8] === 3){
        $(this).css('background-color','#C0C0C0');
        $(this).text('L');
        Combatant[8] = 4;
    }else if(Combatant[8] === 4){
        $(this).css('background-color','#B22222');
        $(this).text('*');
        $("#ConField8,#numField8").prop('disabled', true);
        $("#ConField8,#numField8").css('background-color','grey');
        Combatant[8] = 0;
    }
});

$('#ActivateButton9').click(function(){
    if (Combatant[9] === 0) {
        $(this).css('background-color','Green');
        $(this).text('&');
        $("#ConField9,#numField9").prop('disabled', false);
        $("#ConField9,#numField9").css('background-color','black');        
        Combatant[9] = 1;
    }else if(Combatant[9] === 1){
        $(this).css('background-color','#FFCC33');
        $(this).text('@');
        Combatant[9] = 2;
    }else if(Combatant[9] === 2){
        $(this).css('background-color','#660099');
        $(this).text('D');
        Combatant[9] = 3;
    }else if(Combatant[9] === 3){
        $(this).css('background-color','#C0C0C0');
        $(this).text('L');
        Combatant[9] = 4;
    }else if(Combatant[9] === 4){
        $(this).css('background-color','#B22222');
        $(this).text('*');
        $("#ConField9,#numField9").prop('disabled', true);
        $("#ConField9,#numField9").css('background-color','grey');
        Combatant[9] = 0;
    }
});

$('#ActivateButton10').click(function(){
    if (Combatant[10] === 0) {
        $(this).css('background-color','Green');
        $(this).text('&');
        $("#ConField10,#numField10").prop('disabled', false);
        $("#ConField10,#numField10").css('background-color','black');        
        Combatant[10] = 1;
    }else if(Combatant[10] === 1){
        $(this).css('background-color','#FFCC33');
        $(this).text('@');
        Combatant[10] = 2;
    }else if(Combatant[10] === 2){
        $(this).css('background-color','#660099');
        $(this).text('D');
        Combatant[10] = 3;
    }else if(Combatant[10] === 3){
        $(this).css('background-color','#C0C0C0');
        $(this).text('L');
        Combatant[10] = 4;
    }else if(Combatant[10] === 4){
        $(this).css('background-color','#B22222');
        $(this).text('*');
        $("#ConField10,#numField10").prop('disabled', true);
        $("#ConField10,#numField10").css('background-color','grey');
        Combatant[10] = 0;
    }
});

$('#Initiate').click(Initiate);
                     
function Initiate(){
    
    $("#RollResults").html("");
    
    if ((!Combatant[1] > 0 &&!Combatant[2] > 0 &&!Combatant[3] > 0 &&!Combatant[4] > 0 &&!Combatant[5] > 0 &&!Combatant[6] > 0 &&!Combatant[7] > 0 &&!Combatant[8] > 0 &&!Combatant[9] > 0 &&!Combatant[10] > 0 )) {
        $('#CA').text('Add Participant');
        return;
    }
    
    InitiativeRolled = true;
    
    var ScoresArray = []
  
    if (Combatant[1] > 0){
        var Score1first = parseFloat($('#numField1').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        var Score1second = parseFloat($('#numField1').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        if (Combatant[1] === 1) {Score1 = Score1first; $("#RollResults").append($("#ConField1").val() + " rolled: " + Score1 + "<br>");}
        else if (Combatant[1] === 2) {Score1 = Math.max(Score1first,Score1second); $("#RollResults").append($("#ConField1").val() + " rolled: " + Score1first + " and " + Score1second + " with Advantage<br>");}
        else if (Combatant[1] === 3) {Score1 = Math.min(Score1first,Score1second); $("#RollResults").append($("#ConField1").val() + " rolled: " + Score1first + " and " + Score1second + " with Disadvantage<br>");}
        else if (Combatant[1] === 4) {Score1 = Score1; $("#RollResults").append($("#ConField1").val() + " kept the roll: " + Score1 + "<br>");}   
        $('#Score1').text(Score1);
        ScoresArray.push(Score1);
    };
    if (Combatant[2] > 0){
        var Score2first = parseFloat($('#numField2').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        var Score2second = parseFloat($('#numField2').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        if (Combatant[2] === 1) {Score2 = Score2first; $("#RollResults").append($("#ConField2").val() + " rolled: " + Score2 + "<br>");}
        else if (Combatant[2] === 2) {Score2 = Math.max(Score2first,Score2second); $("#RollResults").append($("#ConField2").val() + " rolled: " + Score2first + " and " + Score2second + " with Advantage<br>");}
        else if (Combatant[2] === 3) {Score2 = Math.min(Score2first,Score2second); $("#RollResults").append($("#ConField2").val() + " rolled: " + Score2first + " and " + Score2second + " with Disadvantage<br>");}
        else if (Combatant[2] === 4) {Score2 = Score2; $("#RollResults").append($("#ConField2").val() + " kept the roll: " + Score2 + "<br>");}   
        $('#Score2').text(Score2);
        ScoresArray.push(Score2);
    };
    if (Combatant[3] > 0){
        var Score3first = parseFloat($('#numField3').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        var Score3second = parseFloat($('#numField3').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        if (Combatant[3] === 1) {Score3 = Score3first; $("#RollResults").append($("#ConField3").val() + " rolled: " + Score3 + "<br>");}
        else if (Combatant[3] === 2) {Score3 = Math.max(Score3first,Score3second); $("#RollResults").append($("#ConField3").val() + " rolled: " + Score3first + " and " + Score3second + " with Advantage<br>");}
        else if (Combatant[3] === 3) {Score3 = Math.min(Score3first,Score3second); $("#RollResults").append($("#ConField3").val() + " rolled: " + Score3first + " and " + Score3second + " with Disadvantage<br>");}
        else if (Combatant[3] === 4) {Score3 = Score3; $("#RollResults").append($("#ConField3").val() + " kept the roll: " + Score3 + "<br>");}   
        $('#Score3').text(Score3);
        ScoresArray.push(Score3);
    };
    if (Combatant[4] > 0){
        var Score4first = parseFloat($('#numField4').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        var Score4second = parseFloat($('#numField4').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        if (Combatant[4] === 1) {Score4 = Score4first; $("#RollResults").append($("#ConField4").val() + " rolled: " + Score4 + "<br>");}
        else if (Combatant[4] === 2) {Score4 = Math.max(Score4first,Score4second); $("#RollResults").append($("#ConField4").val() + " rolled: " + Score4first + " and " + Score4second + " with Advantage<br>");}
        else if (Combatant[4] === 3) {Score4 = Math.min(Score4first,Score4second); $("#RollResults").append($("#ConField4").val() + " rolled: " + Score4first + " and " + Score4second + " with Disadvantage<br>");}
        else if (Combatant[4] === 4) {Score4 = Score4; $("#RollResults").append($("#ConField4").val() + " kept the roll: " + Score4 + "<br>");}   
        $('#Score4').text(Score4);
        ScoresArray.push(Score4);
    }
    if (Combatant[5] > 0){
        var Score5first = parseFloat($('#numField5').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        var Score5second = parseFloat($('#numField5').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        if (Combatant[5] === 1) {Score5 = Score5first; $("#RollResults").append($("#ConField5").val() + " rolled: " + Score5 + "<br>");}
        else if (Combatant[5] === 2) {Score5 = Math.max(Score5first,Score5second); $("#RollResults").append($("#ConField5").val() + " rolled: " + Score5first + " and " + Score5second + " with Advantage<br>");}
        else if (Combatant[5] === 3) {Score5 = Math.min(Score5first,Score5second); $("#RollResults").append($("#ConField5").val() + " rolled: " + Score5first + " and " + Score5second + " with Disadvantage<br>");}
        else if (Combatant[5] === 4) {Score5 = Score5; $("#RollResults").append($("#ConField5").val() + " kept the roll: " + Score5 + "<br>");}   
        $('#Score5').text(Score5);
        ScoresArray.push(Score5);
    }
    if (Combatant[6] > 0){
        var Score6first = parseFloat($('#numField6').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        var Score6second = parseFloat($('#numField6').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        if (Combatant[6] === 1) {Score6 = Score6first; $("#RollResults").append($("#ConField6").val() + " rolled: " + Score6 + "<br>");}
        else if (Combatant[6] === 2) {Score6 = Math.max(Score6first,Score6second); $("#RollResults").append($("#ConField6").val() + " rolled: " + Score6first + " and " + Score6second + " with Advantage<br>");}
        else if (Combatant[6] === 3) {Score6 = Math.min(Score6first,Score6second); $("#RollResults").append($("#ConField6").val() + " rolled: " + Score6first + " and " + Score6second + " with Disadvantage<br>");}
        else if (Combatant[6] === 4) {Score6 = Score6; $("#RollResults").append($("#ConField6").val() + " kept the roll: " + Score6 + "<br>");}   
        $('#Score6').text(Score6);
        ScoresArray.push(Score6);
    }
    if (Combatant[7] > 0){
        var Score7first = parseFloat($('#numField7').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        var Score7second = parseFloat($('#numField7').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        if (Combatant[7] === 1) {Score7 = Score7first; $("#RollResults").append($("#ConField7").val() + " rolled: " + Score7 + "<br>");}
        else if (Combatant[7] === 2) {Score7 = Math.max(Score7first,Score7second); $("#RollResults").append($("#ConField7").val() + " rolled: " + Score7first + " and " + Score7second + " with Advantage<br>");}
        else if (Combatant[7] === 3) {Score7 = Math.min(Score7first,Score7second); $("#RollResults").append($("#ConField7").val() + " rolled: " + Score7first + " and " + Score7second + " with Disadvantage<br>");}
        else if (Combatant[7] === 4) {Score7 = Score7; $("#RollResults").append($("#ConField7").val() + " kept the roll: " + Score7 + "<br>");}   
        $('#Score7').text(Score7);
        ScoresArray.push(Score7);
    }
    if (Combatant[8] > 0){
        var Score8first = parseFloat($('#numField8').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        var Score8second = parseFloat($('#numField8').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        if (Combatant[8] === 1) {Score8 = Score8first; $("#RollResults").append($("#ConField8").val() + " rolled: " + Score8 + "<br>");}
        else if (Combatant[8] === 2) {Score8 = Math.max(Score8first,Score8second); $("#RollResults").append($("#ConField8").val() + " rolled: " + Score8first + " and " + Score8second + " with Advantage<br>");}
        else if (Combatant[8] === 3) {Score8 = Math.min(Score8first,Score8second); $("#RollResults").append($("#ConField8").val() + " rolled: " + Score8first + " and " + Score8second + " with Disadvantage<br>");}
        else if (Combatant[8] === 4) {Score8 = Score8; $("#RollResults").append($("#ConField8").val() + " kept the roll: " + Score8 + "<br>");}   
        $('#Score8').text(Score8);
        ScoresArray.push(Score8);
    }
    if (Combatant[9] > 0){
        var Score9first = parseFloat($('#numField9').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        var Score9second = parseFloat($('#numField9').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        if (Combatant[9] === 1) {Score9 = Score9first; $("#RollResults").append($("#ConField9").val() + " rolled: " + Score9 + "<br>");}
        else if (Combatant[9] === 2) {Score9 = Math.max(Score9first,Score9second); $("#RollResults").append($("#ConField9").val() + " rolled: " + Score9first + " and " + Score9second + " with Advantage<br>");}
        else if (Combatant[9] === 3) {Score9 = Math.min(Score9first,Score9second); $("#RollResults").append($("#ConField9").val() + " rolled: " + Score9first + " and " + Score9second + " with Disadvantage<br>");}
        else if (Combatant[9] === 4) {Score9 = Score9; $("#RollResults").append($("#ConField9").val() + " kept the roll: " + Score9 + "<br>");}   
        $('#Score9').text(Score9);
        ScoresArray.push(Score9);
    }    
    if (Combatant[10] > 0){
        var Score10first = parseFloat($('#numField10').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        var Score10second = parseFloat($('#numField10').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        if (Combatant[10] === 1) {Score10 = Score10first; $("#RollResults").append($("#ConField10").val() + " rolled: " + Score10 + "<br>");}
        else if (Combatant[10] === 2) {Score10 = Math.max(Score10first,Score10second); $("#RollResults").append($("#ConField10").val() + " rolled: " + Score10first + " and " + Score10second + " with Advantage<br>");}
        else if (Combatant[10] === 3) {Score10 = Math.min(Score10first,Score10second); $("#RollResults").append($("#ConField10").val() + " rolled: " + Score10first + " and " + Score10second + " with Disadvantage<br>");}
        else if (Combatant[10] === 4) {Score10 = Score10; $("#RollResults").append($("#ConField10").val() + " kept the roll: " + Score10 + "<br>");}   
        $('#Score10').text(Score10);
        ScoresArray.push(Score10);
    }
    
    if (hasDuplicates(ScoresArray)){Initiate();console.log("Rerolling");};
    
    CurrentInitiativeHolder =  0;
    Combatant1Ready = true;Combatant2Ready = true;Combatant3Ready = true;Combatant4Ready = true;
    Combatant5Ready = true;Combatant6Ready = true;Combatant7Ready = true;Combatant8Ready = true;
    Combatant9Ready = true;Combatant10Ready = true;
    //for (var i = 1; i < Combatant.length; ++i) { Combatant[i] = true; }
    Next();
    
};

function hasDuplicates(array) {
    var valuesSoFar = [];
    for (var i = 0; i < array.length; ++i) {
        var value = array[i];
        if (valuesSoFar.indexOf(value) !== -1) {
            return true;
        }
        valuesSoFar.push(value);
    }
    return false;
}


$('#Next').click(Next);
function Next() {
    
    if(InitiativeRolled != true) {
        $('#CA').text("Roll Initiative");  
        return;
    }
    
    $('.Marker').css('background-color','black');
    $('#CA').text("");    
    
    var Max = Math.max(Score1,Score2,Score3,Score4,Score5,Score6,Score7,Score8,Score9,Score10);
    var Min = Math.min(Score1,Score2,Score3,Score4,Score5,Score6,Score7,Score8,Score9,Score10);
    
    console.log(Min);
    
    for (var i = Max+1; i > Min - 5; i--) 
    {
       if (Combatant[1] > 0 && Score1 === i && CurrentInitiativeHolder != 1 && Combatant1Ready) {
            $('#Marker1').css('background-color','green');
            $('#CA').text($('#ConField1').val());
            Combatant1Ready = false;
            CurrentInitiativeHolder =  1;
            break;
       }
       if (Combatant[2] > 0 && Score2 === i && CurrentInitiativeHolder != 2 && Combatant2Ready) {
            $('#Marker2').css('background-color','green');
            $('#CA').text($('#ConField2').val());
            Combatant2Ready = false;
            CurrentInitiativeHolder =  2;
            break;
        }
        if (Combatant[3] > 0 && Score3 === i && CurrentInitiativeHolder != 3 && Combatant3Ready) {
            $('#Marker3').css('background-color','green');
            $('#CA').text($('#ConField3').val());
            Combatant3Ready = false;
            CurrentInitiativeHolder =  3;
            break;
        }
        if (Combatant[4] > 0 && Score4 === i && CurrentInitiativeHolder != 4 && Combatant4Ready) {
            $('#Marker4').css('background-color','green');
            $('#CA').text($('#ConField4').val());
            Combatant4Ready = false;
            CurrentInitiativeHolder =  4;
            break;
        }
       if (Combatant[5] > 0 && Score5 === i && CurrentInitiativeHolder != 5 && Combatant5Ready) {
            $('#Marker5').css('background-color','green');
            $('#CA').text($('#ConField5').val());
            Combatant5Ready = false;
            CurrentInitiativeHolder =  5;
            break;
        }
       if (Combatant[6] > 0 && Score6 === i && CurrentInitiativeHolder != 6 && Combatant6Ready) {
            $('#Marker6').css('background-color','green');
            $('#CA').text($('#ConField6').val());
            Combatant6Ready = false;
            CurrentInitiativeHolder =  6;            
            break;
        }
       if (Combatant[7] > 0 && Score7 === i && CurrentInitiativeHolder != 7 && Combatant7Ready) {
            $('#Marker7').css('background-color','green');
            $('#CA').text($('#ConField7').val());
            Combatant7Ready = false;
            CurrentInitiativeHolder =  7;
            break;
        }
       if (Combatant[8] > 0 && Score8 === i && CurrentInitiativeHolder != 8 && Combatant8Ready) {
            $('#Marker8').css('background-color','green');
            $('#CA').text($('#ConField8').val());
            Combatant8Ready = false;
            CurrentInitiativeHolder =  8;
            break;
        }
       if (Combatant[9] > 0 && Score9 === i && CurrentInitiativeHolder != 9 && Combatant9Ready) {
            $('#Marker9').css('background-color','green');
            $('#CA').text($('#ConField9').val());
            Combatant9Ready = false;
            CurrentInitiativeHolder =  9;
            break;
        }
       if (Combatant[10] > 0 && Score10 === i && CurrentInitiativeHolder != 10 && Combatant10Ready) {
            $('#Marker10').css('background-color','green');
            $('#CA').text($('#ConField10').val());
            Combatant10Ready = false;
            CurrentInitiativeHolder =  10;
            break;
        }
        if (i === Min - 1) {
                Combatant1Ready = true;Combatant2Ready = true;Combatant3Ready = true;Combatant4Ready = true;
                Combatant5Ready = true;Combatant6Ready = true;Combatant7Ready = true;Combatant8Ready = true;
                Combatant9Ready = true;Combatant10Ready = true;
                
                RoundCounter++
                $('#RoundCounter').text(RoundCounter);
                $('#CA').text('New Round');
        }
    }
}


$('#ClearResults').click(ClearResults);
function ClearResults() {
    Score1 = 0;Score2 = 0;Score3 = 0;Score4 = 0;Score5 = 0;Score6 = 0;Score7 = 0;Score8 = 0;Score9 = 0; Score10 = 0;
    $(".Score").text('');
    $('.Marker').css('background-color','black');
    $('#CA').text("");    
}

$('#AdvancedButton').click(ShowAdvancedBox);
function ShowAdvancedBox() {
    console.log('In')
    if ($('#AdvancedBox').css('display') == 'none') {
        $('#AdvancedBox').show();
    }else {$('#AdvancedBox').hide();}
}

$('#ResetRoundCounter').click(ResetRoundCounter);
function ResetRoundCounter() {
    RoundCounter = 1;
    $('#RoundCounter').text(RoundCounter);
}


}
$(document).ready(main);

