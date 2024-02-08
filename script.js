document.addEventListener("DOMContentLoaded", function () {
    // Get all elements with class "word"
    var wordElements = document.querySelectorAll(".word");
  
    // Initialize index to keep track of the current visible word
    var currentIndex = 0;
  
    // Function to show the current word and hide the rest
    function showWord() {
      // Hide all words
      wordElements.forEach(function (word) {
        word.style.display = "none";
      });
  
      // Show the current word
      wordElements[currentIndex].style.display = "inline";
  
      // Increment index or reset to 0 if it reaches the end
      currentIndex = (currentIndex + 1) % wordElements.length;
    }
  
    // Call the showWord function at a regular interval (2 seconds in this case)
    setInterval(showWord, 2000);
  });
  



  //circle............................................
  const circles = document.querySelectorAll('.circle');
  circles.forEach(elem => {
      var dots = parseInt(elem.getAttribute("data-dots")); // Parse dots attribute to an integer
      var marked = parseInt(elem.getAttribute("data-percent")); // Parse percent attribute to an integer
      var percent = Math.floor(dots * marked / 100);
      var points = "";
      var rotate = 360 / dots;
  
      for (let i = 0; i < dots; i++) {
          points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
      }
      elem.innerHTML = points;
  
      const pointsMarked = elem.querySelectorAll('.points');
      for (let i = 0; i < percent; i++) {
          pointsMarked[i].classList.add('marked');
      }
  });
  



  let menuLi = document.querySelectorAll('header ul li a');
  let sections = document.querySelectorAll('section');
  
  function activeMenu() {
      let len = sections.length;
      while (--len && window.scrollY + 97 < sections[len].offsetTop) {}
      menuLi.forEach(sec => sec.classList.remove("active"));
      menuLi[len].classList.add("active");
  }
  
  activeMenu();
  window.addEventListener("scroll", activeMenu);
  
  const header = document.querySelector("header");
  window.addEventListener("scroll", function() {
    header.classList.toggle("sticky", window.scrollY > 50);
  });
  