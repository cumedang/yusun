function check(form)
{
  if(form.userid.value=="sanz3"&&form.userpassword.value=="1234")
  {
    window.open('target.html')
  }
  else
  {
    alert("Error UserID or Password");  
  }
}
