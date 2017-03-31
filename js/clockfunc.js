function initLocalClocks()
{
  var date = new Date;
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours();

  // Create an object with each hand and it's angle in degrees
  var hands = [
    {
      hand: 'hours',
      angle: (hours * 30) + (minutes / 2)
    },
    {
      hand: 'minutes',
      angle: (minutes * 6)
    },
    {
      hand: 'seconds',
      angle: (seconds * 6)
    }
  ];
 
  for (var i = 0; i < hands.length; i++)
  {
    var elements = document.querySelectorAll('.' + hands[i].hand);
    for (var j = 0; j < elements.length; j++) 
    {
      elements[j].style.webkitTransform = 'rotateZ('+ hands[i].angle +'deg)';
      elements[j].style.transform = 'rotateZ('+ hands[i].angle +'deg)';
        if (hands[i].hand === 'minutes')
         {
          elements[j].parentNode.setAttribute('data-second-angle', hands[j + 1].angle);
        }
    }
  }
}
/*
 window.onload=function(){
      var Hour=document.getElementById("hours");
        var Minute=document.getElementById("minutes");
        var Second=document.getElementById("seconds");
        var time=null;

        function setClock(){

            SetTransform(Second,getRotate().SecRto);

            SetTransform(Minute,getRotate().MinRto);

            SetTransform(Hour,getRotate().HourRto);
        }

        setClock();

        var time= setInterval(function(){
            setClock();
        },1000)
    };


    function getTime(){
        var NowDate=new Date();
        var NowHour=NowDate.getHours();
        var NowMinute=NowDate.getMinutes();
        var NowSecond=NowDate.getSeconds();
        return {hours:NowHour,minutes:NowMinute,seconds:NowSecond}
    }

    function getRotate(){

        var time=getTime();
        var secondRotate= time.seconds*6;

        var minuteRotate=(time.minutes+time.seconds/60)*6;

        var hourRotate=(time.hours+time.minutes/60+time.seconds/3600)*(360/12);
        return {HourRto:"rotate("+hoursRotate+"deg)",MinRto:"rotate("+minutesRotate+"deg)",SecRto:"rotate("+secondsRotate+"deg)"}
    }

    function SetTransform(element,value){
        
        element.style.transform = value;
    }
*/