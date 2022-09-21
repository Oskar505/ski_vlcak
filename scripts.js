console.log('connected')

var headerGallery = document.getElementsByClassName('headerGallery')[0]
var picNum = 1

function changeHeaderGallery() {

    if (picNum == 4) {
        picNum = 1
        headerGallery.style.background = 'url(img/headerImg' + picNum + '.jpg)'
    }

    else {
        picNum = picNum + 1
        headerGallery.style.background = 'url(img/headerImg' + picNum + '.jpg)'
    }
}

setInterval('changeHeaderGallery()', 5000)