document.addEventListener("DOMContentLoaded", function() {
    const slides = document.querySelectorAll(".slide");
    const buttons = document.querySelectorAll(".button");
  
    let currentSlide = 0;
    const slideInterval = setInterval(nextSlide, 5000); // Change slide every 3 seconds
  
    function nextSlide() {
      slides[currentSlide].classList.remove("active");
      buttons[currentSlide].classList.remove("active");
      currentSlide = (currentSlide + 1) % slides.length;
      slides[currentSlide].classList.add("active");
      buttons[currentSlide].classList.add("active");
    }
  
    // Optional: Add click event listeners to buttons for manual navigation
    buttons.forEach((button, index) => {
      button.addEventListener("click", () => {
        slides[currentSlide].classList.remove("active");
        buttons[currentSlide].classList.remove("active");
        currentSlide = index;
        slides[currentSlide].classList.add("active");
        buttons[currentSlide].classList.add("active");
        clearInterval(slideInterval); // Stop automatic sliding on button click
      });
    });
  });
  document.getElementById('comment-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Get form values
    const email = document.getElementById('email').value;
    const comment = document.getElementById('comment').value;
  
    // Validate email format
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
      alert('Please enter a valid email address.');
      return;
    }
  
    // Create comment element
    const commentElement = document.createElement('div');
    commentElement.classList.add('comment');
  
    const commentMeta = document.createElement('p');
    commentMeta.classList.add('meta');
    commentMeta.textContent = `(${email}) commented:`;
  
    const commentText = document.createElement('p');
    commentText.textContent = comment;
  
    commentElement.appendChild(commentMeta);
    commentElement.appendChild(commentText);
  
    // Append to comment list
    document.getElementById('comments-list').appendChild(commentElement);
  
    // Clear form fields
    document.getElementById('comment-form').reset();
  
    
  });



  // BUTTON 
  document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.main-button').addEventListener('click', function(e) {
      e.preventDefault();
      var target = document.querySelector('#art1');
      var offset = target.offsetTop - 90; // Adjust the offset as needed
      window.scrollTo({
        top: offset,
        behavior: 'smooth'
      });
    });
  });