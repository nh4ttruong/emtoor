const images = Array.from(document.querySelectorAll(".content img"));
images.forEach(img => {
  mediumZoom(img, {
    margin: 0, /* The space outside the zoomed image */
    scrollOffset: 40, /* The number of pixels to scroll to close the zoom */
    container: null, /* The viewport to render the zoom in */
    template: null, /* The template element to display on zoom */
    background: "var(--bg)" /* The background color of the zoomed image */
  });
});