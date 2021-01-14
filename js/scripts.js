// Home scroll to projects button
$(".projects-button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#projects").offset().top,
    },
    1200
  )
})

// Home scroll to projects button
$(".aboutme-button").click(function () {
  $("html, body").animate(
    {
      scrollTop: $("#about-me").offset().top,
    },
    1200
  )
})

gsap.from(".anim1", { opacity: 0, duration: 1, y: -50, stagger: 0.3 })
gsap.from("header", { opacity: 0, duration: 3 })
