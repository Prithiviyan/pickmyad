// Sticky Navbar

var navbar = document.getElementById("navbar")

window.addEventListener("scroll",()=>{
  if(window.pageYOffset > 10){
    navbar.classList.add('sticky')
  
   

    }else {
      navbar.classList.remove('sticky');
      }
})

// Top- Search Bar

var searchBar = document.getElementById("searchBar")

window.addEventListener("scroll",()=>{
  if(window.pageYOffset >350){
    searchBar.style.display="block"
  }
  else{
    searchBar.style.display="none"
    }
})

// container3

var container3 = document.getElementById("border");

window.addEventListener("scroll",()=>{
  var container3Top = container3.getBoundingClientRect().top;
  var container3Bottom = container3.getBoundingClientRect().bottom;

  if(container3Top>810 || container3Bottom<480){
    container3.classList.remove("shrink")
  }
  else if(container3Top<720){
    container3.classList.add("shrink")
  }

})

// container7 card According


// var items=document.querySelectorAll(".faq-list")
// var para = document.querySelector(".li-para")

// items.forEach(li=>{
//   var lichild=li.children[0];
//   var lispan=li.children[1];
//   let list=true;
 
//   lichild.addEventListener("click",()=>{
   

//     if (list) {

//       lispan.style.display="block";
//       list=false;
//       console.log(list);
//   } 
//   else{
//     lispan.style.display="none";

//     list=true;
//   }
//  })

// })





document.addEventListener('DOMContentLoaded', function() {
  var paragraphs = document.querySelectorAll('.li-para');
  
  function showParagraph(index) {
    paragraphs.forEach(function(para, i) {
      if (i === index) {
        para.style.display = 'block';
      } else {
        para.style.display = 'none';
      }
    });
  }

  

  var listItems = document.querySelectorAll('.faq-item');

  listItems.forEach(function(item, index) {
    item.addEventListener('click', function() {
      showParagraph(index);
    });
  });
});



function setActive(element) {
  // Remove active class from all list items
  const allItems = document.querySelectorAll('.faq-item');
  allItems.forEach(item => item.classList.remove('active'));

  // Add active class to the clicked item
  element.classList.add('active');
}








// var paragraphs = document.querySelectorAll('.li-para');
      
// function showParagraph(index) {
//   paragraphs.forEach(function(para, i) {
//     if (i === index) {
//       para.style.display = 'block';
//     } else {
//       para.style.display = 'none';
//     }
//   });
// }














 
  

















