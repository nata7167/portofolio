window.addEventListener("load", function () {
  const loader = document.getElementById("loader-wrapper");
  loader.classList.add("fade-out");

  // Optional: remove loader from DOM
  setTimeout(() => {
    if (loader && loader.parentNode) {
      loader.parentNode.removeChild(loader);
    }
  }, 600); // match the CSS fade-out duration
});
