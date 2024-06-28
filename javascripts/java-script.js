document.addEventListener("DOMContentLoaded", function() {
 //change posters
 let images = document.querySelectorAll('.poster img');
 let descriptions = document.querySelectorAll('.book_description p');
 let currentIndex = 0;

 function updateContent() {
     images.forEach(function(img, index) {
         img.classList.toggle('active', index === currentIndex);
     });
     descriptions.forEach(function(desc, index) {
         desc.classList.toggle('active' , index === currentIndex);
     });
 }

 let nextButton = document.querySelector('.next');
 let prevButton = document.querySelector('.prev');

 if (nextButton && prevButton) {
     nextButton.addEventListener('click', function() {
         currentIndex = (currentIndex + 1) % images.length;
         updateContent();
     });
     prevButton.addEventListener('click', function() {
         currentIndex = (currentIndex - 1 + images.length) % images.length;
         updateContent();
     });
     updateContent();
 }



 let pages = document.querySelectorAll('.pages img');
 let currentIndexpage = 0;

 function updateContentpage() {
     pages.forEach(function(img, index) {
         img.classList.toggle('activep', index === currentIndexpage);
     });
 }

 let nextButtonp = document.querySelector('.forwards');
 let prevButtonp = document.querySelector('.backwards');

 if (nextButtonp && prevButtonp) {
     nextButtonp.addEventListener('click', function() {
         currentIndexpage = (currentIndexpage + 1) % pages.length;
         updateContentpage();
     });
     prevButtonp.addEventListener('click', function() {
         currentIndexpage = (currentIndexpage - 1 + pages.length) % pages.length;
         updateContentpage();
     });
     updateContentpage();
}


const setlistener = (element, type, handler) => {
    if(!element){
        return;
    }
    element.addEventListener(type, handler);
    return()=>{
        element.removeaddEventListener(type,handler);
    };
  }

  let form = document.querySelector('.form_content');
  let contact = document.querySelector('.contact');
  let infa = document.querySelector('.information');
  setlistener(contact, 'mouseenter', function(){
    contact.classList.add('none');
    form.classList.add('block');
    infa.classList.add('none');
  })


  let close = document.querySelector('.close');
  let manifest = document.querySelector('.manifest');
  setlistener(close, 'click', function(){
    close.classList.add('none');
    manifest.classList.add('none');
    audio.pause();
  })



  let book = document.querySelector('.book');
  setlistener(book, 'mouseenter', function(){
    book.classList.add('none');
  })


  let events = document.querySelector('.events');
  setlistener(events, 'mouseenter', function(){
    events.classList.add('none');
  })
  let shop = document.querySelector('.shop');
  setlistener(shop, 'mouseenter', function(){
    shop.classList.add('none');
  })

  let but = document.querySelector('.t');
  let pic = document.querySelector('.t1');
  setlistener(but, 'click', function(){
    pic.classList.add('none');
  })

  let ticket = document.querySelector('.ticket');
  setlistener(ticket, 'mouseenter', function(){
    ticket.classList.add('none');
  })

  let e1 = document.querySelector('.e1');
  setlistener(e1, 'mouseenter', function(){
    e1.classList.add('none');
  })
  let e2 = document.querySelector('.e2');
  setlistener(e2, 'mouseenter', function(){
    e2.classList.add('none');
  })
  let e3 = document.querySelector('.e3');
  setlistener(e3, 'mouseenter', function(){
    e3.classList.add('none');
  })
  let e4 = document.querySelector('.e4');
  setlistener(e4, 'mouseenter', function(){
    e4.classList.add('none');
  })
  let e5 = document.querySelector('.e5');
  setlistener(e5, 'mouseenter', function(){
    e5.classList.add('none');
  })
  let e7 = document.querySelector('.e7');
  setlistener(e7, 'mouseenter', function(){
    e7.classList.add('none');
  })
  let e6 = document.querySelector('.e6');
  setlistener(e6, 'mouseenter', function(){
    e6.classList.add('none');
  })
  let e8 = document.querySelector('.e8');
  setlistener(e8, 'mouseenter', function(){
    e8.classList.add('none');
  })
  let e9 = document.querySelector('.e9');
  setlistener(e9, 'mouseenter', function(){
    e9.classList.add('none');
  })
  





  let audio = document.getElementById('myAudio');
  let playButton = document.querySelector('.no');
  playButton.addEventListener('click', function() {
  audio.play();
  audio.volume = 1;
  });
  
});