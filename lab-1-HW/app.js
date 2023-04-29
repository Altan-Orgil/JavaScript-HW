// Сүүлийн цифр
var lastNumber;
too = 456;
lastNumber = too % 10;
console.log("Dasgal 1 : " + too + " Suuliin tsifr " + lastNumber);

// Аравтын орны цифр
var midNumber;
num = 423;
midNumber = Math.floor(num % 100 / 10);
console.log("Dasgal 2 : " + num + " Aravtiin oron " + midNumber);

// 2 оронтой тоо
var num1 = 27
    a1 = 2;
    b1 = 7;
console.log("Dasgal 3 : " + num1 + " Tsifruudiin urjver " + (a1 * b1));

// 3 оронтой тоо
var num2 = 123;
    a2 = 1;
    b2 = 2;
    c2 = 3;
console.log("Dasgal 4 : " + num2 + " Tsifruudiin niilber " + (a2 + b2 + c2));

// Минут секунд
var second1 = 200;
    min = Math.floor(second1 / 60);
    sec1 = 200 % 60
console.log("Dasgal 5 : " + second1 + " second = " + min + " minute " + sec1 + " second");

// Цаг минут секунд
var second2 = 3612;
    sec2 = second2 % 60;
    min2 = Math.floor((second2 % 3600) / 60);
    tsag = Math.floor(second2 / 3600);
console.log("Dasgal 6 : " + tsag + " tsag " + min2 + " minute " + sec2 + " second");

// Минут секунд -> секунд
var min3 = 3;
    sec3 = 4;
console.log("Dasgal 7 : " + min3 + " minute " + sec3 +" second = " + (min3 * 60 + sec3));

// Цаг, минут, секунд -> секунд
var hour4 = 1;
    min4 = 2;
    sec4 = 3;
console.log("Dasgal 8 : " + hour4 + " tsag " + min4 + " minute " + sec4 + " second = " + (hour4 * 3600 + min4 * 60 + sec4 + " second"))

// Хоног цаг
var hour5 = 44;
    day5 = Math.floor(hour5 / 24)
console.log("Dasgal 9 : " + hour5 + " tsag = " + day5 + " honog " + (hour5 % 24) + " tsag");

// Хоног цаг -> цаг
var day6 = 2;
    hour6 =5;
console.log("Dasgal 10 : " + day6 * 24 + hour6 + " tsag");

// Жил сар
var month7 = 27;
    year7 = Math.floor(month7 / 12)
console.log("Dasgal 11 : " + month7 + " sar = " + year7 + " jil " + month7 % 12 + " sar");

// Жил сар -> сар
var year8 = 2;
    month8 = 7;
console.log("Dasgal 12 : " + year8 + " jil " + month8 + " sar = " + (year8 * 12 + month8) + " sar");

// !!!!!

// Хоёр тооны их
var a = 16;
    b = 14;
if(a > b){
    console.log("Dasgal 13 : " + a + " ih too")
}else(b + " baga too");

// Хоёр тооны бага
var a2 = 9;
    b2 = 6;
if(a2 < b2){
    console.log("Dasgal 14 : " + a2 + " ih too")
}else{
    console.log("Dasgal 14 : " + b2 + " baga too")
};

// 3 тооны их
var a3 = 1;
    b3 = 3;
    c3 = 2;
if(a3 > b3 && a3 > c3){
    console.log("Dasgal 15 : " + a3 + " ih too")
}
else if(b3 > a3 && b3 > c3){
    console.log("Dasgal 15 : " + b3 + " ih too")
}
else if(c3 > a3 && c3 > b3){
    console.log("Dasgal 15 : " + c3 + " ih too")
}
    

// 4 тооны бага
var a4 = 3;
    b4 = 2;
    c4 = 1; 
    d4 = 4;
if(a4 < b4 &&  a4 < b4 && a4 < d4){
    console.log("Dasgal 16 : " + a4 + " baga too")
}else if(b4 < a4 && b4 < c4 && b4 < d4){
    console.log("Dasgal 16 : " + b4 + " baga too")
}else if(c4 < a4 && c4 < b4 && c4 < d4){
    console.log("Dasgal 16 : " + c4 + " baga too")
}else if(d4 < a4 && d4 < b4 && d4 < c4){
    console.log("Dasgal 16 : " + d4 + " baga too")
};

// Нийлбэр 80
var a5 = 85;
    b5 = 75;
    c5 = 96;
    d5 = 69;
if(a5 <= 80)
    a5 = 0
if(b5 <= 80)
    b5 = 0
if(c5 <= 80)
    c5 = 0
if(d5 <= 80)
    d5 = 0
{console.log("Dasgal 17 : " + "85 75 96 69 --> 80-s ih toonii niilber : " + (a5 + b5 + c5 + d5))
};

// Үржвэр 5
var a6 = 3;
    b6 = 6;
    c6 = 2;
    d6 = 4;
if(a6 > 5)
    a6 = 1
if(b6 > 5)
    b6 = 1
if(c6 > 5)
    c6 = 1
if(d6 > 5)
    d6 = 1
{console.log("Dasgal 18 : " + "3 6 2 4 --> 5-s baga toonii urjver : " + a6 * b6 * c6 * d6)
};

// Тэгш тоонуудын нийлбэр
var numa = 10;
    numb = 3;
    numc = 5;
if(numa % 2)
    numa = 0
if(numb % 2)
    numb = 0
if(numc % 2)
    numc = 0
{console.log("Dasgal 19 : " + "10 3 5 --> tegsh toonii niilber : " + (numa + numb + numc))
};

// Сондгой тоонуудын үржвэр.  Output 15
var numq = 5;
    numw = 2;
    nume = 3;
if(numq % 2 == 0)
    numq = 1
if(numw % 2 == 0)
    numw = 1
if(nume % 2 == 0)
    nume = 1
{console.log("Dasgal 20 : " + "5 2 3 --> sondgoi toonii urjver : " + (numq * numw * nume))        
};

// 5-тай тэнцүү тоонуудын тоо.  Output 2
var too11 = 2;
    too12 = 5;
    too13 = 5;
if(too11 == 5)
    too11 = 1
else(too11 = 0)
if(too12 == 5)
    too12 = 1
else(too12 = 0)
if(too13 == 5)
    too13 = 1
else(too13 = 0);
    {console.log("Dasgal 21 : " + "2 5 5 --> 5-s deesh toonuud " + (too11 + too12 + too13))
};

// 3-д хуваагддаг тоонуудын тоо.  Output 3
var too21 = 3;
    too22 = 12;
    too23 = 8;
    too24 = 9;
if(too21 % 3 == 0)
    too21 = 1
else(too21 = 0)
if(too22 % 3 == 0)
    too22 = 1
else(too22 = 0)
if(too23 % 3 == 0)
    too23 = 1
else(too23 = 0)
if(too24 % 3 == 0)
    too24 = 1
else(too24 = 0);
    {console.log("Dasgal 22 : " +"3-t huvaagddag toonuudiin too " + (too21 + too22 + too23 + too24))
};

// 11-д хуваагддаггүй тоонуудын нийлбэр.  Output 50
var too31 = 7;
    too32 = 22;
    too33 = 13;
    too34 = 30;
if(too31 % 11 == 0)
    too31 = 0
if(too32 % 11 == 0)
    too32 = 0
if(too33 % 11 == 0)
    too33 = 0
if(too34 % 11 == 0)
    too34 = 0
{console.log("Dasgal 23 : " + (too31 + too32 + too33 + too34))
};

// 10-аас их  YES эсвэл NO гэж хэвлэгдэнэ.  Inpit 11 Output Yes
var too41 = 11;
if(too41 > 10){
    console.log("Dasgal 24 : "  +(too41 > 10))
};

// 5-аас бага  YES эсвэл NO гэж хэвлэгдэнэ.  inpit 4 Output Yes
var too51 = 4;
if(too51 < 5){
    console.log("Dasgal 25 : " + (too51 < 5))
};

// Тэгш тоонууд YES  Тоо тус бүрийг шалгаад нэг нэг мөрөнд хариуг хэвлэ.  NO YES NO
var too61 = 3;
    too62 = 4;
    too63 = 5;
if(too61 % 2 == 0){
    console.log("Dasgal 26 : " + too61 + " Tegsh")
}
if(too62 % 2 == 0){
    console.log("Dasgal 26 : " + too62 + " Tegsh")
}
if(too63 % 2 == 0){
    console.log("Dasgal 26 : " + too63 + " Tegsh")
};