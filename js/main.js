const stats = document.querySelectorAll('.number');

stats.forEach(stat => {
  const goal = stat.getAttribute('data-goal');
  let count = 0;

  const interval = setInterval(() => {
    if (count < goal) {
      count++;
      stat.textContent = count;
    } else {
      clearInterval(interval);
    }
  }, 20); // Adjust the speed by changing the interval time
});


  const slider = document.querySelector(".slider");
  const prevBtn = document.querySelector(".prev");
  const nextBtn = document.querySelector(".next");
  const boxWidth = 300; // Width of one box
  const visibleImages = 3;
  const totalImages = slider.children.length;
  let index = 0;

  nextBtn.addEventListener("click", () => {
    index++;
    if (index > totalImages - visibleImages) {
      index = 0; // Loop back to start
    }
    updateSlider();
  });

  prevBtn.addEventListener("click", () => {
    index--;
    if (index < 0) {
      index = totalImages - visibleImages; // Loop back to the last set of images
    }
    updateSlider();
  });

  function updateSlider() {
    slider.style.transform = `translateX(-${index * boxWidth}px)`;
  }






  const videoSlider = document.querySelector(".video-slider");
  const videoPrevBtn = document.querySelector(".video-prev");
  const videoNextBtn = document.querySelector(".video-next");
  const videoWidth = 600; // Width of one video
  const totalVideos = document.querySelectorAll(".video-item").length;
  let videoIndex = 0;

  videoNextBtn.addEventListener("click", () => {
    videoIndex++;
    if (videoIndex >= totalVideos) {
      videoIndex = 0; // Loop back to the first video
    }
    updateVideoSlider();
  });

  videoPrevBtn.addEventListener("click", () => {
    videoIndex--;
    if (videoIndex < 0) {
      videoIndex = totalVideos - 1; // Loop back to the last video
    }
    updateVideoSlider();
  });

  function updateVideoSlider() {
    videoSlider.style.transform = `translateX(-${videoIndex * videoWidth}px)`;
  }



  const images = [
    'url("imgs/bg1.jpg")', // Replace with your actual image paths
    'url("imgs/bg2.jpg")',
    'url("imgs/bg3.jpg")',
    'url("imgs/bg4.jpg")'
  ];
  
  let currentIndex = 0;
  const landing = document.querySelector('.landing');
  
  function changeBackgroundImage() {
    landing.style.backgroundImage = images[currentIndex];
    currentIndex = (currentIndex + 1) % images.length;
  }
  
  setInterval(changeBackgroundImage, 10000); // Change background every 10 seconds
  
  // Initialize with the first background image
  changeBackgroundImage();
  