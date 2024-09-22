
//   // ***************
//   console.log("hello");
//   var arr=[2,5,46,578];
//   arr.push("MAhmoud");//هيضيف لي العنصر "Mahmoud"في اخر ال array
//   document.writeln(arr,"<br>");
// // **************
// arr.pop();//هيحذف لي اخر عنصر من ال array
// document.write(arr,"<br>");
// arr.unshift("Frist Element");//بتضيف لي عنصر ولكن في اول ال array
// document.write(arr,"<br>");
// arr.shift();
// document.write(arr,"<br>");
// // Spread operaters هيفرطلي عناصر المصفوفه هيخليي كل عنصر لوحده محتفظ بنفسه
// var arr2=["Alaa","Mahmoud","Ahmed"];
// document.write(arr+arr2,"<br>")//هلاحظ انه هنا جبلي ال 578 بجوار كلمة Alaa بالظبط مع اعتبارهم عنصر واحد 
// // document.write([...arr,arr2]);
// document.write([arr,...arr2],"<br>");
// // ****sort(): بترتب لي عناصر المصفوفة من الصغير للكبير علي حسب الاسكي كود بتاع كل عنصر 
// var arr3=[6,5,4,3,2,1,0];
// arr3.sort();
// document.write(arr3,"<br>");
// // *****indexof():تعرفني مكان العنصر بداخل المصفوفة 
// // *****لو اعنصر موجود  يبقي بتطبعلي قيمته واو مش موجود بتطبعلي -1 
// document.write(arr3.indexOf(5));

/*LAb 2  task 1*//*
 var text="Hello from React course at ITI ";
 var test=prompt("Enter your word !");
 text.trim();
// var arr=[3,4,6,5,"Mahmoud"];
// arr.splice(1,4,"alaa","fff","Mmm");
// console.log(arr);
// text.includes("r");
 if(text.includes(test)==true){
    //  document.write("It is include ");  
    alert("the word is exist");

    test.trim();
    document.write("The position of word=",text.indexOf(test));


    
    // document.write("word position is =");
    // document.write(indexOf("R"));
 }else{
  document.write("The word doesn't exist");
 }*/



//  *****task 2
// var arr=[5,45,6,7,3,21,6];
// for(var i=0;i<arr.length;i++){
//   document.write("index "+arr[i]+" =");
// document.write(arr.indexOf(arr[i])+"<br>");
// }
                     
// document.write(arr.indexOf)
//   var arr=[9,7,5,6,4,3,5];
// function equalIndexOf(){
// for(var i=0;i<arr.length;i++){
// document.write("Number "+arr[i]+"position is index "+i+"<br>") ;
//  }
//   //  equalIndexOf();
// }
// equalIndexOf();



// *******task 3*****************a
//   var value1=prompt("Enter  value 1 to sorting ");
//   var value2=prompt("Enter  value 2 to sorting ");
//   var value3=prompt("Enter  value 3 to sorting ");
//   var value4=prompt("Enter  value 4 to sorting ");
//   var value5=prompt("Enter  value 5 to sorting ");

// document.write("the Ascending الترتيب التصاعدي <br>")
//   var arr=[value1,value2,value3,value4,value5];
// document.write("<br>"+arr.sort()+"<br>");//لماذا ال br مش بتشتغل هنا 

// *****Lab 1 ***TAsk1 
var n1=+prompt("Enter num1 😗:");
var n2=+prompt("Enter num2  🥱4:");
var n3=+prompt("Enter num3 🥱4:");
var n4=+prompt("Enter num4 🥱4:");
var n5=+prompt("Enter num5 🥱4:");
// var array=[n1,n2,n3,n4,n5];
          var sum=n1+n2+n3+n4+n5;
if(sum>0 && sum<100){
  document.write("sum 🤐🤐 = "+sum);
}else{
  document.write("Please! Enter number between 0>100🤨 " );
}

// ********task2****
// function numberE(){
//   var str=prompt("Enter string value 😊:");
//   var numE=0;
//   for(var i=0;i<str.length;i++){
//     if(str[i]=='e'){
//           numE++;
//     }
//   }
//   document.write(numE);
// }
// numberE();

// ******task 3
// var hearsTags=prompt("Enter the Messege !");
// for(var i=1;i<=6;i++){
//   document.write( `<h${i}>${hearsTags}</h${i}>`);
//     // document.body.annerHtml(hearsTags);
// }