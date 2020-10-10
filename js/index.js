define(['jquery'], function ($) {
      function body() {
        $(function () {
          var aBtns = $('#banner').find('ol li');
          var oUl = $('#banner').find('ul');
          var leftRightTabs = $('#leftRightTabs').find('button');
          var iNow = 0;
          var timer = null;
    
    //       tab();
    
          aBtns.click(function () {
            iNow = $(this).index();
            tab();
          })
    
          $('#imgBox').mouseenter(function () {
            clearInterval(timer);
    //         console.log('1');
          })
    
          $('#imgBox').mouseleave(function () {
            timer = setInterval(function () {
              iNow++;
              tab();
            }, 5000);
          });
    
          timer = setInterval(function () {
            iNow++;
            tab();
          }, 5000);
    
          function tab() {
            aBtns.removeClass('active').eq(iNow).addClass('active');
    
            if (iNow == aBtns.size()) {
              aBtns.eq(0).addClass('active');
            }
    
            oUl.animate({
              left: iNow * -1700,
            },
              300,
              function () {
                if (iNow === aBtns.size()) {
                  iNow = 0;
                  oUl.css('left', 0);
    //             } else if (iNow == 0) {
    //               iNow = aBtns.size() - 1;
    //               oUl.css('left', iNow * -1700)
                }
              }
            )
          }
    
          leftRightTabs[0].onclick = throttle(function () {
            iNow--;
            tab();
          },1000)
    
          leftRightTabs[1].onclick = throttle(function () {
            iNow++;
            tab();
          }, 1000)
    
          function throttle(func, wait){
            let prevDate = 0;
            let curDate = Date.now();
            return function(){
              const context = this;
              const args = arguments;
              curDate = Date.now();
              if(curDate - prevDate >= wait){
                func.apply(context, args);
                prevDate = curDate;
              }
            }
          }
    
    
        });
  
  }
  
  
  $(function(){
    $('#nav1').mouseenter(function(){
      $('#show').css('display', 'block');     
    }).mouseleave(function(){
      $('#show').css('display', 'none');     
    })
  })
  
    
      return {
          body: body
        }
      
  })
  