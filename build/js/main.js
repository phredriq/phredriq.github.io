$(document).ready(function(){
       $("#mainViewContainer").html($("#homepage").html())
   
})



function SwitchToAboutUs () {
    document.getElementById('bodyelement').style.backgroundImage="url(img/iskallnew2.png)";
    $("#mainViewContainer").html($("#omoss").html())

}


function SwitchTohome() {
    document.getElementById('bodyelement').style.backgroundImage="url(img/iskallnew.png)";
    $("#mainViewContainer").html($("#homepage").html())
}