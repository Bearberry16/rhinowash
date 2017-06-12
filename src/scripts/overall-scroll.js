export default function overallScroll() {
  const slides = document.querySelectorAll('.slide-js');
  let page = 0;
  let scrollTop = window.scrollY;
  let scrollDelta = 0;

  // Use the map function on slides, even though slides is not a "real" array.
  const offsets = Array.prototype.map.call(slides, slide => slide.offsetTop);

/*------------------------------------------------------------------------------
  SCROLL ANIMATION
------------------------------------------------------------------------------*/

  function scrollToY(scrollTargetY) {
    const scrollY = window.scrollY || document.documentElement.scrollTop;
    const speed = 200; // Higher number = Faster animation

    // min time 0.1, max time 0.8 seconds
    const time = Math.max(0.1, Math.min(Math.abs(scrollY - scrollTargetY) / speed, 0.8));

    let currentTime = 0;

    /**
     * Handle animation speed based on the progress on animation curve
     * to make animation ease in and out.
     *
     * @param  {number} position Current position
     * @return {number}          Factor between 0–1.
     */
    function easeInOut(progress) {
      return (-0.5 * (Math.cos(Math.PI * progress) - 1));
    }

    /**
     * Add animation loop
     */
    function tick() {
      currentTime += 1 / 60;

      const progress = currentTime / time;
      const factor = easeInOut(progress);

      // As long as progress is greater than 1, keep animating.
      if (progress < 1) {
        requestAnimationFrame(tick);
        window.scrollTo(0, scrollY + ((scrollTargetY - scrollY) * factor));
      } else {
        window.scrollTo(0, scrollTargetY);
      }
    }

    tick();
  }

  let scrollSession;
  let allowScroll = true;

  function endScrollSession() {
    allowScroll = true;
    scrollTop = window.scrollY;
  }

  window.addEventListener('wheel', (e) => {
    if (allowScroll) {
      scrollDelta = scrollTop - window.scrollY;

      if (scrollDelta !== 0) {
        e.preventDefault();
        allowScroll = false;

        // If scrollDelta is less than 0, animate to next page.
        // If more than 0, animate to previous page.
        page += (scrollDelta < 0) ? 1 : -1;
        scrollToY(offsets[page]);

        scrollSession = window.setTimeout(endScrollSession, 55);
      }
    } else {
      e.preventDefault();
      clearTimeout(scrollSession);
      scrollSession = window.setTimeout(endScrollSession, 55);
    }
  });
}
