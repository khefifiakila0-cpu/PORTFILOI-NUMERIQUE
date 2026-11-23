document.addEventListener("DOMContentLoaded", () => {
  const menuToggle = document.getElementById("menu-toggle");
  const navLinks = document.getElementById("nav-links");
  if (menuToggle && navLinks) {
    menuToggle.addEventListener("click", () => navLinks.classList.toggle("open"));
  }
});

function evaluerProtection() {
  const cases = document.querySelectorAll("#quiz-cyber input[type='checkbox']");
  const zone = document.getElementById("resultat-quiz-cyber");
  if (!cases.length || !zone) return;
  let score = 0;
  cases.forEach(c => { if (c.checked) score++; });
  if (score <= 2) {
    zone.textContent = `Score : ${score}/6 — Niveau Fragile ⚠️ : active la 2FA et utilise un gestionnaire de mots de passe.`;
  } else if (score <= 4) {
    zone.textContent = `Score : ${score}/6 — Niveau Intermédiaire 👍 : bonnes bases, renforce tes mises à jour et ta vigilance Wi-Fi.`;
  } else {
    zone.textContent = `Score : ${score}/6 — Niveau Solide 🛡️ : excellents réflexes d'hygiène numérique !`;
  }
}

function calculerPortes() {
  const elA = document.getElementById("input-a");
  const elB = document.getElementById("input-b");
  if (!elA || !elB) return;
  const a = elA.checked ? 1 : 0;
  const b = elB.checked ? 1 : 0;
  const set = (id, val) => { const el = document.getElementById(id); if (el) el.textContent = val; };
  set("out-and", a & b);
  set("out-or", a | b);
  set("out-xor", a ^ b);
  set("out-nand", (a & b) ? 0 : 1);
  set("out-nor", (a | b) ? 0 : 1);
}

let tableauTri = [42, 15, 78, 9, 53, 27];
function afficherBarresTri(highlight = []) {
  const cont = document.getElementById("tri-bars");
  if (!cont) return;
  cont.innerHTML = "";
  tableauTri.forEach((val, idx) => {
    const bar = document.createElement("div");
    bar.style.height = (val * 2.1 + 25) + "px";
    bar.style.width = "46px";
    bar.style.borderRadius = "10px 10px 4px 4px";
    bar.style.display = "flex";
    bar.style.alignItems = "flex-end";
    bar.style.justifyContent = "center";
    bar.style.paddingBottom = "6px";
    bar.style.fontWeight = "800";
    bar.style.color = "#fff";
    bar.style.background = highlight.includes(idx) ? "#ec4899" : "#7c3aed";
    bar.textContent = val;
    cont.appendChild(bar);
  });
}

async function lancerTriBulles() {
  const n = tableauTri.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      afficherBarresTri([j, j + 1]);
      await new Promise(r => setTimeout(r, 380));
      if (tableauTri[j] > tableauTri[j + 1]) {
        [tableauTri[j], tableauTri[j + 1]] = [tableauTri[j + 1], tableauTri[j]];
        afficherBarresTri([j, j + 1]);
        await new Promise(r => setTimeout(r, 380));
      }
    }
  }
  afficherBarresTri([]);
}

function melangerTri() {
  tableauTri = Array.from({ length: 6 }, () => Math.floor(Math.random() * 85) + 10);
  afficherBarresTri([]);
}
