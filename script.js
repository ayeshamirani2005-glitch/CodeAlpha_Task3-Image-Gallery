const filterButtons = document.querySelectorAll(".filter-buttons button");
const imageBoxes = document.querySelectorAll(".image");
const images = document.querySelectorAll(".image img");

//  FILTER SYSTEM 
filterButtons.forEach(button => {
  button.addEventListener("click", () => {

    document.querySelector(".active").classList.remove("active");
    button.classList.add("active");

    let filter = button.dataset.name;

    imageBoxes.forEach(box => {
      let category = box.dataset.name;

      if (filter === "all" || filter === category) {
        box.style.display = "block";
      } else {
        box.style.display = "none";
      }
    });

  });
});


//  IMAGE PREVIEW 
const previewBox = document.querySelector(".preview-box");
const previewImg = previewBox.querySelector("img");
const closeBtn = document.querySelector(".close-btn");
const nextBtn = document.querySelector(".next");
const prevBtn = document.querySelector(".prev");

let currentIndex = 0;

// open image
images.forEach((img, index) => {
  img.addEventListener("click", () => {
    previewBox.style.display = "flex";
    previewImg.src = img.src;
    currentIndex = index;
  });
});

// close preview
closeBtn.addEventListener("click", () => {
  previewBox.style.display = "none";
});

//  NEXT BUTTON 
nextBtn.addEventListener("click", () => {
  currentIndex++;

  if (currentIndex >= images.length) {
    currentIndex = 0;
  }

  previewImg.src = images[currentIndex].src;
});

//  PREV BUTTON
prevBtn.addEventListener("click", () => {
  currentIndex--;

  if (currentIndex < 0) {
    currentIndex = images.length - 1;
  }

  previewImg.src = images[currentIndex].src;
});

// click outside image to close
previewBox.addEventListener("click", (e) => {
  if (e.target === previewBox) {
    previewBox.style.display = "none";
  }
});