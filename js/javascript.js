var dropdown = document.querySelector(
  ".main-site-article-generate-arrow-down"
);
var content = document.querySelector(".main-site-article-generate-content");

dropdown.addEventListener("click", function() {
  content.classList.toggle("main-site-article-generate-content--active");
});

var vrolijk = document.querySelector("#vrolijk");
vrolijk.addEventListener("click", function() {
  vrolijk.classList.toggle("main-site-article-generate-form-item--checked");
});
var angst = document.querySelector("#angst");
angst.addEventListener("click", function() {
  angst.classList.toggle("main-site-article-generate-form-item--checked");
});
var agressief = document.querySelector("#agressief");
agressief.addEventListener("click", function() {
  agressief.classList.toggle("main-site-article-generate-form-item--checked");
});
var verward = document.querySelector("#verward");
verward.addEventListener("click", function() {
  verward.classList.toggle("main-site-article-generate-form-item--checked");
});
var romantisch = document.querySelector("#romantisch");
romantisch.addEventListener("click", function() {
  romantisch.classList.toggle("main-site-article-generate-form-item--checked");
});
var bedroefd = document.querySelector("#bedroefd");
bedroefd.addEventListener("click", function() {
  bedroefd.classList.toggle("main-site-article-generate-form-item--checked");
});
