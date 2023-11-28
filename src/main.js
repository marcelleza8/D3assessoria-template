import "./style.css";

import Swiper from "swiper";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import AOS from "aos";
import "aos/dist/aos.css";

import { scrollToElement } from "./scrollWithHeaderOffset.js";

const initApp = () => {
  const hamburgerBtn = document.getElementById("hamburger-button");
  const mobileMenu = document.getElementById("mobile-menu");
  const headerHeight = document.querySelector("header").offsetHeight;

  const toggleMenu = () => {
    mobileMenu.classList.toggle("hidden");
    mobileMenu.classList.toggle("flex");
    hamburgerBtn.classList.toggle("toggle-btn");
  };

  [...document.querySelectorAll("header nav>a")].map((el) => {
    el.addEventListener("click", (ev) => {
      ev.preventDefault();
      console.log(`#${el.href.replace(/(.+)?#/g, "")}`);
      scrollToElement(
        document.querySelector(`#${el.href.replace(/(.+)?#/g, "")}`),
        headerHeight
      );
    });
  });

  hamburgerBtn.addEventListener("click", toggleMenu);
  mobileMenu.addEventListener("click", toggleMenu);

  AOS.init({
    duration: 1200,
  });

  const swiper = new Swiper(".swiper-container", {
    // Módulos
    modules: [Navigation, Pagination],
    // Opções do Swiper
    loop: true,
    slidesPerView: 1,
    spaceBetween: 30,
    effect: "cube",
    autoplay: {
      delay: 500,
    },
    pagination: { el: ".swiper-pagination" },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  });
  swiper.on("slideChange", () => {
    AOS.refresh();
  });
};

document.addEventListener("DOMContentLoaded", initApp);
