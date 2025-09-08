const newsletter = document.getElementById("Newsletter-nav");
const tour = document.getElementById("Tour-nav");
const artist = document.getElementById("Artists-nav");
const music = document.getElementById("Music-nav");
const videos = document.getElementById("Videos-nav");
const about = document.getElementById("About-nav");
const sectionOne = document.getElementById("Section--1");
const releaseSec = document.getElementById("Release-section");
const videoSec = document.getElementById("Videos-sec");
const aboutSec = document.getElementById("About-sec");
const newsletterSec = document.querySelector(".News--letter");
const shows = document.getElementById("Shows");

newsletter.addEventListener("click", () => {
  newsletterSec.scrollIntoView({ behavior: "smooth" });
});

tour.addEventListener("click", () => {
  Shows.scrollIntoView({ behavior: "smooth" });
});

artist.addEventListener("click", () => {
  sectionOne.scrollIntoView({ behavior: "smooth" });
});
