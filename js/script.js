const myCarouselElement = document.querySelector('#myCarousel')

const carousel = new bootstrap.Carousel(myCarouselElement, {
  interval: 2000,
  touch: false
})


function aboutMe(activity){
  var tennis = "Add ten years to your life - start playing tennis. The game of tennis has always been a big part of my family. Now, I too am loving the game.";
  var music = "I love music.";
  var petey = "I love my cat Petey.";
  var lifestyle = "Mind, body, and soul.";

  var buttons = document.getElementsByClassName("about-me-items");
  for( var i = 0; i < buttons.length; i++){
    buttons[i].style.textDecoration = "";
  }
  
  switch(activity){
    case "tennis": 
      document.getElementById("about-me").innerHTML = tennis;
      document.getElementById("tennis").style.textDecoration = "underline";
     
      break;
    case "music": 
      document.getElementById("about-me").innerHTML = music;
      document.getElementById("music").style.textDecoration = "underline";
        break;
    case "petey":
      document.getElementById("about-me").innerHTML = petey;
      document.getElementById("petey").style.textDecoration = "underline";
        break;
    case "lifestyle":
      document.getElementById("about-me").innerHTML = lifestyle;
      document.getElementById("lifestyle").style.textDecoration = "underline";
          break;
  }
}