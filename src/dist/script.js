// var testimonialData = [
//   {
//     name: "LORD KRISHNA",
//     subname: "Krishna",
//     time: "11:00 am",
//     review:
//       "The divine charioteer of Arjuna's soul, guiding humanity through the eternal dance of life with his mesmerizing flute and teachings of love and duty.",
//     avatar: "krishna.jpg",
//     day: 18,
//     url: "https://www.amazon.in",
//     month: "April",
//   },
//   {
//     name: "LORD SHIVA",
//     subname: "Shiva",
//     time: "11:00 am",
//     review:
//       "The cosmic dancer, destroyer of ignorance, adorned with serpents, ashes, and a crescent moon, symbolizing the transcendence of earthly desires and .",
//     avatar: "shiva.jpg",
//     day: 10,
//     url: "https://www.amazon.in",
//     month: "March",
//   },
//   {
//     name: "LORD GANESHA",
//     subname: "Ganesha",
//     time: "11:00 am",
//     review:
//       "The remover of obstacles, with the head of an elephant symbolizing wisdom and the ability to overcome challenges, worshipped at the beginning of endeavors to ensure success and prosperity.",
//     avatar: "ganesha.jpg",
//     day: 15,
//     url: "https://www.amazon.in",
//     month: "January",
//   },
//   {
//     name: "RAM",
//     subname: "Ram",
//     time: "11:00 am",
//     review:
//       "The epitome of righteousness, upholding dharma and truth even in the face of adversity, his life story serving as a beacon of inspiration and moral guidance for generations.",
//     avatar: "ram.jpg",
//     day: 5,
//     url: "https://www.amazon.in",
//     month: "April",
//   },
//   {
//     name: "DURGA MATA",
//     subname: "Durga",
//     time: "11:00 am",
//     review:
//       "The invincible goddess, riding upon a lion, wielding weapons against evil forces, symbolizing the feminine power that destroys darkness and restores balance to the universe.",
//     avatar: "durga.jpg",
//     day: 2,
//     url: "https://www.amazon.in",
//     month: "October",
//   },
//   {
//     name: "LAXMI MATA",
//     subname: "Laxmi",
//     time: "11:00 am",
//     review:
//       "The bestower of wealth, fortune, and prosperity, worshipped by devotees seeking abundance and material well-being, her presence bringing auspiciousness and fulfillment.",
//     avatar: "laxmi.jpg",
//     day: 11,
//     url: "https://www.amazon.in",
//     month: "November",
//   },
//   {
//     name: "SARASWATI MATA",
//     subname: "Saraswati",
//     time: "11:00 am",
//     review:
//       "The embodiment of knowledge, wisdom, and creativity, seated on a lotus, playing the veena, her grace enlightening the minds of seekers and nurturing the arts and sciences.",
//     avatar: "saraswati.jpg",
//     day: 20,
//     url: "https://www.amazon.in",
//     month: "February",
//   },
//   {
//     name: "SURYA DEVA",
//     subname: "Surya",
//     time: "11:00 am",
//     review:
//       "The radiant sun god, driving away darkness and illuminating the world with his golden rays, revered for his life-giving warmth and energy, symbolizing power and vitality.",
//     avatar: "surya.jpg",
//     day: 21,
//     url: "https://www.amazon.in",
//     month: "June",
//   },
// ];

// // Define contentHolder variable
// var contentHolder = document.querySelector("#contentHolder");

// var slideHolder = document.querySelector("#slideHolder");

// for (let i of testimonialData) {
//   slideHolder.innerHTML += `<div class="swiper-slide" id="testimonial-${i.day}-${i.month}" style="width: 100%; background-color: #F8F8F8;cursor:pointer;" onclick="window.open('${i.url}', '_blank')"> 
//         <div class="ImgHolder" ><img src="${i.avatar}"></div>
//     </div>`;

//   contentHolder.innerHTML += `<div class="swiper-slide" style="width: 100%; background-color: #F8F8F8;opacity: 1;cursor:pointer;" onclick="window.open('${i.url}', '_blank')"> 
//   <!-- Added onclick event -->
//         <div style="width: 30%; float: left;max-height: 160px; overflow: hidden;">
//             <div style="padding: 8px; border-radius: 8px; text-align: center;">
//                 <div style="font-weight: bold; font-size: 4vw; color: #283674; border-right: 1px solid;">${i.day}</div>
//                 <div style="color: #283674; border-right: 1px solid; font-size: 2vw;">${i.month}</div>
//             </div>
//         </div>
//         <div style="width: 70%; float: left; margin: 0px; color: #283674; max-height: 160px; overflow: hidden;cursor:pointer;">
//             <p><b>${i.name}</b><br>${i.subname}<br>${i.time}</p>
//             <p style="padding-top:0px;margin-top:0px;">${i.review}</p>

//         </div>
//         <div style="clear: both;"></div>
        
//     </div>`;
// }

// // Function to navigate to the next slide when the clickable div is clicked
// function nextSlide() {
//   swiper.slideNext(); // Go to the next slide
// }

// // Define swiper instance
// const swiper = new Swiper("#craouselContainer", {
//   grabCursor: true,
//   slidesPerView: 2,
//   centeredSlides: true,
//   loop: true,
//   spaceBetween: -200,
//   effect: "coverflow",
//   coverflowEffect: {
//     rotate: 40,
//     depth: 500,
//     slideShadows: true,
//     stretch: 50,
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: false,
//   },
//   navigation: {
//     nextEl: ".swiper-button-next",
//     prevEl: ".swiper-button-prev",
//   },

//   on: {
//     init: function () {
//       const storedSlideIndex = localStorage.getItem("swiperSlideIndex");
//       const initialSlideIndex = storedSlideIndex
//         ? parseInt(storedSlideIndex)
//         : this.activeIndex;

//       const slideContents = document.querySelectorAll(
//         "#contentHolder .swiper-slide"
//       );
//       slideContents[initialSlideIndex].style.display = "block";
//     },
//     slideChange: function () {
//       const slideContents = document.querySelectorAll(
//         "#contentHolder .swiper-slide"
//       );
//       slideContents.forEach((content) => {
//         content.style.display = "none";
//       });

//       const activeSlideIndex = this.realIndex;
//       slideContents[activeSlideIndex].style.display = "block";

//       localStorage.setItem("swiperSlideIndex", activeSlideIndex);
//     },
//   },
// });

// // Handle autoplay separately
// let autoplayTimeout;

// // Function to start autoplay with delay
// function startAutoplayWithDelay(delay) {
//   autoplayTimeout = setTimeout(() => {
//     swiper.autoplay.start();
//   }, delay);
// }

// // Handle navigation arrow clicks
// document.querySelector(".swiper-button-next").addEventListener("click", () => {
//   swiper.autoplay.stop(); // Stop autoplay
//   clearTimeout(autoplayTimeout); // Clear previous timeout if exists
//   //startAutoplayWithDelay(500); // Start autoplay after 2 seconds
// });

// document.querySelector(".swiper-button-prev").addEventListener("click", () => {
//   swiper.autoplay.stop(); // Stop autoplay
//   clearTimeout(autoplayTimeout); // Clear previous timeout if exists
//   //startAutoplayWithDelay(500); // Start autoplay after 2 seconds
// });

// window.onresize = queryResizer;
// queryResizer();
// function queryResizer() {
//   if (window.innerWidth < 724) swiper.params.slidesPerView = 2.3;
//   if (window.innerWidth > 501) swiper.params.slidesPerView = 2.3;
//   if (window.innerWidth > 724) swiper.params.slidesPerView = 2.3;
//   if (window.innerWidth < 501) swiper.params.slidesPerView = 2.3;
//   swiper.update();
// }
