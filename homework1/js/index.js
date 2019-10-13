$('#burger').click(function () {
  $('#menu').toggleClass('shown')
  check()
})

$('#menu').click(function (event) {
  if (event.target.tagName === 'A' || event.target.classList.contains('background')) {
    $('#menu').removeClass('shown')
    check()
  }
})

function check () {
  $('#menu').hasClass('shown') ? $('body').css('overflow', 'hidden') : $('body').css('overflow', 'auto')
}

$('.owl-carousel').owlCarousel({
  loop: true,
  margin: 0,
  items: 3,
  responsive: {
    320: {
      items: 1
    },
    768: {
      items: 2
    },
    992: {
      items: 3
    }
  }
})

$('#project').click(function (event) {
  if (event.target.tagName === 'LI') {
    $('#project li').each(function (index, element) {
      element.classList.remove('selected')
    })
    event.target.classList.add('selected')
  }
})
