// 1.
function d1(ner1, dun1){
    var dutuu = 100 - dun1;
    if(dun1 > 100){
        console.log("100-s iluu dun oruulah bolomjgu");
    }else if(dun1 > 89){
        console.log("A unelgee " + ner1)
    }else if(dun1 > 79){
        console.log("B unelgee " + ner1);
    }else if(dun1 > 69){
        console.log("C unelgee " + ner1);
    }else if(dun1 > 59){
        console.log("D unelgee " + ner1);
    }else if(dun1 < 0){
        console.log("Zuv utga oruulna uu")
    }else{
        console.log("F unelgee " + ner1);
    }
    console.log("Tanii avsan dun " + dun1)
    console.log("100 onoo avhad " + dutuu + " dutsan baina.")
}
d1("Bilguun", 91);
d1("Tuguldur", 85);
d1("Bat", 76);
d1("Dorj", 64);
d1("Purev", 53);

// 2.
function d2(sum2, n2){
    for(i=1; i<=n2; i++){
        sum2 = sum2 + 100;
    }
    console.log(sum2)
}
d2(0, 6);

// 3.
function d3(second){
    var hour = Math.floor(second / 3600);
    var minute = Math.floor((second % 3600) /60);
    var sec = second % 60
    console.log(hour + " tsag " + minute + " minute " + sec + " second")
}
d3(3612);

// 4.
function d4(a, b, c){
    if(a >= 5){
        a == 0
    };
    if(b >= 5){
        b == 1
    };
    if(c >= 5){
        c == 1
    };
    console.log(a + b + c)
}

d4(2, 5, 5);

// 5.
function d5(ner5, onoo5){
    var dun5 = 3;
    switch(onoo5){
        case onoo5 >= dun5:
            console.log("Tentssen " + ner5)
            break;
        case onoo5 >= dun5:
            console.log("Tentssen "+ ner5)
            break;
        case onoo5 >= dun5:
            console.log("Tentssen "+ ner5)
            break;
        case onoo5 >= dun5:
            console.log("Tentssen "+ ner5)
            break;
        default:
            console.log("Unasan "+ ner5)
    }
}
d5("Baat", 2);
d5("Dorj", 3);
d5("Bold", 4);
d5("Munh", 5);