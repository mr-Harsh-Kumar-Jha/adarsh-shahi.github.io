console.log("hi!!");

const menu = document.querySelector('.menu');
const enroll = document.querySelector('.enroll');
const department = document.querySelector('.department');
// const introduction=document.querySelector('.introduction');
// const mywork=document.querySelector('.MyWork');
let prev = 0;

if (screen.width >= 645 && screen.width <= 926) {
   menu.addEventListener('click', () => {
      enroll.classList.toggle("enrollbroth");
   })
}
else if (screen.width >= 500 && screen.width <= 644) {
   menu.addEventListener('click', () => {
      department.classList.toggle("deep");
   })
}
else if (screen.width >= 300 && screen.width <= 499) {
   menu.addEventListener('click', () => {
      department.classList.toggle("deep");
   })
}
else if (screen.width <= 299) {
   menu.addEventListener('click', () => {
      department.classList.toggle("deep");
   })
}



function btn(e) {
   if (e === 0) {
      if (prev != 0) {
         if (prev === 1) {
              document.querySelector('#ones').style.display="none"
              document.querySelector('.introduction').style.display="flex";
              prev=0;
         }
         else if(prev===2){
            document.querySelector('#twos').style.display="none"
            document.querySelector('.introduction').style.display="flex";
            prev=0;
         }
      }
   }
   else if(e===1){
      if(prev!=1){
         if(prev===0){
           document.querySelector('#zeros').style.display="none";
           document.querySelector('.MyWork').style.display="flex";
            prev=1;
         }
         else if(prev===2){
            document.querySelector('#twos').style.display="none"
            document.querySelector('.MyWork').style.display="flex";
            prev=1;
         }
      }
   }
   else if(e===2){
      if(prev!=2){
         if(prev===0){
            document.querySelector('#zeros').style.display="none"
            document.querySelector('.popularProject').style.display="flex";
            prev=2;
         }
         else if(prev===1){
            document.querySelector('#ones').style.display="none"
            document.querySelector('.popularProject').style.display="flex";
            prev=2;
         }
      }
   }
}
