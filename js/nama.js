window.addEventListener("load", function () {
  const hero = document.querySelector(".hero");

  if (hero) {
    hero.classList.add("show");
  }
});

// ================= DATE & TIME =================
function updateDateTime() {

  const date = new Date();

  // ===== JAM =====
  const hours = String(date.getHours()).padStart(2, "0");
  const minutes = String(date.getMinutes()).padStart(2, "0");
  const seconds = String(date.getSeconds()).padStart(2, "0");

  const timeEl = document.getElementById("timeText");

  if (timeEl) {
    timeEl.innerText =
      `${hours}:${minutes}:${seconds}`;
  }

  // ===== TANGGAL =====
  const months = [
    "JAN", "FEB", "MAR", "APR",
    "MAY", "JUN", "JUL", "AUG",
    "SEP", "OCT", "NOV", "DEC"
  ];

  const day =
    String(date.getDate()).padStart(2, "0");

  const month =
    months[date.getMonth()];

  const dateEl =
    document.getElementById("dateText");

  if (dateEl) {
    dateEl.innerText = `${day} ${month}`;
  }
}

setInterval(updateDateTime, 1000);
updateDateTime();


// ================= REVEAL SECTION =================
const sections =
  document.querySelectorAll(".stack-section");

function revealSections() {

  sections.forEach(section => {

    const rect =
      section.getBoundingClientRect();

    if (rect.top <= window.innerHeight * 0.8) {
      section.classList.add("active");
    }

  });

}

window.addEventListener("scroll", revealSections);
revealSections();


// ================= LENIS =================
if (typeof Lenis !== "undefined") {

  const lenis = new Lenis({
    duration: 1.1,
    smoothWheel: true,
    smoothTouch: false
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}


// ================= HERO EFFECT =================
const section1 =
  document.querySelector(".section1");

const section2 =
  document.querySelector(".section2");

if (section1 && section2) {

  let ticking = false;

  window.addEventListener("scroll", () => {

    if (!ticking) {

      requestAnimationFrame(() => {

        const rect =
          section2.getBoundingClientRect();

        const progress =
          1 - rect.top / window.innerHeight;

        if (progress > 0) {

          const hero =
            section1.querySelector(".hero");

          const title =
            section1.querySelector(".main-title");

          const scaleValue =
            1 - progress * 0.03;

          const opacityValue =
            1 - progress * 0.7;

          if (hero) {

            hero.style.transform =
              `scale(${scaleValue})`;

            hero.style.opacity =
              opacityValue;

          }

          if (title) {

            title.style.transform =
              `scale(${scaleValue})`;

            title.style.opacity =
              opacityValue;

          }

        }

        ticking = false;

      });

      ticking = true;
    }

  });

}


// ================= BACKGROUND TRANSITION =================
const maxScroll = 500;

if (section2) {

  window.addEventListener("scroll", () => {

    requestAnimationFrame(() => {

      const sectionTop =
        section2.offsetTop;

      const scrollY =
        window.scrollY;

      let scrollFraction =
        (scrollY + window.innerHeight - sectionTop)
        / maxScroll;

      scrollFraction =
        Math.min(Math.max(scrollFraction, 0), 1);

      const colorValue =
        Math.round(255 * (1 - scrollFraction));

      section2.style.backgroundColor =
        `rgb(${colorValue}, ${colorValue}, ${colorValue})`;

      section2.style.color =
        colorValue < 128
          ? "white"
          : "black";

    });

  });

}