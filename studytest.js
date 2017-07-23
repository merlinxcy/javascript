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
  var x=document.forms['myForm']['fname'].value;
  alert(x);
}
function validateform2()
{
  var x=document.getElementById('fname');
  alert(x.innerHTML);
}


function veryfyemail()
{
    var x=document.forms["myForm"]["email"].value;
    var atpos=x.indexOf("@");
    var dotpos=x.lastIndexOf(".");
    if(atpos<1||dotpos<atpos+2||dotpos+2>x.length)
    {
      alert("这不是一个有效的email地址");
      return false;
    }

}
/*
function apifunction()
{
 document.getElementById("demo").innerHTML="1232";
  var in=document.getElementById("id1");
  if(in.checkValidity()==false)
  {
    document.getElementById("demo").innerHTML=in.validationMessage;
  }
}
*/

//#######################
//JSON
function jsontest()
{
    var text='{"a":11111,"b":222222,"c":333333}';
    obj=JSON.parse(text);
    document.getElementById("demo").innerHTML=obj.a;
}
//########################
///////////////////////////////////////////////////////////
//alert(document.getElementById("demo").innerHTML);//由于html页面还没有渲染所以demo不存在
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
console.log('youdingme');
//document.write("<hr>");
//jsontest();
////////////////////////////////////////////////////////////
</script>
</head>
<body>
  <p id='aaa' onmouseover="change1()" onmouseout="change2()">aaaa</p>
  <span name='bbb'>bbb</span>
  <button type='button' onclick='myFunction()' >click here!</button>
  <br>
  <br>
  <hr>
  <form name="myForm" action="" onsubmit="apifunction()" method="">
    <input type="text" value="xxx" name="fname" id="fname1">
    <br>
    <input type="text" value="xxx" name="email" id="email1">
    <br>
    <input type="text" id="id1" min="100" max="300" required>
    <br>
    <input type="submit" value="submit">
  </form>
  <p id="demo" name="demo" >提示信息</p>
 <script>jsontest();</script>
</body>
</html>
