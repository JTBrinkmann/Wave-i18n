'use strict'
function setup() {
  var image = document.querySelector('.cover-image')
  if (!image) return

  imagesLoaded(image, function () {
    document.querySelector('.site-cover')?.classList.add('initialized')
  })

  pagination(true)
}

if (document.readyState === 'complete') {
  setup()
} else {
  document.addEventListener('DOMContentLoaded', setup)
}
