var main = function() {

var CurrentInitiativeHolder = 0;
var CurrentInitiativeValue = 0;
var Score1=Score2=Score3=Score4=Score5=Score6=Score7=Score8=Score9=Score10 = 0;
var Combatant1= false;
var Combatant2= false;
var Combatant3= false;
var Combatant4= false;
var Combatant5= false;
var Combatant6= false;
var Combatant7= false;
var Combatant8= false;
var Combatant9= false;
var Combatant10= false;

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


$('#ActivateButton1').click(function(){
    if (Combatant1) {
        $(this).css('background-color','#B22222');
        $(this).text('&');
        $("#ConField1,#numField1").prop('disabled', true);
        $("#ConField1,#numField1").css('background-color','grey');
        $('#numField1,#Score1').val(0);
        Combatant1 = false;
    }else{
        $(this).css('background-color','Green');
        $(this).text('*');
        $("#ConField1,#numField1").prop('disabled', false);
        $("#ConField1,#numField1").css('background-color','black');        
        Combatant1 = true;
    }
});

$('#ActivateButton2').click(function(){
    if (Combatant2) {
        $(this).css('background-color','#B22222');
        $(this).text('&');
        $("#ConField2,#numField2").prop('disabled', true);
        $("#ConField2,#numField2").css('background-color','grey');
        $('#numField2,#Score2').val(0);
        Combatant2 = false;
    }else{
        $(this).css('background-color','Green');
        $(this).text('*');
        $("#ConField2,#numField2").prop('disabled', false);
        $("#ConField2,#numField2").css('background-color','black');        
        Combatant2 = true;
    }
});

$('#ActivateButton3').click(function(){
    if (Combatant3) {
        $(this).css('background-color','#B22222');
        $(this).text('&');
        $("#ConField3,#numField3").prop('disabled', true);
        $("#ConField3,#numField3").css('background-color','grey');
        $('#numField3,#Score3').val(0);
        Combatant3 = false;
    }else{
        $(this).css('background-color','Green');
        $(this).text('*');
        $("#ConField3,#numField3").prop('disabled', false);
        $("#ConField3,#numField3").css('background-color','black');        
        Combatant3 = true;
    }
});

$('#ActivateButton4').click(function(){
    if (Combatant4) {
        $(this).css('background-color','#B22222');
        $(this).text('&');
        $("#ConField4,#numField4").prop('disabled', true);
        $("#ConField4,#numField4").css('background-color','grey');
        $('#numField4,#Score4').val(0);
        Combatant4 = false;
    }else{
        $(this).css('background-color','Green');
        $(this).text('*');
        $("#ConField4,#numField4").prop('disabled', false);
        $("#ConField4,#numField4").css('background-color','black');        
        Combatant4 = true;
    }
});

$('#ActivateButton5').click(function(){
    if (Combatant5) {
        $(this).css('background-color','#B22222');
        $(this).text('&');
        $("#ConField5,#numField5").prop('disabled', true);
        $("#ConField5,#numField5").css('background-color','grey');
        $('#numField5,#Score5').val(0);
        Combatant5 = false;
    }else{
        $(this).css('background-color','Green');
        $(this).text('*');
        $("#ConField5,#numField5").prop('disabled', false);
        $("#ConField5,#numField5").css('background-color','black');
        Combatant5 = true;
    }
});

$('#ActivateButton6').click(function(){
    if (Combatant6) {
        $(this).css('background-color','#B22222');
        $(this).text('&');
        $("#ConField6,#numField6").prop('disabled', true);
        $("#ConField6,#numField6").css('background-color','grey');
        $('#numField6,#Score6').val(0);
        Combatant6 = false;
    }else{
        $(this).css('background-color','Green');
        $(this).text('*');
        $("#ConField6,#numField6").prop('disabled', false);
        $("#ConField6,#numField6").css('background-color','black');        
        Combatant6 = true;
    }
});

$('#ActivateButton7').click(function(){
    if (Combatant7) {
        $(this).css('background-color','#B22222');
        $(this).text('&');
        $("#ConField7,#numField7").prop('disabled', true);
        $("#ConField7,#numField7").css('background-color','grey');
        $('#numField7,#Score7').val(0);
        Combatant7 = false;
    }else{
        $(this).css('background-color','Green');
        $(this).text('*');
        $("#ConField7,#numField7").prop('disabled', false);
        $("#ConField7,#numField7").css('background-color','black');        
        Combatant7 = true;
    }
});

$('#ActivateButton8').click(function(){
    if (Combatant8) {
        $(this).css('background-color','#B22222');
        $(this).text('&');
        $("#ConField8,#numField8").prop('disabled', true);
        $("#ConField8,#numField8").css('background-color','grey');
        $('#numField8,#Score8').val(0);
        Combatant8 = false;
    }else{
        $(this).css('background-color','Green');
        $(this).text('*');
        $("#ConField8,#numField8").prop('disabled', false);
        $("#ConField8,#numField8").css('background-color','black');        
        Combatant8 = true;
    }
});

$('#ActivateButton9').click(function(){
    if (Combatant9) {
        $(this).css('background-color','#B22222');
        $(this).text('&');
        $("#ConField9,#numField9").prop('disabled', true);
        $("#ConField9,#numField9").css('background-color','grey');
        $('#numField9,#Score9').val(0);
        Combatant9 = false;
    }else{
        $(this).css('background-color','Green');
        $(this).text('*');
        $("#ConField9,#numField9").prop('disabled', false);
        $("#ConField9,#numField9").css('background-color','black');        
        Combatant9 = true;
    }
});

$('#ActivateButton10').click(function(){
    if (Combatant10) {
        $(this).css('background-color','#B22222');
        $(this).text('&');
        $("#ConField10,#numField10").prop('disabled', true);
        $("#ConField10,#numField10").css('background-color','grey');
        $('#numField10,#Score10').val(0);
        Combatant10 = false;
    }else{
        $(this).css('background-color','Green');
        $(this).text('*');
        $("#ConField10,#numField10").prop('disabled', false);
        $("#ConField10,#numField10").css('background-color','black');        
        Combatant10 = true;
    }
});

$('#Initiate').click(Initiate);
                     
function Initiate(){
    
    if ((!Combatant1&&!Combatant2&&!Combatant3&&!Combatant4&&!Combatant5&&!Combatant6&&!Combatant7&&!Combatant8&&!Combatant9&&!Combatant10)) {
        $('#CA').text('Add Participant');
        return;
    }
    
    var ScoresArray = []
  
    if (Combatant1){
        Score1 = parseFloat($('#numField1').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        $('#Score1').text(Score1);
        ScoresArray.push(Score1);
    };
    if (Combatant2){
        Score2 = parseFloat($('#numField2').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        $('#Score2').text(Score2);
        ScoresArray.push(Score2);
    };
    if (Combatant3){
        Score3 = parseFloat($('#numField3').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        $('#Score3').text(Score3);
        ScoresArray.push(Score3);
    };
    if (Combatant4){
        Score4 = parseFloat($('#numField4').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        $('#Score4').text(Score4);
        ScoresArray.push(Score4);
    }
    if (Combatant5){
        Score5 = parseFloat($('#numField5').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        $('#Score5').text(Score5);
        ScoresArray.push(Score5);
    }
    if (Combatant6){
        Score6 = parseFloat($('#numField6').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        $('#Score6').text(Score6);
        ScoresArray.push(Score6);
    }
    if (Combatant7){
        Score7 = parseFloat($('#numField7').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        $('#Score7').text(Score7);
        ScoresArray.push(Score7);
    }
    if (Combatant8){
        Score8 = parseFloat($('#numField8').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        $('#Score8').text(Score8);
        ScoresArray.push(Score8);
    }
    if (Combatant9){
        Score9 = parseFloat($('#numField9').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        $('#Score9').text(Score9);
        ScoresArray.push(Score9);
    }    
    if (Combatant10){
        Score10 = parseFloat($('#numField10').val()) + parseFloat(Math.floor((Math.random()*20)+1));
        $('#Score10').text(Score10);
        ScoresArray.push(Score10);
    }
    
    if (hasDuplicates(ScoresArray)){Initiate();console.log("Rerolling");};
    
    CurrentInitiativeHolder =  0;    
    Combatant1Ready = true;Combatant2Ready = true;Combatant3Ready = true;Combatant4Ready = true;
    Combatant5Ready = true;Combatant6Ready = true;Combatant7Ready = true;Combatant8Ready = true;
    Combatant9Ready = true;Combatant10Ready = true;
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
    
    $('.Marker').css('background-color','black');
    $('#CA').text("");    
    
    var Max = Math.max(Score1,Score2,Score3,Score4,Score5,Score6,Score7,Score8);
    var Min = Math.min(Score1,Score2,Score3,Score4,Score5,Score6,Score7,Score8);    
    
    for (var i = Max+1; i > Min - 5; i--) 
    {
       if (Combatant1 && Score1 === i && CurrentInitiativeHolder != 1 && Combatant1Ready) {
            $('#Marker1').css('background-color','green');
            $('#CA').text($('#ConField1').val());
            Combatant1Ready = false;
            CurrentInitiativeHolder =  1;
            break;
       }
       if (Combatant2 && Score2 === i && CurrentInitiativeHolder != 2 && Combatant2Ready) {
            $('#Marker2').css('background-color','green');
            $('#CA').text($('#ConField2').val());
            Combatant2Ready = false;
            CurrentInitiativeHolder =  2;
            break;
        }
        if (Combatant3 && Score3 === i && CurrentInitiativeHolder != 3 && Combatant3Ready) {
            $('#Marker3').css('background-color','green');
            $('#CA').text($('#ConField3').val());
            Combatant3Ready = false;
            CurrentInitiativeHolder =  3;
            break;
        }
        if (Combatant4 && Score4 === i && CurrentInitiativeHolder != 4 && Combatant4Ready) {
            $('#Marker4').css('background-color','green');
            $('#CA').text($('#ConField4').val());
            Combatant4Ready = false;
            CurrentInitiativeHolder =  4;
            break;
        }
       if (Combatant5 && Score5 === i && CurrentInitiativeHolder != 5 && Combatant5Ready) {
            $('#Marker5').css('background-color','green');
            $('#CA').text($('#ConField5').val());
            Combatant5Ready = false;
            CurrentInitiativeHolder =  5;
            break;
        }
       if (Combatant6 && Score6 === i && CurrentInitiativeHolder != 6 && Combatant6Ready) {
            $('#Marker6').css('background-color','green');
            $('#CA').text($('#ConField6').val());
            Combatant6Ready = false;
            CurrentInitiativeHolder =  6;            
            break;
        }
       if (Combatant7 && Score7 === i && CurrentInitiativeHolder != 7 && Combatant7Ready) {
            $('#Marker7').css('background-color','green');
            $('#CA').text($('#ConField7').val());
            Combatant7Ready = false;
            CurrentInitiativeHolder =  7;
            break;
        }
       if (Combatant8 && Score8 === i && CurrentInitiativeHolder != 8 && Combatant8Ready) {
            $('#Marker8').css('background-color','green');
            $('#CA').text($('#ConField8').val());
            Combatant8Ready = false;
            CurrentInitiativeHolder =  8;
            break;
        }
       if (Combatant9 && Score9 === i && CurrentInitiativeHolder != 9 && Combatant9Ready) {
            $('#Marker9').css('background-color','green');
            $('#CA').text($('#ConField9').val());
            Combatant9Ready = false;
            CurrentInitiativeHolder =  9;
            break;
        }
       if (Combatant10 && Score10 === i && CurrentInitiativeHolder != 10 && Combatant10Ready) {
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
            console.log("Reset");
            Next();
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

}
$(document).ready(main);

