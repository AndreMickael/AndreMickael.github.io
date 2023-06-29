
    // Prelodaer

    window.addEventListener("load", function() {
        document.body.classList.add("loaded");
    });

    // Navbar Change The Active on Click
    window.addEventListener("load", function() {
        const navLinks = document.querySelectorAll(".nav-link");
        
        navLinks.forEach(function(link) {
          link.addEventListener("click", function(event) {
            event.preventDefault();
            
            const targetId = link.getAttribute("href");
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
              const targetOffsetTop = targetElement.offsetTop;
              
              window.scrollTo({
                top: targetOffsetTop,
                behavior: "smooth"
              });
              
              // Remove active class from all links
              navLinks.forEach(function(link) {
                link.classList.remove("active");
              });
              
              // Add active class to clicked link
              link.classList.add("active");
            }
          });
        });
      });

      // Skills Progress
      window.addEventListener("load", function() {
        // Update the progress bar width and skill percentage
        function updateSkillProgress() {
          const skills = [
            { id: "html-css-progress", percentage: 100 },
            { id: "javascript-progress", percentage: 90 },
            { id: "php-progress", percentage: 90 },
            { id: "ml-da-progress", percentage: 85 },
            { id: "design-progress", percentage: 80 },
            { id: "db-progress", percentage: 100 },
          ];
          
          skills.forEach(function(skill) {
            const progressElement = document.getElementById(skill.id);
            const percentageElement = document.getElementById(skill.id.replace("progress", "percentage"));
            
            if (progressElement && percentageElement) {
              progressElement.style.width = skill.percentage + "%";
              percentageElement.textContent = skill.percentage + "%";
            }
          });
        }
        
        // Call the function on initial load
        updateSkillProgress();
      });


      // Smooth Scrolling
      $(document).ready(function(){
        // Add smooth scrolling to all links
        $("a").on('click', function(event) {
      
          // Make sure this.hash has a value before overriding default behavior
          if (this.hash !== "") {
            // Prevent default anchor click behavior
            event.preventDefault();
      
            // Store hash
            var hash = this.hash;
      
            // Using jQuery's animate() method to add smooth page scroll
            // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
            $('html, body').animate({
              scrollTop: $(hash).offset().top
            }, 800, function(){
         
              // Add hash (#) to URL when done scrolling (default click behavior)
              window.location.hash = hash;
            });
          } // End if
        });
      });

    // Change navbar active class on scroll
    document.addEventListener("DOMContentLoaded", function() {
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll(".navbar-nav .nav-link");
      
        const options = {
          rootMargin: "-60px 0px 0px 0px",
          threshold: 0.5
        };
      
        const observer = new IntersectionObserver(function(entries) {
          entries.forEach(function(entry) {
            if (entry.isIntersecting) {
              const sectionId = entry.target.getAttribute("id");
              const navLink = document.querySelector(`.navbar-nav .nav-link[href="#${sectionId}"]`);
      
              navLinks.forEach(function(link) {
                link.classList.remove("active");
              });
      
              navLink.classList.add("active");
            }
          });
        }, options);
      
        sections.forEach(function(section) {
          observer.observe(section);
        });
      
        let isScrolling = false;
      
        // Debounce the scroll event
        window.addEventListener("scroll", function() {
          window.clearTimeout(isScrolling);
      
          isScrolling = setTimeout(function() {
            let currentSectionId = null;
            sections.forEach(function(section) {
              const rect = section.getBoundingClientRect();
              if (rect.top <= 60 && rect.bottom >= 60) {
                currentSectionId = section.getAttribute("id");
              }
            });
      
            navLinks.forEach(function(link) {
              const href = link.getAttribute("href").replace("#", "");
              if (href === currentSectionId) {
                link.classList.add("active");
              } else {
                link.classList.remove("active");
              }
            });
          }, 200); // Adjust the debounce delay as needed
        });
      
        // Update active navbar link on window resize
        window.addEventListener("resize", function() {
          let currentSectionId = null;
          sections.forEach(function(section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 60 && rect.bottom >= 60) {
              currentSectionId = section.getAttribute("id");
            }
          });
      
          navLinks.forEach(function(link) {
            const href = link.getAttribute("href").replace("#", "");
            if (href === currentSectionId) {
              link.classList.add("active");
            } else {
              link.classList.remove("active");
            }
          });
        });
      });
       

    //Pop Up
    // Get the project cards and overlay elements
    const projectCards = document.querySelectorAll('.project-card');
    const overlay = document.querySelector('.image-popup');
    const popupImage = document.querySelector('.popup-image');
    const closeButton = document.querySelector('.close-button');

    // Loop through each project card
    projectCards.forEach((card) => {
    const image = card.querySelector('.project-image img');
    
    // Add a click event listener to each project card
    card.addEventListener('click', () => {
        // Set the popup image source and show the overlay
        popupImage.src = image.src;
        overlay.style.display = 'flex';
    });
    });

    // Add a click event listener to the close button
    closeButton.addEventListener('click', () => {
    overlay.style.display = 'none';
    });

    // Close the overlay when the user clicks outside the popup content
    overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        overlay.style.display = 'none';
    }
    });
    

    // Carousel
    $('.quotes').slick({
        dots: true,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 6000,
        speed: 800,
        slidesToShow: 1,
        adaptiveHeight: true
      });
      
      $( document ).ready(function() {
      $('.no-fouc').removeClass('no-fouc');
      });
      