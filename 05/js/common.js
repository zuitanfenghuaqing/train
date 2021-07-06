function lazyload() {
    let viewHeight = document.documentElement.clientHeight;
    let viewWidth = document.documentElement.clientWidth;   
    let eles = document.querySelectorAll('img[data-src]');     
    Array.prototype.forEach.call(eles, function (item, index) {
        let rect;
        if (item.dataset.src === '') {
            return;
        }
        rect = item.getBoundingClientRect();                
        if (rect.bottom >= 0 && rect.top < viewHeight) {
            ! function () {
                let img = new Image();
                img.src = item.dataset.src;
                img.onload = function () {
                    item.src = img.src;
                }
                item.removeAttribute('data-src');
            }();
        }
    })
}