/*1- Write a program that allow to user enter number then print it */

// var x=prompt("enter your number please");
// console.log( " your input -> " + x);

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*2- Write a program that take number from user then print yes if that number can divide by 3
and 4 otherwise print no
 */
// var x=prompt("enter your number please");
//  if(x%3==0 && x%4==0)
//  {
//      console.log("yes")
//  }
//  else {
//  console.log("No")
//  }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*3-Write a program that allows the user to insert 2 integers then print the max */

// var x=prompt("enter your  first number please");
// var y=prompt("enter your  second number please");
// if( Number(x)> Number(y))
// {
//     console.log( "Max = "+x)
// }
// else if(Number(x)<Number(y))
// {
//     console.log("Max = "+y)
// }
// else 
// {
//     console.log("please enter only numbers")
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*4- Write a program that allows the user to insert an integer then print negative if it is
negative number otherwise print positive */

// var x=prompt("enter your number please");
// if(Number(x)>0)
// {
      
//     console.log("it is a positive number -> " + x )
// }
//  else if( Number(x)<0)
// {
//     console.log("it is a negative number -> "+ x )
// }
// else if (x==0)
// {console.log("zero")}
// else
// {  
//     console.log("please enter only numbers ")
// }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/* 5-  Write a program that take 3 integers from user then print the max element
and the min element. */

// var x=prompt("enter your  first number please");
// var y=prompt("enter your  second number please");
// var z=prompt("enter your  third number please");
// var max ;
// var min ;

// if( Number(x)> Number (y) &&  Number (x)> Number(z)){   max= x;}
//  else if(Number(y)>Number(x) && Number(y)>Number(z)){max=y;}
//  else if(Number(z)>Number(x) && Number(z)>Number(y)){max=z;}
//  else { max= undefined;}

// if(Number(x)<Number(y) && Number(x)<Number(z)){   min= x;}
//  else if(Number(y)<Number(x) && Number(y)<Number(z)){min=y;}
//  else if(Number(z)<Number(x) && Number(z)<Number(y)){min=z;}
//  else { min= undefined;}


//  console.log("Max = " + max)
//  console.log("Min = " + min)





//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*7/6-Write a program that allows the user to insert integer number then
check If a number is oven or odd */
// var x=prompt("enter your number please");

//  if(Number(x)%2==0)
//  {
//      console.log("it is an even number")

//  }
//  else if(Number(x)%2!=0)
//  {
//      console.log("it is an odd number")
//  }
//  else { console.log("please enter  only numbers ")}

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*8-Write a program that take character from user then if it is vowel
 chars (a,e,I,o,u)then print vowel otherwise print consonant*/
/*
var x=prompt("enter your   number please");
if(x=="o" || x=="u"|| x=="i"|| x=="e"|| x=="a" )
{
    console.log(" it is a vowel character " + " -> "+x)
}
else{
    console.log("it is  a consonant" + " -> "+ x)
}*/

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*9-Write a programthat allows user to insert integer then print all 
numbers between 1 to that’s number*/

// var  x=prompt("enter your number please");
// for( var i=1;i<=x;i++)
// {
//     console.log(i);
// }

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*10-Write a program that allows userto insert integerthen print
 a multiplication table up to 12.*/

//  var x =prompt("enter your number please");
//  for(var i=1 ;i<=12;i++)
//  {
    
//     console.log(i*x);
//  }


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*11-Write a program that allows to user to insert number 
then print all even numbers between 1 to this number*/
  
    // var x =prompt("enter your number please");
    // for(var i=1 ;i<x;i++)
    // {
    //     if(i%2==0)
    //     {
    //         console.log(i);
    //     }
    // }
//// / ////////////////////////////////////////////////////////////////////////////////////////////////////// / /////
 /*12- Write a program that take two integers then print the power*/

    //  var x =prompt("enter your first  number please");
    //  var y =prompt("enter your  second number please");
    //  var result=1;
    //  for(var i =y ; i>0 ;i--)
    //  {
    //     var result=result*x;
        
    //  }
    //   console.log(result);
    /*12- Write a program to enter marks of five subjects and
    calculate total, average and
    percentage.*/

    // var  one=prompt("enter your first number");
    // var two=prompt("enter your second number");
    // var three=prompt("enter your third number");
    // var four=prompt("enter your fourth number");
    // var five=prompt("enter your fifth number");
    // sum= Number(one)+Number(two) +Number(three)+ Number(four)+ Number(five);
    // avr=sum/5;
    // persntage=[sum/500]*100;
    // console.log("sum = " + sum +" "+" avarage ="+ avr  +" "+ "percentage ="
    //  + persntage);


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
    /*13-Write a program to input month number and print number
     of days in that
          month.*/
        //   var  month=prompt("enter month number");
        //   if( month==1 || month==3 ||month==5 || month==7 || month==8||
        //     month==10 || month==12)
        //     {
        //         console.log("number of days = 31 ");
        //     }
        //     else if (month==2)
        //     {
        //         console.log("number of days = 28 or 29");
        //     }
        //     else if (month==4 ||  month==6 || month==9 || month==11)
        //     {
        //         console.log("number of days = 30");
        //     }
        //     else
        //     {
        //         console.log("please enter number between 1 to 12");
        //     }
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

        /* 14- Write a program to input marks of five subjects
                Physics, Chemistry, Biology, Mathematics and Computer
                , Find percentage and grade.
             */   
                
    // var  Physi=prompt("enter your mark in physics ");
    // var  totalPhysi=prompt("enter the total ");
    // var Chemis=prompt("enter your mark in chemistry");
    // var totalChemis=prompt("enter the total");
    // var Biolo=prompt("enter your mark in biology");
    // var totalBiolo=prompt("enter the total");
    // var  Math=prompt("enter your mark in mathemtics");
    // var  totalMath=prompt("enter the total");
    // var  Computer=prompt("enter your mark in computer ");
    // var  totalCompter=prompt("enter the total ");
                
    //  var percen1 =  [Number(Physi)/Number(totalPhysi)]*100;
    //  var percen2 =  [Number(Chemis)/Number(totalChemis)]*100;
    //  var percen3 =  [Number(Biolo)/Number(totalBiolo)]*100;
    //  var percen4 =  [Number(Math)/Number(totalMath)]*100;
    //  var percen5 =  [Number(Computer)/Number(totalCompter)]*100;

    //  if(percen1<=100&& percen1>=90){var grade1="A";}
    //  else if ( percen1<90&& percen1>=80 ) {var grade1="B";}
    //  else if ( percen1<80&& percen1>=70){var grade1="C";}
    //  else if ( percen1<70 && percen1>=60){var grade1="D";}
    //  else if ( percen1<60 && percen1>=40) {var grade1="E";}
    //  else if ( percen1<40){ var grade1="F";}
    //  else{ var grade1= undefined}

    //  if(percen2<=100&& percen2>=90){var grade2="A";}
    //  else if ( percen2<90&& percen2>=80 ) {var grade2="B";}
    //  else if ( percen2<80&& percen2>=70){var grade2="C";}
    //  else if ( percen2<70 && percen2>=60){var grade2="D";}
    //  else if ( percen2<60 && percen2>=40) {var grade2="E";}
    //  else if ( percen2<40){ var grade2="F";}
    //  else{ var grade2= undefined}

    //  if(percen3<=100&& percen3>=90){var grade3="A";}
    //  else if ( percen3<90&& percen3>=80 ) {var grade3="B";}
    //  else if ( percen3<80&& percen3>=70){var grade3="C";}
    //  else if ( percen3<70 && percen3>=60){var grade3="D";}
    //  else if ( percen3<60 && percen3>=40) {var grade3="E";}
    //  else if ( percen3<40){ var grade3="F";}
    //  else{ var grade3= undefined}

    //  if(percen4<=100&& percen4>=90){var grade4="A";}
    //  else if ( percen4<90&& percen4>=80 ) {var grade4="B";}
    //  else if ( percen4<80&& percen4>=70){var grade4="C";}
    //  else if ( percen4<70 && percen4>=60){var grade4="D";}
    //  else if ( percen4<60 && percen4>=40) {var grade4="E";}
    //  else if ( percen4<40){ var grade4="F";}
    //  else{ var grade4= undefined}

    //  if(percen5<=100&& percen5>=90){var grade45="A";}
    //  else if ( percen5<90&& percen5>=80 ) {var grade5="B";}
    //  else if ( percen5<80&& percen5>=70){var grade5="C";}
    //  else if ( percen5<70 && percen5>=60){var grade5="D";}
    //  else if ( percen5<60 && percen5>=40) {var grade5="E";}
    //  else if ( percen5<40){ var grade5="F";}
    //  else{ var grade5= undefined}


                  
    //  console.log("Percentage =" + percen1+ "  , Grade =" +grade1 ) 
    //  console.log("Percentage =" + percen2+ "  , Grade =" + grade2 ) 
    //  console.log("Percentage =" + percen3+ "  , Grade =" + grade3 ) 
    //  console.log("Percentage =" + percen4+ "  , Grade =" + grade4 ) 
    //  console.log("Percentage =" + percen5+ "  , Grade =" + grade5 ) 


///////////////////////////////////////////////////////////////////////////////////////////////////////////////////
             /*   15- Write a program to print total number of days in month*/


    //  var  month=prompt("enter month number");
    //  switch(Number(month))
    //  {  case 1:{ console.log("number of days = 31")} break;
    //     case 2:{ console.log("number of days = 28 or 29")} break;
    //     case 3:{ console.log("number of days = 31")} break;
    //     case 4:{ console.log("number of days = 30")} break;
    //     case 5:{ console.log("number of days = 31")} break;
    //     case 6:{ console.log("number of days = 30")} break;
    //     case 7:{ console.log("number of days = 31")} break;
    //     case 8:{ console.log("number of days = 31")} break;
    //     case 9:{ console.log("number of days = 30")} break;
    //     case 10:{ console.log("number of days = 31")} break;
    //     case 11:{ console.log("number of days = 30")} break;
    //     case 12:{ console.log("number of days = 31")} break; }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
          /*   16- Write a program to check whether an alphabet is vowel or consonant */ 
    //   var x=prompt("enter your  character ");
    //   switch(x)
    //   {
    //     case 'a':  {console.log(" it is a vowel character " + " -> "+x) ;} break;
    //     case 'i':  {console.log(" it is a vowel character " + " -> "+x) ;}break;
    //     case 'o':  {console.log(" it is a vowel character " + " -> "+x) ;}break;
    //     case 'u':  {console.log(" it is a vowel character " + " -> "+x) ;}break;
    //     case 'e':  {console.log(" it is a vowel character " + " -> "+x) ;}break;
    //     default:
    //         console.log("it is  a consonant" + " -> "+ x)

    //   }
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*17- Write a program to find maximum between two numbers */
   //  var x=prompt("please enter first number ");
   //  var y=prompt("please enter second number ");
   //  switch(Number(x)>Number(y))
   //  { 
   //     case false:{console.log(" Max = " + y);}break;
   //     case true:{console.log("Max = " + x);}break;
  
   //  }


 //////////////////////////////////////////////////////////////////////////////////////////////////////////////////
 /*18- Write a program to check whether a number is even or odd*/


   //    var x=prompt("please enter your number ");
 
   //  switch(Number(x)%2==0)
   //     { 
   //     case false:{console.log(" it is an odd number - > " + x);}break;
   //     case true:{console.log("it is an even number ->  " + x);}break;
   //     }

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
/*19- Write a program to check whether a number is positive or negative or zero */

// var x=prompt("please enter your number ");

//  switch(Number(x)>0)
//      { 
//      case false:{console.log(" it is a negative number- > " + x);}break;
//      case true:{console.log("it is a positive number ->  " + x);}break;
//      }
///////////////////////////////////////////////////////////////////////////////////////////// / /////////////////////


/*20- Write a program to create Simple Calculator */

// var num1=prompt("please enter first number ");
// var num2=prompt("please enter second number ");
// var operations=prompt("enter your operation  [   + ,  - ,  *,  /   ] " )
//   switch(operations)
//   {
//     case '-':{ console.log( num1+' - '+num2 +' = '+ [ Number(num1)-Number(num2)]);}break;
//     case '+':{ console.log( num1+' + '+num2 +' = ' + [Number(num1)+Number(num2)]);}break;
//     case '*':{ console.log( num1+' * '+num2 +' = ' + [Number(num1)*Number(num2)]);}break;
//     case '/':{ console.log( num1+' / '+num2 +' = ' + [Number(num1)/Number(num2)]);}break;
//     default:console.log("enter a correct operation please")
//   }

  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////









             
             
                 
                 
              

  





    





