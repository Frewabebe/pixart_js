console.log('check-check!1-2-3!')
var color = $('#set-color')
var btarget = $('.brush')

function changeColor (evt) {
  evt.preventDefault()
btarget.css('background', 'red')
}
color.on('click', changeColor)
