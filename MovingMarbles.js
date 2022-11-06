var i = 0
var t = setInterval(
    function () {
        if (i != 0) {
            document.images[i - 1].src = "./imgs/1.jpeg"
        }

        document.images[4].src = "./imgs/1.jpeg"
        var imag = document.images[i].src = "./imgs/2.jpeg"
        i++
        if (i == 5) {
            i = 0
        }
    }, 1000)

   function stop(){
   clearInterval(t)
    }

    function  continu(){
         t= setInterval(
            function () {
                if (i != 0) {
                    document.images[i - 1].src = "./imgs/1.jpeg"
                }
        
                document.images[4].src = "./imgs/1.jpeg"
                var imag = document.images[i].src = "./imgs/2.jpeg"
                i++
                if (i == 5) {
                    i = 0
                }
            }, 1000)
        
    }