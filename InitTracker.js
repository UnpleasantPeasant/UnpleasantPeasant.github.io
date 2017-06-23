var main = function() {

var CurrentInitiativeHolder = 0;
var CurrentInitiativeValue = 0;
var RoundCounter = 1;
var InitiativeRolled = false;
var ScoresHidden = false;

var CombatantReady = Array(11);
for (var i = 0; i < CombatantReady.length; i++) { CombatantReady[i] = true; }

var Score = Array(11);
for (var i = 0; i < Score.length; i++) { Score[i] = 0; }

var Combatant = Array(11);
for (var i = 0; i < Combatant.length; i++) { Combatant[i] = 0; }


$('.RangeField').click(function() {this.select();});

$('#ActivateButton1').click(function(){
    if (Combatant[1] === 0) {
        $(this).css('background-color','Green');
        $(this).text('&');
        $("#ConField1,#numField1,#Score1").prop('disabled', false);
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
        $("#ConField1,#numField1,#Score1").prop('disabled', true);
        $("#ConField1,#numField1").css('background-color','grey');
        Combatant[1] = 0;
    }
});

$('#ActivateButton2').click(function(){
    if (Combatant[2] === 0) {
        $(this).css('background-color','Green');
        $(this).text('&');
        $("#ConField2,#numField2,#Score2").prop('disabled', false);
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
        $("#ConField2,#numField2,#Score2").prop('disabled', true);
        $("#ConField2,#numField2").css('background-color','grey');
        Combatant[2] = 0;
    }
});

$('#ActivateButton3').click(function(){
    if (Combatant[3] === 0) {
        $(this).css('background-color','Green');
        $(this).text('&');
        $("#ConField3,#numField3,#Score3").prop('disabled', false);
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
        $("#ConField3,#numField3,#Score3").prop('disabled', true);
        $("#ConField3,#numField3").css('background-color','grey');
        Combatant[3] = 0;
    }
});

$('#ActivateButton4').click(function(){
    if (Combatant[4] === 0) {
        $(this).css('background-color','Green');
        $(this).text('&');
        $("#ConField4,#numField4,#Score4").prop('disabled', false);
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
        $("#ConField4,#numField4,#Score4").prop('disabled', true);
        $("#ConField4,#numField4").css('background-color','grey');
        Combatant[4] = 0;
    }
});

$('#ActivateButton5').click(function(){
    if (Combatant[5] === 0) {
        $(this).css('background-color','Green');
        $(this).text('&');
        $("#ConField5,#numField5,#Score5").prop('disabled', false);
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
        $("#ConField5,#numField5,#Score5").prop('disabled', true);
        $("#ConField5,#numField5").css('background-color','grey');
        Combatant[5] = 0;
    }
});

$('#ActivateButton6').click(function(){
    if (Combatant[6] === 0) {
        $(this).css('background-color','Green');
        $(this).text('&');
        $("#ConField6,#numField6,#Score6").prop('disabled', false);
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
        $("#ConField6,#numField6,#Score6").prop('disabled', true);
        $("#ConField6,#numField6").css('background-color','grey');
        Combatant[6] = 0;
    }
});

$('#ActivateButton7').click(function(){
    if (Combatant[7] === 0) {
        $(this).css('background-color','Green');
        $(this).text('&');
        $("#ConField7,#numField7,#Score7").prop('disabled', false);
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
        $("#ConField7,#numField7,#Score7").prop('disabled', true);
        $("#ConField7,#numField7").css('background-color','grey');
        Combatant[7] = 0;
    }
});

$('#ActivateButton8').click(function(){
    if (Combatant[8] === 0) {
        $(this).css('background-color','Green');
        $(this).text('&');
        $("#ConField8,#numField8,#Score8").prop('disabled', false);
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
        $("#ConField8,#numField8,#Score8").prop('disabled', true);
        $("#ConField8,#numField8").css('background-color','grey');
        Combatant[8] = 0;
    }
});

$('#ActivateButton9').click(function(){
    if (Combatant[9] === 0) {
        $(this).css('background-color','Green');
        $(this).text('&');
        $("#ConField9,#numField9,#Score9").prop('disabled', false);
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
        $("#ConField9,#numField9,#Score9").prop('disabled', true);
        $("#ConField9,#numField9").css('background-color','grey');
        Combatant[9] = 0;
    }
});

$('#ActivateButton10').click(function(){
    if (Combatant[10] === 0) {
        $(this).css('background-color','Green');
        $(this).text('&');
        $("#ConField10,#numField10,#Score10").prop('disabled', false);
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
        $("#ConField10,#numField10,#Score10").prop('disabled', true);
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
        if (Combatant[1] === 1) {Score[1] = Score1first; $("#RollResults").append($("#ConField1").val() + " rolled: " + Score[1] + "<br>"); ScoresArray.push(Score[1]);}
        else if (Combatant[1] === 2) {Score[1] = Math.max(Score1first,Score1second); $("#RollResults").append($("#ConField1").val() + " rolled: " + Score1first + " and " + Score1second + " with Advantage<br>"); ScoresArray.push(Score[1]);}
        else if (Combatant[1] === 3) {Score[1] = Math.min(Score1first,Score1second); $("#RollResults").append($("#ConField1").val() + " rolled: " + Score1first + " and " + Score1second + " with Disadvantage<br>");  ScoresArray.push(Score[1]);}
        else if (Combatant[1] === 4) {Score[1] = Score[1]; $("#RollResults").append($("#ConField1").val() + " kept the roll: " + Score[1] + "<br>");}
        $('#Score1').val(Score[1]);
    };
    if (Combatant[2] > 0){
        var Score2first = parseFloat($('#numField2').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        var Score2second = parseFloat($('#numField2').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        if (Combatant[2] === 1) {Score[2] = Score2first; $("#RollResults").append($("#ConField2").val() + " rolled: " + Score[2] + "<br>");ScoresArray.push(Score[2]);}
        else if (Combatant[2] === 2) {Score[2] = Math.max(Score2first,Score2second); $("#RollResults").append($("#ConField2").val() + " rolled: " + Score2first + " and " + Score2second + " with Advantage<br>");ScoresArray.push(Score[2]);}
        else if (Combatant[2] === 3) {Score[2] = Math.min(Score2first,Score2second); $("#RollResults").append($("#ConField2").val() + " rolled: " + Score2first + " and " + Score2second + " with Disadvantage<br>");ScoresArray.push(Score[2]);}
        else if (Combatant[2] === 4) {Score[2] = Score[2]; $("#RollResults").append($("#ConField2").val() + " kept the roll: " + Score[2] + "<br>");}
        $('#Score2').val(Score[2]);
    };
    if (Combatant[3] > 0){
        var Score3first = parseFloat($('#numField3').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        var Score3second = parseFloat($('#numField3').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        if (Combatant[3] === 1) {Score[3] = Score3first; $("#RollResults").append($("#ConField3").val() + " rolled: " + Score[3] + "<br>");ScoresArray.push(Score[3]);}
        else if (Combatant[3] === 2) {Score[3] = Math.max(Score3first,Score3second); $("#RollResults").append($("#ConField3").val() + " rolled: " + Score3first + " and " + Score3second + " with Advantage<br>");ScoresArray.push(Score[3]);}
        else if (Combatant[3] === 3) {Score[3] = Math.min(Score3first,Score3second); $("#RollResults").append($("#ConField3").val() + " rolled: " + Score3first + " and " + Score3second + " with Disadvantage<br>");ScoresArray.push(Score[3]);}
        else if (Combatant[3] === 4) {Score[3] = Score[3]; $("#RollResults").append($("#ConField3").val() + " kept the roll: " + Score[3] + "<br>");}
        $('#Score3').val(Score[3]);
    };
    if (Combatant[4] > 0){
        var Score4first = parseFloat($('#numField4').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        var Score4second = parseFloat($('#numField4').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        if (Combatant[4] === 1) {Score[4] = Score4first; $("#RollResults").append($("#ConField4").val() + " rolled: " + Score[4] + "<br>");ScoresArray.push(Score[4]);}
        else if (Combatant[4] === 2) {Score[4] = Math.max(Score4first,Score4second); $("#RollResults").append($("#ConField4").val() + " rolled: " + Score4first + " and " + Score4second + " with Advantage<br>");ScoresArray.push(Score[4]);}
        else if (Combatant[4] === 3) {Score[4] = Math.min(Score4first,Score4second); $("#RollResults").append($("#ConField4").val() + " rolled: " + Score4first + " and " + Score4second + " with Disadvantage<br>");ScoresArray.push(Score[4]);}
        else if (Combatant[4] === 4) {Score[4] = Score[4]; $("#RollResults").append($("#ConField4").val() + " kept the roll: " + Score[4] + "<br>");}
        $('#Score4').val(Score[4]);
    }
    if (Combatant[5] > 0){
        var Score5first = parseFloat($('#numField5').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        var Score5second = parseFloat($('#numField5').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        if (Combatant[5] === 1) {Score[5] = Score5first; $("#RollResults").append($("#ConField5").val() + " rolled: " + Score[5] + "<br>");ScoresArray.push(Score[5]);}
        else if (Combatant[5] === 2) {Score[5] = Math.max(Score5first,Score5second); $("#RollResults").append($("#ConField5").val() + " rolled: " + Score5first + " and " + Score5second + " with Advantage<br>");ScoresArray.push(Score[5]);}
        else if (Combatant[5] === 3) {Score[5] = Math.min(Score5first,Score5second); $("#RollResults").append($("#ConField5").val() + " rolled: " + Score5first + " and " + Score5second + " with Disadvantage<br>");ScoresArray.push(Score[5]);}
        else if (Combatant[5] === 4) {Score[5] = Score[5]; $("#RollResults").append($("#ConField5").val() + " kept the roll: " + Score[5] + "<br>");}
        $('#Score5').val(Score[5]);
    }
    if (Combatant[6] > 0){
        var Score6first = parseFloat($('#numField6').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        var Score6second = parseFloat($('#numField6').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        if (Combatant[6] === 1) {Score[6] = Score6first; $("#RollResults").append($("#ConField6").val() + " rolled: " + Score[6] + "<br>");ScoresArray.push(Score[6]);}
        else if (Combatant[6] === 2) {Score[6] = Math.max(Score6first,Score6second); $("#RollResults").append($("#ConField6").val() + " rolled: " + Score6first + " and " + Score6second + " with Advantage<br>");ScoresArray.push(Score[6]);}
        else if (Combatant[6] === 3) {Score[6] = Math.min(Score6first,Score6second); $("#RollResults").append($("#ConField6").val() + " rolled: " + Score6first + " and " + Score6second + " with Disadvantage<br>");ScoresArray.push(Score[6]);}
        else if (Combatant[6] === 4) {Score[6] = Score[6]; $("#RollResults").append($("#ConField6").val() + " kept the roll: " + Score[6] + "<br>");}
        $('#Score6').val(Score[6]);
    }
    if (Combatant[7] > 0){
        var Score7first = parseFloat($('#numField7').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        var Score7second = parseFloat($('#numField7').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        if (Combatant[7] === 1) {Score[7] = Score7first; $("#RollResults").append($("#ConField7").val() + " rolled: " + Score[7] + "<br>");ScoresArray.push(Score[7]);}
        else if (Combatant[7] === 2) {Score[7] = Math.max(Score7first,Score7second); $("#RollResults").append($("#ConField7").val() + " rolled: " + Score7first + " and " + Score7second + " with Advantage<br>");ScoresArray.push(Score[7]);}
        else if (Combatant[7] === 3) {Score[7] = Math.min(Score7first,Score7second); $("#RollResults").append($("#ConField7").val() + " rolled: " + Score7first + " and " + Score7second + " with Disadvantage<br>");ScoresArray.push(Score[7]);}
        else if (Combatant[7] === 4) {Score[7] = Score[7]; $("#RollResults").append($("#ConField7").val() + " kept the roll: " + Score[7] + "<br>");}
        $('#Score7').val(Score[7]);
    }
    if (Combatant[8] > 0){
        var Score8first = parseFloat($('#numField8').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        var Score8second = parseFloat($('#numField8').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        if (Combatant[8] === 1) {Score[8] = Score8first; $("#RollResults").append($("#ConField8").val() + " rolled: " + Score[8] + "<br>");ScoresArray.push(Score[8]);}
        else if (Combatant[8] === 2) {Score[8] = Math.max(Score8first,Score8second); $("#RollResults").append($("#ConField8").val() + " rolled: " + Score8first + " and " + Score8second + " with Advantage<br>");ScoresArray.push(Score[8]);}
        else if (Combatant[8] === 3) {Score[8] = Math.min(Score8first,Score8second); $("#RollResults").append($("#ConField8").val() + " rolled: " + Score8first + " and " + Score8second + " with Disadvantage<br>");ScoresArray.push(Score[8]);}
        else if (Combatant[8] === 4) {Score[8] = Score[8]; $("#RollResults").append($("#ConField8").val() + " kept the roll: " + Score[8] + "<br>");}
        $('#Score8').val(Score[8]);
    }
    if (Combatant[9] > 0){
        var Score9first = parseFloat($('#numField9').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        var Score9second = parseFloat($('#numField9').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        if (Combatant[9] === 1) {Score[9] = Score9first; $("#RollResults").append($("#ConField9").val() + " rolled: " + Score[9] + "<br>");ScoresArray.push(Score[9]);}
        else if (Combatant[9] === 2) {Score[9] = Math.max(Score9first,Score9second); $("#RollResults").append($("#ConField9").val() + " rolled: " + Score9first + " and " + Score9second + " with Advantage<br>");ScoresArray.push(Score[9]);}
        else if (Combatant[9] === 3) {Score[9] = Math.min(Score9first,Score9second); $("#RollResults").append($("#ConField9").val() + " rolled: " + Score9first + " and " + Score9second + " with Disadvantage<br>");ScoresArray.push(Score[9]);}
        else if (Combatant[9] === 4) {Score[9] = Score[9]; $("#RollResults").append($("#ConField9").val() + " kept the roll: " + Score[9] + "<br>");}
        $('#Score9').val(Score[9]);
    }
    if (Combatant[10] > 0){
        var Score10first = parseFloat($('#numField10').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        var Score10second = parseFloat($('#numField10').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        if (Combatant[10] === 1) {Score[10] = Score10first; $("#RollResults").append($("#ConField10").val() + " rolled: " + Score[10] + "<br>");ScoresArray.push(Score[10]);}
        else if (Combatant[10] === 2) {Score[10] = Math.max(Score10first,Score10second); $("#RollResults").append($("#ConField10").val() + " rolled: " + Score10first + " and " + Score10second + " with Advantage<br>");ScoresArray.push(Score[10]);}
        else if (Combatant[10] === 3) {Score[10] = Math.min(Score10first,Score10second); $("#RollResults").append($("#ConField10").val() + " rolled: " + Score10first + " and " + Score10second + " with Disadvantage<br>");ScoresArray.push(Score[10]);}
        else if (Combatant[10] === 4) {Score[10] = Score[10]; $("#RollResults").append($("#ConField10").val() + " kept the roll: " + Score[10] + "<br>");}
        $('#Score10').val(Score[10]);
    }

    if (hasDuplicates(ScoresArray)){Initiate();console.log("Rerolling");};

    CurrentInitiativeHolder =  0;
    for (var i = 0; i < CombatantReady.length; i++) { CombatantReady[i] = true; }
    Next();

};

function hasDuplicates(array) {
    var valuesSoFar = [];
    for (var i = 0; i < array.length; i++) {
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

    var Max = Math.max(Score[1],Score[2],Score[3],Score[4],Score[5],Score[6],Score[7],Score[8],Score[9],Score[10]);
    var Min = Math.min(Score[1],Score[2],Score[3],Score[4],Score[5],Score[6],Score[7],Score[8],Score[9],Score[10]);

    for (var i = Max+1; i > Min - 5; i--)
    {
       if (Combatant[1] > 0 && Score[1] === i && CurrentInitiativeHolder != 1 && CombatantReady[1]) {
            $('#Marker1').css('background-color','green');
            $('#CA').text($('#ConField1').val());
            CombatantReady[1] = false;
            CurrentInitiativeHolder =  1;
            break;
       }else if (Combatant[2] > 0 && Score[2] === i && CurrentInitiativeHolder != 2 && CombatantReady[2]) {
            $('#Marker2').css('background-color','green');
            $('#CA').text($('#ConField2').val());
            CombatantReady[2] = false;
            CurrentInitiativeHolder =  2;
            break;
        }else if (Combatant[3] > 0 && Score[3] === i && CurrentInitiativeHolder != 3 && CombatantReady[3]) {
            $('#Marker3').css('background-color','green');
            $('#CA').text($('#ConField3').val());
            CombatantReady[3] = false;
            CurrentInitiativeHolder =  3;
            break;
        }else if (Combatant[4] > 0 && Score[4] === i && CurrentInitiativeHolder != 4 && CombatantReady[4]) {
            $('#Marker4').css('background-color','green');
            $('#CA').text($('#ConField4').val());
            CombatantReady[4] = false;
            CurrentInitiativeHolder =  4;
            break;
        }else if (Combatant[5] > 0 && Score[5] === i && CurrentInitiativeHolder != 5 && CombatantReady[5]) {
            $('#Marker5').css('background-color','green');
            $('#CA').text($('#ConField5').val());
            CombatantReady[5] = false;
            CurrentInitiativeHolder =  5;
            break;
        }else if (Combatant[6] > 0 && Score[6] === i && CurrentInitiativeHolder != 6 && CombatantReady[6]) {
            $('#Marker6').css('background-color','green');
            $('#CA').text($('#ConField6').val());
            CombatantReady[6] = false;
            CurrentInitiativeHolder =  6;
            break;
        }else if (Combatant[7] > 0 && Score[7] === i && CurrentInitiativeHolder != 7 && CombatantReady[7]) {
            $('#Marker7').css('background-color','green');
            $('#CA').text($('#ConField7').val());
            CombatantReady[7] = false;
            CurrentInitiativeHolder =  7;
            break;
        }else if (Combatant[8] > 0 && Score[8] === i && CurrentInitiativeHolder != 8 && CombatantReady[8]) {
            $('#Marker8').css('background-color','green');
            $('#CA').text($('#ConField8').val());
            CombatantReady[8] = false;
            CurrentInitiativeHolder =  8;
            break;
        }else if (Combatant[9] > 0 && Score[9] === i && CurrentInitiativeHolder != 9 && CombatantReady[9]) {
            $('#Marker9').css('background-color','green');
            $('#CA').text($('#ConField9').val());
            CombatantReady[9] = false;
            CurrentInitiativeHolder =  9;
            break;
        }else if (Combatant[10] > 0 && Score[10] === i && CurrentInitiativeHolder != 10 && CombatantReady[10]) {
            $('#Marker10').css('background-color','green');
            $('#CA').text($('#ConField10').val());
            CombatantReady[10] = false;
            CurrentInitiativeHolder =  10;
            break;
        }else if (i === Min - 1) {
            for (var n = 0; n < CombatantReady.length; n++) { CombatantReady[n] = true; }
            RoundCounter++
            $('#RoundCounter').text(RoundCounter);
            $('#CA').text('New Round');
        }
    }
}


$('#ClearResults').click(ClearResults);
function ClearResults() {
    for (var i = 0; i < Combatant.length; ++i) { Score[i] = 0; }
    $(".Score").val(null);
    $('.Marker').css('background-color','black');
    $('#CA').text("");
}

$('#AdvancedButton').click(ShowAdvancedBox);
function ShowAdvancedBox() {
    if ($('#AdvancedBox').css('display') == 'none') {
        $('#AdvancedBox').show();
    }else {$('#AdvancedBox').hide();}
}

$('#ResetRoundCounter').click(ResetRoundCounter);
function ResetRoundCounter() {
    RoundCounter = 1;
    $('#RoundCounter').text(RoundCounter);
}

$('#HideScoresButton').click(HideScores);
function HideScores() {
    if (!ScoresHidden) {
        $('#HideScoresButton').text('Show Scores');
        $('.Score').css('color','transparent');
        ScoresHidden = true;
    }else{
        $('#HideScoresButton').text('Hide Scores');
        $('.Score').css('color','White');
        ScoresHidden = false;
    };

}

$("#Score1").change(function(){Score[1] = parseInt($("#Score1").val());CombatantReady[1] = true;});
$("#Score2").change(function(){Score[2] = parseInt($("#Score2").val());CombatantReady[2] = true;});
$("#Score3").change(function(){Score[3] = parseInt($("#Score3").val());CombatantReady[3] = true;});
$("#Score4").change(function(){Score[4] = parseInt($("#Score4").val());CombatantReady[4] = true;});
$("#Score5").change(function(){Score[5] = parseInt($("#Score5").val());CombatantReady[5] = true;});
$("#Score6").change(function(){Score[6] = parseInt($("#Score6").val());CombatantReady[6] = true;});
$("#Score7").change(function(){Score[7] = parseInt($("#Score7").val());CombatantReady[7] = true;});
$("#Score8").change(function(){Score[8] = parseInt($("#Score8").val());CombatantReady[8] = true;});
$("#Score9").change(function(){Score[9] = parseInt($("#Score9").val());CombatantReady[9] = true;});
$("#Score10").change(function(){Score[10] = parseInt($("#Score10").val());CombatantReady[10] = true;});

}
$(document).ready(main);
