var menu = $('#menu')
var body = $('body')

$('#burger').click(function () {
  menu.toggleClass('shown')
  body.toggleClass('frezze')
})

menu.click(function (event) {
  if (event.target.classList.contains('link_js') || event.target.id.trim() == 'bg') {
    menu.removeClass('shown')
    body.removeClass('frezze')
  }
})

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
  if (event.target.classList.contains('item_js')) {
    $('#project li').each(function (index, element) {
      element.classList.remove('selected')
    })
    event.target.classList.add('selected')
  }
})
