// 1. Дэлгэцэнд IOI гэж 3 удаа хэвлэ.
// for(var i=1; i<=3; i++){
//     console.log(i + ".IOI");
// }

// 2. IOI үгийг өгөгдсөн тоон удаа хэвлэ.
// n = +prompt("Too oruul");
// for(var i=1; i<=n; i++){
//     console.log(i + ".IOI");
// }

// 3. Эхний n тооны нийлбэрийг тодорхой давталт ашиглан ол.
// var n = +prompt("Too oruul");
// var sum = 0;
// for(var i=1; i<=n; i++){
//     sum=sum+i;
// }
// console.log(sum);

// 4. n!
// 5! --> 5*4*3*2*1
// var n = 5;
// var fact = 1;
// for(var i=1; i<=n; i++){
//     console.log(i);
//     fact = fact * i;
// }
// console.log(n + " toonii factorial bol " + fact);

// 5. 100-гийн тоог тодорхой давталт ашиглан өгөгдсөн тоон удаа нэм.
// var n = +prompt("Too oruul");
// var sum = 0;
// for(var i=1; i<=n; i++){
//     sum=sum+100;
// }
// console.log(sum);

// 6. Өгөгдсөн тоог тодорхой давталт ашиглан өгөгдсөн тоон удаа нэм.
// var n=+prompt("Too oruul");
// var a=50;
// for(var i=1; i<=n; i++);
// console.log(a*n);

// 7. 2-ын өгөгдсөн тоон зэргийг ол. /2-ын n зэрэг гэдэг нь 2*2*...*2. Жишээ нь 2-ын 3 зэрэг 2*2*2=8 /
// var n = 2;
// var mult = n**5;
// for(var i=1; i<=n; i++){
//     console.log(mult);
// }
// ~~~~~~~~~~~~~~~
// 7. a toonii n zereg
// var a = 3; n = 4;
// var zereg = 1;
// for(var i = 1; i <= n; i++){
//     zereg = zereg * a;
// }
// consonle.log(a + " toonii " + n + " zereg bol " + zereg);


// 8. Өгөгдсөн тооны n зэргийг ол.
// var n = +prompt("Too oruul")
// var too = 3;
// var mult = too ** n;
// for(var i=1; i<=n; i++);
// console.log(mult);

// 9. Тоон дүн 3-аас их бол тэнцсэнд тооцно. Бусад тохиолдолд унана. Өгөгдсөн тоон дүн тэнцсэн эсэхийг тогтоо. !!
// var too = 3;
// var point = +prompt("Too oruul")
// switch(too){
//     case point >= too:
//         console.log(point + " Tentssen" || " Tentseegui");
//         break;
//     case point >= too:
//         console.log(point + " Tentssen" || " Tentseegui");                                  
//         break;
//     case point >= too:
//         console.log(point + " Tentssen" || " Tentseegui");
//         break;
//     case point >= too:
//         console.log(point + " Tentssen" || " Tentseegui");
//         break;
//     default : 
//         console.log("2-5 hoorond oruul");
//         break;
// }

// 10. Өгөгдсөн тоон дүнг үсгэн дүн рүү шилжүүл.
// var a = 2; 
// var b = 3; 
// var c = 4; 
// var d = 5;
// var f = +prompt("Too oruul");
// switch(f){
//     case a:
//         console.log(f + " Muu");
//         break;
//     case b: 
//         console.log(f + " Dund");
//         break;
//     case c:
//         console.log(f + " Sain");
//         break;
//     case d:
//         console.log(f + " Onts");
//         break;
//     default :
//         console.log("2, 3, 4 5-s ali negiig oruulna uu");
//         break;
// }

// 11. Өгөгдсөн тоон үнэлгээг үсгэн үнэлгээнд шилжүүл. !!
// var dun = +prompt("Too");
// switch(dun){
//     case dun > 89:
//         console.log("A");
//         break;
//     case dun > 79:
//         console.log("B");
//         break;
//     case dun > 69:
//         console.log("C");
//         break;
//     case dun > 59:
//         console.log("D");
//         break;
//     case dun <= 59:
//         console.log("F");
//         break;
// }

// 12. Долоо хоногийн дугаар өгөгдөхөд харгалзах гарагийг англиар хэвлэ. Эхний үсгийг л томоор бичнэ.
// var day = prompt("Udur")
// switch(day){
//     case "1":
//         console.log("Monday")
//         break;
//     case "2":
//         console.log("Tuesday")
//         break;
//     case "3":
//         console.log("Wednesday")
//         break;
//     case "4":
//         console.log("Thursday")
//         break;
//     case "5":
//         console.log("Friday")
//         break;
//     case "6":
//         console.log("Saturday")
//         break;
//     case "7":
//         console.log("Sunday")
//         break;
//     default:
//         alert("1-7 hoorond oruulna uu")
//         break;
// }

// 13. Өгөгдсөн сар аль улиралд хамаарах вэ. Улирлыг англиар бичихдээ эхний үсгийг томоор бичнэ үү.
// var month = +prompt("Too");
// switch(month){
//     case 12:
//         console.log("Winter");
//         break;
//     case 1:
//         console.log("Winter");
//         break;
//     case 2:
//         console.log("Winter");
//         break;
//     case 3:
//         console.log("Spring");
//         break;
//     case 4:
//         console.log("Spring");
//         break;
//     case 5:
//         console.log("Spring");
//         break;
//     case 6:
//         console.log("Summer");
//         break;
//     case 7:
//         console.log("Summer");
//         break;
//     case 8:
//         console.log("Summer");
//         break;
//     case 9:
//         console.log("Autumn");
//         break;
//     case 10:
//         console.log("Autumn");
//         break;
//     case 11:
//         console.log("Autumn");
//         break; 
//     default:
//         console.log("1-12 оруул");
//         break;
// }




// 1. n!
// 5! --> 5*4*3*2*1

// var n = 5;
// var fact = 1;
// for(var i=1; i<=n; i++){
//     console.log(i);
//     fact = fact * i;
// }
// console.log(n + " toonii factorial bol " + fact);

// 2. a toonii n zereg
// var a = 3; n = 4;
// var zereg = 1;
// for(var i = 1; i <= n; i++){
//     zereg = zereg * a;
// }
// consonle.log(a + " toonii " + n + " zereg bol " + zereg);