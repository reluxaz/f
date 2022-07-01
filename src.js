var loader = document.querySelector(".so")
    window.addEventListener("load" , function salam(){
        loader.style.display="none"
    })
    function instantSearch() {
        document.querySelectorAll('.fleks3').forEach(item => item.querySelectorAll('.visual')[0].innerText.toLowerCase().indexOf(document.querySelector('#input').value.toLowerCase()) > -1 ? item.style.display = 'flex' : item.style.display = 'none');
    }
    function instantSearch() {
        document.querySelectorAll('.fleks3').forEach(item => item.querySelectorAll('.visual')[0].innerText.toLowerCase().indexOf(document.querySelector('#imput').value.toLowerCase()) > -1 ? (item.style.display = 'flex', document.querySelector('.errortext').style.display = 'none') : (item.style.display = 'none', document.querySelector('.errortext').style.display = 'block'));
    }
    $(".menyu").click(function() {
        $("nav ul").toggleClass("newcss1");
        });   
        $("#body ul li").click(function(){
            $(".t6").css({"animation-name":"move3","animation-duration":"0.6s"})
             $(".t6").hide();
             var b = $(this).attr("cat");
             $("."+b).show();
             $("#body ul li").css("background", "black")
            $(this).css("background", "#ff7c00")
          });
        $(".g3").click(function () {
            m = Number($(this).text());
            $(".g3").css("background", "transparent")
            $(this).css("background", "black")
        })
        $(".f5").click(function(){
            var l=$(this).attr("cat")
            didi.src=l+".png"
        })
        for (let u = 8; u <20; u++) {
            $(".t6").eq(u).css("display","none")
        }
    $("#more").click(function(){
        for (let u = 9; u <20; u++) {
        $(".t6").eq(u).css("display","block")
        }
        $(".div").css("display","none")
        // $(this).css("display","none")
        $(".less").css("display","block")
    })
    $(".less").css("display","none")

    $(".less").click(function(){
        for (let u = 9; u <20; u++) {
        $(".t6").eq(u).css("display","none")
        }
        $(".div").css("display","block")
        $(this).css("display","none")
        $("#more").css("display","block")
    })
  var s6=document.querySelector(".t3");
  window.addEventListener("scroll",function(){
    if(window.scrollY>800){
    s6.style.display="block"
    console.log('asdadsjk')
    }
    else{
      s6.style.display="none"
    }
  })