
const food = prompt("اختر وجبتك المفضله")


// if (food==1) { console.log("بيتزا")}

// if (food==2) { console.log("بيرقر")}

// if (food==3) { console.log("فرايز")}

// if (food==4) { console.log("مع الاسف طلبك غير متوفر حاليا ")}

switch(food) {
    case ("1"):
  console.log("بيتزا")
      break;
    case ("2"):
       console.log("بيرقر")
      break;

      case ("3"):
        console.log("فرايز")
      break;
    default:
       console.log("مع الاسف طلبك غير متوفر حاليا")
        break;
  }


let number1 = prompt("ادخل رقم الطلب الاول ")
 let number2 = prompt( "ادخل رقم الطلب الثاني ")
 let last = prompt(" اختر العمليه(*/-/+/) ")
  

const x = parseInt(number1) ;
const y = parseInt(number2) ;

if (x && y)
{
    if(last=="*"){console.log(x*y)}

else if(last=="-"){console.log(x-y)}

else if(last=="+"){console.log(x+y)}


else if(last=="/"){console.log(x/y)}

else{console.log("العمليه غير صحيحه")}
}
else {console.log("احد الارقام غير صحيحه ")}

let age = 3
console.log(age) ;
if(age >= 4 && age <= 6 ){
    console.log("انت في الروضه")
}

else if ( age<= 17 && age <=7){console.log("انت في المدرسه")
}

else if ( age < 27 && age>=18){console.log("انت في الجامعه")}

else  {
    console.log("انت لا تستوفي الشروط")
}
