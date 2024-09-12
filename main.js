const urlField = document.querySelector('.field input'),
previewArea = document.querySelector('.preview-area'),
downloadBtn = document.querySelector('.download-btn'),
hiddenInput = document.querySelector('.hidden-input'),
imgTag = previewArea.querySelector('.preview-area .thumbnail')

urlField.addEventListener('input', () => {
    let imgUrl = urlField.value
    previewArea.classList.add('active')
    let ytThumbUrl = ''

    if(imgUrl.indexOf("https://www.youtube.com/watch?v=") != -1){
        let vidId = imgUrl.split("v=")[1].substring(0, 11)
        ytThumbUrl = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`
        imgTag.src = ytThumbUrl
    }else if(imgUrl.indexOf("https://youtu.be") != -1){
        let vidId = imgUrl.split("be/")[1].substring(0, 11)
        ytThumbUrl = `https://img.youtube.com/vi/${vidId}/maxresdefault.jpg`
        imgTag.src = ytThumbUrl
    }else if(imgUrl.match(/\.(jpe?g|png|gif|bmp|webp)$/i)){
        imgTag.src = imgUrl
        ytThumbUrl = imgUrl
    }else{
        imgTag.src = ""
        previewArea.classList.remove('active')
    }
    downloadBtn.href = ytThumbUrl
    downloadBtn.download = `${Date.now()}.jpg`
    hiddenInput.value = imgTag.src
})