document.addEventListener("DOMContentLoaded", function () {
  const noButton = document.getElementById("move-random");

  if (noButton) {
      noButton.addEventListener("mouseover", function () {
          const maxX = window.innerWidth - noButton.offsetWidth;
          const maxY = window.innerHeight - noButton.offsetHeight;
          
          const randomX = Math.random() * maxX;
          const randomY = Math.random() * maxY;

          noButton.style.position = "absolute";
          noButton.style.left = `${randomX}px`;
          noButton.style.top = `${randomY}px`;
      });

      // Ensure it doesn't overlap the "Yes" button
      const yesButton = document.querySelector(".btn a:first-child");
      if (yesButton) {
          noButton.addEventListener("mousemove", function () {
              const rectYes = yesButton.getBoundingClientRect();
              const rectNo = noButton.getBoundingClientRect();

              if (
                  rectNo.left < rectYes.right &&
                  rectNo.right > rectYes.left &&
                  rectNo.top < rectYes.bottom &&
                  rectNo.bottom > rectYes.top
              ) {
                  const randomX = Math.random() * maxX;
                  const randomY = Math.random() * maxY;

                  noButton.style.left = `${randomX}px`;
                  noButton.style.top = `${randomY}px`;
              }
          });
      }
  }
});
