const listimg = document.querySelector('.list_img')
const imgs = document.querySelectorAll('.list_img img')
const length = imgs.length
let count=0
setInterval(() => {
    if (count==length-1){
        count = 0
        let width = imgs[0].offsetWidth
        listimg.style.transform = `translateX(0px)`
        
    }else{
        count++
        let width = imgs[0].offsetWidth
        listimg.style.transform = `translateX(${width * -1 * count}px)`
    }
},4000)
