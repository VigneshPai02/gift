function hideAll() {
  document.querySelectorAll(".screen").forEach(s =>
    s.classList.remove("active")
  );
}

function show(id) {
  hideAll();
  document.getElementById(id).classList.add("active");
}

/* Ready */
document.getElementById("yesBtn").onclick = () => show("gift");
document.getElementById("noBtn").onclick = () => show("no");

/* Gift click */
const giftGif = document.getElementById("giftGif");
giftGif.onclick = () => {
  const src = giftGif.src;
  giftGif.src = "";
  giftGif.src = src;

  setTimeout(() => {
    show("afterGift");
  }, 1400);
};

/* Exit button dodges */
const exitBtn = document.getElementById("exitBtn");
exitBtn.onmouseover = () => {
  exitBtn.style.position = "absolute";
  exitBtn.style.left = Math.random() * 70 + "vw";
  exitBtn.style.top = Math.random() * 70 + "vh";
};

/* Proceed */
document.getElementById("proceedBtn").onclick = () => show("final");
