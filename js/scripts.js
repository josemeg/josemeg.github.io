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
