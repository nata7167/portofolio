document.querySelectorAll('.image-frame').forEach(frame => {
  const images = frame.querySelectorAll('img');
  if (images.length <= 1) return; // Skip if there's only one image

  let current = 1; // Start from second image (index 1), first stays visible

  // Initially hide all but the first and second images
  images.forEach((img, index) => {
    img.classList.remove('active');
    if (index === 0 || index === 1) {
      img.classList.add('active');
    }
  });

  setInterval(() => {
    images[current].classList.remove('active');
    current = (current + 1 - 1) % (images.length - 1) + 1; // Loop from 1 to images.length - 1
    images[current].classList.add('active');
  }, 3000); // 6 seconds
});
