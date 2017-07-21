<html>
<head>
<meta charset='utf-8'>
<title>test</title>
<script>
function myFunction()
{
  alert(1);
  a=11;
  window.alert(a);
}
function change1()
{
  x=document.getElementById('aaa');
  x.innerHTML='3333';
}
function change2()
{
  x=document.getElementById('aaa');
  x.innerHTML='4444'

}
function validateform()
{
  var x=document.forms['myform']['fname'].value;
  alert(x);
}

document.write("<b>123</b>");//html
for(i=0;i<10;i++)
{
  document.write("<br>"+i);
}
a=[1,2,3,4]
for(i in a)
{
  document.write(i);
}
document.write(typeof new Date());
console.console.log('youdingme');
</script>
</head>
<body>
  <p id='aaa' onmouseover="change1()" onmouseout="change2()">aaaa</p>
  <span name='bbb'>bbb</span>
  <button type='button' onclick='myFunction()' >click here!</button>
</body>
<form name="myForm" action="" onsubmit="return validateform()" method="">
  <input type="text" value="xxx" name="fname" id="fname1">
  <input type="submit" value="submit">
</form>
  
</html>
