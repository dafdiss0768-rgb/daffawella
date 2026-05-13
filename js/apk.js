// =========================
// TOOLS SECTION
// =========================

const toolsSection = document.querySelector(".tools-section");
const toolsScroll = document.querySelector(".tools-scroll");

const toolsText = document.querySelector(".tools-text");
const toolsItems = document.querySelectorAll(".tools-item");

function animateTools(){

  const rect = toolsSection.getBoundingClientRect();

  const windowHeight = window.innerHeight;

  // =========================
  // AREA AKTIF
  // =========================

  // mulai gerak saat section setengah masuk
  const start = windowHeight * 0.5;

  // berhenti saat hampir hilang
  const end = -windowHeight * 0.5;

  // =========================
  // MOVE
  // =========================

  if(rect.top < start && rect.top > end){

    // progress
    const progress = start - rect.top;

    // horizontal move
    const move = progress * 0.5;

    toolsScroll.style.transform =
      `translateX(-${move}px)`;

  }

  // =========================
  // SHOW TITLE
  // =========================

  if(rect.top < windowHeight * 0.85){

    toolsText.classList.add("show");

  }

  // =========================
  // SHOW ITEMS
  // =========================

  toolsItems.forEach((item, index)=>{

    const itemTop = item.getBoundingClientRect().top;

    if(itemTop < windowHeight * 0.85){

      setTimeout(()=>{

        item.classList.add("show");

      }, index * 80);

    }

  });

  requestAnimationFrame(animateTools);

}

// START
animateTools(); 