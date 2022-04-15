function check(form)
{
  if(form.abc.value=="절도")
  {
    window.open('절도.html')
  }else if(form.abc.value=="싸움")
  {
    window.open('fight.html')
  }else if(form.abc.value=="오물 투척")
  {
    window.open('오물투척.html')
  }else if(form.abc.value=="기물파손")
  {
    window.open('기물파손.html')
  }else
  {
    alert("그런 규칙은 존재하지않습니다.");  
  }
}