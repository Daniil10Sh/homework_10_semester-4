// function getYear(date) {
//     return date.getFullYear();
//   }
  
//   const date = new Date();
//   console.log(getYear(date)); 
  




// function getMonth(date) {
//     return date.getMonth() + 1;
//  }

//   const date = new Date(); 
//   console.log(getMonth(date)); 
  

// function getDayOfMonth(date) {
//     return date.getDate();
//   }
  
//   const date = new Date(); 
//   console.log(getDayOfMonth(date)); 
  


// function getHours(date) {
//   return date.getHours();
// }

// const date = new Date(); 
// console.log(getHours(date)); 


// function getMinutes(date) {
//   return date.getMinutes();
// }

// const date = new Date(); 
// console.log(getMinutes(date)); 



// function getSeconds(date) {
//   return date.getSeconds();
// }

// const date = new Date(); 
// console.log(getSeconds(date)); 


const isWeekend = date => {
    const day = date.getDay();
    return day === 0 || day === 6;
  };
  
  console.log(isWeekend(new Date('2024-09-21'))); 
  console.log(isWeekend(new Date('2024-09-22'))); 
  console.log(isWeekend(new Date('2024-09-23'))); 
  