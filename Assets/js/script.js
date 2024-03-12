function collepsedMenu() {
    document.querySelector('.sidebar').classList.toggle('collepsed');
}

function chngBg(attrb){
    var x = document.getElementsByClassName("acrdb");

    for(var i=0;i<x.length;i++){
        x[i].style.backgroundColor="transparent";
        x[i].style.color = "#5D5FEF";
    }
    
    document.getElementById(attrb).style.color = "white";
    document.getElementById(attrb).style.backgroundColor = "#5D5FEF";
}