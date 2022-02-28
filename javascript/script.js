console.log("hi!!");

const menu = document.querySelector('.menu');
const enroll = document.querySelector('.enroll');
const department = document.querySelector('.department');
let MyWork = document.querySelector('#ones');
let introduction = document.querySelector('#zeros');
let popularProject = document.querySelector('#twos');

let first = document.querySelector('#firsts');
let second = document.querySelector('#seconds');
let third = document.querySelector('#thirds');
// const introduction=document.querySelector('.introduction');
// const mywork=document.querySelector('.MyWork');
let prev = 0;

function hamburger() {
   if (screen.width >= 645 && screen.width <= 926) {
         enroll.classList.toggle("enrollbroth");
   }
   else if (screen.width >= 500 && screen.width <= 644) {
         department.classList.toggle("deep");
   }
   else if (screen.width >= 300 && screen.width <= 499) {
         department.classList.toggle("deep");
   }
   else if (screen.width <= 299) {
         department.classList.toggle("deep");

   }
}

function btn(e) {
   if (e === 0) {
      if (prev != 0) {
         if (prev === 1) {
            MyWork.style.display = "none";
            second.classList.remove('Active');
            document.querySelector('.introduction').style.display = "flex";
            //   introduction.style.display="flex";
            //   document.querySelector('#firsts').classList.add('Active');
            first.classList.add('Active');
            prev = 0;
         }
         else if (prev === 2) {
            popularProject.style.display = "none";
            third.classList.remove('Active');
            document.querySelector('.introduction').style.display = "flex";
            // document.querySelector('#firsts').classList.add('Active');
            first.classList.add('Active');
            prev = 0;
         }
      }
   }
   else if (e === 1) {
      if (prev != 1) {
         if (prev === 0) {
            introduction.style.display = "none";
            first.classList.remove('Active');
            document.querySelector('.MyWork').style.display = "flex";
            //   document.querySelector('#seconds').classList.add('Active');
            second.classList.add('Active');
            prev = 1;
         }
         else if (prev === 2) {
            popularProject.style.display = "none"
            third.classList.remove('Active');
            document.querySelector('.MyWork').style.display = "flex";
            // document.querySelector('#seconds').classList.add('Active');
            second.classList.add('Active');
            prev = 1;
         }
      }
   }
   else if (e === 2) {
      if (prev != 2) {
         if (prev === 0) {
            introduction.style.display = "none";
            first.classList.remove('Active');
            document.querySelector('.popularProject').style.display = "flex";
            // document.querySelector('#thirds').classList.add('Active');
            third.classList.add('Active');
            prev = 2;
         }
         else if (prev === 1) {
            MyWork.style.display = "none"
            second.classList.remove('Active');
            document.querySelector('.popularProject').style.display = "flex";
            // document.querySelector('#thirds').classList.add('Active');
            third.classList.add('Active');
            prev = 2;
         }
      }
   }
}
