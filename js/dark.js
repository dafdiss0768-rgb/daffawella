const section2 = document.querySelector('.section2');
const maxScroll = 600; // seberapa banyak scroll untuk full effect

window.addEventListener('scroll', () => {
  const sectionTop = section2.offsetTop;
  const scrollY = window.scrollY;

  // Hitung seberapa banyak user scroll di dalam section2
  let scrollFraction = (scrollY + window.innerHeight - sectionTop) / maxScroll;

  // Batasi antara 0 - 1
  scrollFraction = Math.min(Math.max(scrollFraction, 0), 1);

  // Interpolasi warna putih -> hitam
  const colorValue = Math.round(255 * (1 - scrollFraction));

  section2.style.backgroundColor = `rgb(${colorValue}, ${colorValue}, ${colorValue})`;

  // Teks kontras
  section2.style.color = colorValue < 128 ? 'white' : 'black';
});
