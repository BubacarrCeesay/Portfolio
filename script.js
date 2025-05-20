/* About Tabs */

const alltabs = document.querySelectorAll(".item");
const conts = document.querySelectorAll(".contents");

alltabs.forEach((tabs) => {
  tabs.addEventListener("click", function (e) {
    conts.forEach((cont) => {
      cont.classList.remove("activecont");
    });

    alltabs.forEach((cont) => {
      cont.classList.remove("active");
    });

    let tval = e.target.dataset.tab;

    document.querySelector(`.item[data-tab="${tval}"]`).classList.add("active");

    document
      .querySelector(`.contents[data-tab="${tval}"]`)
      .classList.add("activecont");
  });
});

/* Scrolling Effects */

const hme = document.querySelector(".nav_home");
const hmepage = document.querySelector(".header");

hme.addEventListener("click", function (e) {
  e.preventDefault();

  hmepage.scrollIntoView({ behavior: "smooth" });
});

const abt = document.querySelector(".nav_about");
const seemore = document.querySelector(".seemore");
const abtpage = document.querySelector(".about");

abt.addEventListener("click", function (e) {
  e.preventDefault();

  abtpage.scrollIntoView({ behavior: "smooth" });
});

seemore.addEventListener("click", function (e) {
  e.preventDefault();

  abtpage.scrollIntoView({ behavior: "smooth" });
});

const prj = document.querySelector(".nav_project");
const prjpage = document.querySelector(".project");

prj.addEventListener("click", function (e) {
  e.preventDefault();

  prjpage.scrollIntoView({ behavior: "smooth" });
});

const cert = document.querySelector(".nav_certificate");
const certpage = document.querySelector(".certificate");

cert.addEventListener("click", function (e) {
  e.preventDefault();

  certpage.scrollIntoView({ behavior: "smooth" });
});

const con = document.querySelector(".nav_contact");
const conpage = document.querySelector(".contact");

con.addEventListener("click", function (e) {
  e.preventDefault();

  conpage.scrollIntoView({ behavior: "smooth" });
});

/* Navigation On Small Screens */

const nav = document.querySelector(".nav_links");
const bar = document.querySelector(".bar");
const canbar = document.querySelector(".canbar");

bar.addEventListener("click", function () {
  bar.classList.toggle("show");
  nav.classList.toggle("showlink");
});

canbar.addEventListener("click", function () {
  bar.classList.toggle("show");
  nav.classList.toggle("showlink");
});

/* Showing Modal */

const showsch = document.querySelector(".showsch");
const modsch = document.querySelector(".modalsch");
const clsch = document.querySelector(".closesch");

showsch.addEventListener("click", function () {
  modsch.classList.toggle("hidden");
});

clsch.addEventListener("click", function () {
  modsch.classList.toggle("hidden");
});

const showhsp = document.querySelector(".showhsp");
const modhsp = document.querySelector(".modalhsp");
const clhsp = document.querySelector(".closehsp");

showhsp.addEventListener("click", function () {
  modhsp.classList.toggle("hidden");
});

clhsp.addEventListener("click", function () {
  modhsp.classList.toggle("hidden");
});

const showecom = document.querySelector(".showecom");
const modecom = document.querySelector(".modalecom");
const clecom = document.querySelector(".closeecom");

showecom.addEventListener("click", function () {
  modecom.classList.toggle("hidden");
});

clecom.addEventListener("click", function () {
  modecom.classList.toggle("hidden");
});

/* Section Revealing */

const foot = document.querySelector(".footer");
const info = document.querySelector(".info");

const reveal = function (entries, observer) {
  entries.forEach((ent) => {
    if (!ent.isIntersecting) return;

    ent.target.classList.remove("hidesec");

    observer.unobserve(ent.target);
  });
};

const iso = new IntersectionObserver(reveal, {
  root: null,
  threshold: 0.2,
});

iso.observe(abtpage);
iso.observe(prjpage);
iso.observe(conpage);
iso.observe(info);
iso.observe(certpage);

/* Certificate Modal */
const cert1 = document.querySelector(".cert1");
const cert2 = document.querySelector(".cert2");
const cert3 = document.querySelector(".cert3");
const cert4 = document.querySelector(".cert4");
const cert5 = document.querySelector(".cert5");

const modalcert = document.querySelector(".modalcert");
const imgcert = document.querySelector(".imgcert");
const lkcert = document.querySelector(".lkcert");
const clsbtn = document.querySelector(".clsbtn");

cert1.addEventListener("click", function () {
  imgcert.src = "img/cert1.jpeg";
  lkcert.href = "img/cert1.jpeg";
  modalcert.style.display = "block";
});

cert2.addEventListener("click", function () {
  imgcert.src = "img/cert2.png";
  lkcert.href = "img/cert2.png";
  modalcert.style.display = "block";
});

cert3.addEventListener("click", function () {
  imgcert.src = "img/cert3.png";
  lkcert.href = "img/cert3.png";
  modalcert.style.display = "block";
});

cert4.addEventListener("click", function () {
  imgcert.src = "img/cert4.png";
  lkcert.href = "img/cert4.png";
  modalcert.style.display = "block";
});

cert5.addEventListener("click", function () {
  imgcert.src = "img/cert5.png";
  lkcert.href = "img/cert5.png";
  modalcert.style.display = "block";
});

clsbtn.addEventListener("click", function () {
  modalcert.style.display = "none";
});
