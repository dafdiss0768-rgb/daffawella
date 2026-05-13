// ===============================
// CONTACT SECTION ANIMATION
// ===============================

const contactSection = document.querySelector(".contact-section");
const contactCards = document.querySelectorAll(".contact-card");
const contactForm = document.querySelector(".contact-form");
const contactInputs = document.querySelectorAll(
  ".contact-form input, .contact-form textarea"
);

// SHOW ANIMATION
const contactObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      contactSection.classList.add("show-contact");

    }

  });

}, {
  threshold: 0.2
});

if(contactSection){
  contactObserver.observe(contactSection);
}


// ===============================
// CARD HOVER EFFECT
// ===============================

contactCards.forEach((card, index) => {

  card.style.transitionDelay = `${index * 0.15}s`;

  card.addEventListener("mousemove", (e) => {

    const rect = card.getBoundingClientRect();

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = ((y - centerY) / 20) * -1;
    const rotateY = (x - centerX) / 20;

    card.style.transform = `
      perspective(1000px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      translateY(-8px)
    `;

  });

  card.addEventListener("mouseleave", () => {

    card.style.transform = `
      perspective(1000px)
      rotateX(0deg)
      rotateY(0deg)
      translateY(0px)
    `;

  });

});


// ===============================
// INPUT GLOW EFFECT
// ===============================

contactInputs.forEach(input => {

  input.addEventListener("focus", () => {

    input.parentElement.style.transform = "scale(1.02)";
    input.parentElement.style.transition = "0.3s";

  });

  input.addEventListener("blur", () => {

    input.parentElement.style.transform = "scale(1)";

  });

});


// ===============================
// BUTTON RIPPLE EFFECT
// ===============================

const contactBtn = document.querySelector(".contact-btn");

if(contactBtn){

  contactBtn.addEventListener("click", function(e){

    e.preventDefault();

    const ripple = document.createElement("span");

    ripple.classList.add("ripple");

    const rect = this.getBoundingClientRect();

    ripple.style.left = `${e.clientX - rect.left}px`;
    ripple.style.top = `${e.clientY - rect.top}px`;

    this.appendChild(ripple);

    // SUCCESS TEXT
    this.innerHTML = "MESSAGE SENT ✓";

    setTimeout(() => {

      ripple.remove();
      this.innerHTML = "SEND MESSAGE";

    }, 2000);

  });

}


// ===============================
// PARALLAX EFFECT
// ===============================

window.addEventListener("mousemove", (e) => {

  const x = (window.innerWidth / 2 - e.clientX) / 40;
  const y = (window.innerHeight / 2 - e.clientY) / 40;

  if(contactForm){

    contactForm.style.transform = `
      translate(${x}px, ${y}px)
    `;

  }

});


// ===============================
// TEXT REVEAL EFFECT
// ===============================

const contactTitle = document.querySelector(".contact-top h2");

if(contactTitle){

  const text = contactTitle.innerText;

  contactTitle.innerHTML = "";

  text.split("").forEach((letter, index) => {

    const span = document.createElement("span");

    span.innerHTML = letter === " " ? "&nbsp;" : letter;

    span.style.opacity = "0";
    span.style.display = "inline-block";
    span.style.transform = "translateY(50px)";
    span.style.transition = `
      0.5s ease
      ${index * 0.03}s
    `;

    contactTitle.appendChild(span);

  });

  const titleObserver = new IntersectionObserver((entries) => {

    entries.forEach(entry => {

      if(entry.isIntersecting){

        const spans = contactTitle.querySelectorAll("span");

        spans.forEach(span => {

          span.style.opacity = "1";
          span.style.transform = "translateY(0px)";

        });

      }

    });

  }, {
    threshold: 0.5
  });

  titleObserver.observe(contactTitle);

}