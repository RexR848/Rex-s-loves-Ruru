const mensajeFinal = "Sabía que aceptarías ❤️";

const imagenPrincipio =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRyj4qBd3EVHPvT4rdi3VEVFXFOmGlJEJphc3Ic9YGpgbrM_0OuCA0t3fI&s=10";
const imageneFinal =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxKqNELzKoSO3VAtP0uvGqfYWwLSspi5gVXwSZEpmAaCwe0EPomcooR8U&s=10";
const imagenTroste =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSv-zccr9Dcl3vXNDid8EbIzWdRXqCMrPUfnA&usqp=CAU";
const imagenBromita =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRQP3OdMcGqEs3nAaTV57yOT9kaSEMZnjzf6iTKlVDXtkvstKhAIbWXb4le&s=10";

const $ = (e) => document.getElementById(e);

const btnSi = $("btnSi");
const btnNo = $("btnNo");
const title = $("title");
const img = $("img");
const btnContainer = $("containerBtns");
let contador = 0;

img.src = imagenPrincipio;

btnSi.addEventListener("click", () => {
  title.textContent = mensajeFinal;
  img.src = imageneFinal;
  btnContainer.classList.add("hidden");
});

const getRandomOffset = (max) => Math.floor(Math.random() * max);

const moveButton = (btn) => {
  const maxOffset = 100;
  const rect = btn.getBoundingClientRect();

  const maxX = window.innerWidth - rect.width;
  const maxY = window.innerHeight - rect.height;

  const newX = Math.min(getRandomOffset(maxOffset), maxX - rect.left);
  const newY = Math.min(getRandomOffset(maxOffset), maxY - rect.top);

  btn.style.transform = `translate(${newX}px, ${newY}px)`;
};

btnNo.addEventListener("mouseover", () => {
  if (contador < 20) {
    moveButton(btnNo);
    contador++;
  }
});

btnNo.addEventListener("click", () => {
  if (contador < 12) {
    moveButton(btnNo);
    contador++;
  } else {
    contador = 0;
    title.textContent = "Esta bien 🥺💔";
    img.src = imagenTroste;
    btnContainer.classList.add("hidden");
    setTimeout(() => {
      title.textContent = "fakee";
      img.src = imagenBromita;
      setTimeout(() => {
        title.textContent = "¿Quieres ser mi san Valentín? 🥺";
        img.src = imagenPrincipio;
        btnContainer.classList.remove("hidden");
        btnNo.classList.add("hidden");
        btnSi.classList.add("moveCenter");
      }, 2000);
    }, 2000);
  }
});
