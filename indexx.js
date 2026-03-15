// Sending Emain
function sendEmail(){
            (function(){
                emailjs.init("Ae9Ig5nqcUvBqxUwp"); // Public Key
            })();

            var params = {
                sendername: document.querySelector("#sendername").value,
                to: document.querySelector("#to").value,
                subject: document.querySelector("#subject").value,
                replyto: document.querySelector("#replyto").value,
                message: document.querySelector("#message").value,
            };

            var servicceID ="service_2uf90s9" // Email Service ID
            var templateID = "template_gs6wn0w"; // Email Template ID

            emailjs.send(servicceID, templateID, params).then( res => {
                alert("Email Sent Successfully")
            })
            .catch();
        }

        // THIS I FOR SWIPER SLIDER
        
  var swiper = new Swiper(".heroSwiper", {
  // var swiper = new Swiper(".swiper", {
    loop: true,
    autoplay: {
      delay: 2000,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    effect: "fade",
    speed: 1000,
  });
