let one = document.querySelector('.one')
let two = document.querySelector(".two")
let three = document.querySelector(".three")
let four = document.querySelector(".four")
let img1 =document.querySelector(".img1")
let img2 =document.querySelector(".img2")
let img3 =document.querySelector(".img3")
let img4 =document.querySelector(".img4")
let plus = document.querySelectorAll(".class")
let oneExpand = false
let twoExpand = false
let threeExpand = false
let fourExpand = false
function expand (num){
     if (num == 1 ){
        if (oneExpand){
            one.style.display = "none";
            oneExpand= false
            img1.setAttribute('src', "assets/images/icon-plus.svg")
        }
        else{
            one.style.display = "block";
            oneExpand= true
            img1.setAttribute('src', "assets/images/icon-minus.svg")
            
        }
     }
     else if (num == 2){
        if (twoExpand){
            two.style.display = "none";
            twoExpand =false
            img2.setAttribute('src', "assets/images/icon-plus.svg")
        }
        else{
            two.style.display = "block";
            twoExpand =true
            img2.setAttribute('src', "assets/images/icon-minus.svg")
        }
     }
     else if (num == 3){
        if (threeExpand){
            three.style.display = "none";
            threeExpand =false
            img3.setAttribute('src', "assets/images/icon-plus.svg")
        }
        else{
            three.style.display = "block";
            threeExpand =true
            img3.setAttribute('src', "assets/images/icon-minus.svg")
        }
     }
     else if (num == 4){
        if (fourExpand){
            four.style.display = "none";
            fourExpand =false
            img4.setAttribute('src', "assets/images/icon-plus.svg")
        }
        else{
            four.style.display = "block";
            fourExpand =true
            img4.setAttribute('src', "assets/images/icon-minus.svg")
        }
     }
}