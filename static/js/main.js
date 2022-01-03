function div_show1(s, ss1, ss2) {
    if(s == "파일첨부") {
        document.getElementById(ss1).style.display="";
        document.getElementById(ss2).style.display="none";
    }
    else {
        document.getElementById(ss1).style.display="none";
        document.getElementById(ss2).style.display="";
    }
}
