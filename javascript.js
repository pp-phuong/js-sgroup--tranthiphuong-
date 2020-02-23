
function Ex1() {
    var x = document.getElementById("outputEx1");
    
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
    x.innerHTML = Date();
  }
  // Ex1
  function Ex2() {
    var x = document.getElementById("outputEx2");
    var d = new Date();
   x.innerHTML = "Tháng / Ngày / Năm:  " + d.getMonth() + "-" + d.getDate()+ "-" +d.getFullYear()  +"<br>"
   + " Tháng / Ngày / Năm:  " +d.getMonth() + "/" + d.getDate()+ "/" +d.getFullYear() +"<br>"
   + "Ngày - Tháng -  Năm:  " + d.getDate() + "-" + d.getMonth()+ "-" +d.getFullYear() +"<br>"
    + "Ngày / Tháng / Năm:  " + d.getDate() + "/" + d.getMonth()+ "/" +d.getFullYear()  
    
    if (x.style.display === "none") {
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
  }
  //Ex2
  
function Ex3() {
    var i=0; var x; 
    var number = document.getElementById("numberEx3").value;
    var numberLength =number.length  ;
    var compare = number.substr(0,1)
    if (numberLength == 0) alert( " Nhập một dãy số ")
    else {
     for( i=1;i<numberLength;i++) {
      x = number.substr(i,1);
      if (x <= compare) {alert("Đây là dãy số không tăng"); return; } 
      else compare = x;
      }
      alert("Đây là dãy số tăng dần")
    }
  }
   //Ex3
    
function Ex4() {
 
  var str = document.getElementById("textEx4").value;
	var strReplace = "";
	var strLength = str.length;
	for (var i = 0;i < strLength ;i++){
    if (str[i] >= "0" && str[i] <= "9"){
			alert("Chuỗi chỉ chứa kí tự trong bảng chữ cái");
			return;
		}
		if (str[i] == "z" || str[i] == "Z"){
			alert(str[i] + " không có kí tự liền sau");
			return;
		}
		
		strReplace += String.fromCharCode(str.charCodeAt(i) + 1);
	}
  document.getElementById("outputEx4").innerHTML = strReplace;

}
 //Ex4
     
function Ex5() {
  var str = document.getElementById("textEx5").value;
	var newStr = "";
  var strLength = str.length;
  if ( (strLength <3) || (strLength % 2 == 0) ){
			alert("Nhập chuỗi có độ dài lẻ và độ dài nhỏ nhất bằng ba");
			return;
		}
  var center=(strLength/2 );
  newStr= str.substr(center-1,3);
  document.getElementById("outputEx5").innerHTML = newStr;

}
 //Ex5
function Ex7() {
  var str= document.getElementById("textEx7").value;
  if (str.length==0) alert(" nhập chuỗi  ") 
  else {var i= str.search("java");
  if (i == -1 ) alert(" Chuỗi không chứa ' java' ") 
  else alert(" Chuỗi chứa ' java' ");}
  
}
 //Ex7
 function Ex8() {
  var number= Number(document.getElementById("numberEx8").value); 
  switch (number) {
      case 1:
        alert("1 - Tháng một "); break;
      case 2:
        alert("2 - Tháng hai ");  break;
      case 3:
        alert("3 - Tháng ba "); break;
      case 4:
        alert("4 - Tháng tư ");break;
      case 5:
        alert("5 - Tháng năm ");break;
      case 6:
        alert("6 - Tháng sáu ");break;
      case 7:
        alert("7 - Tháng bảy "); break;
      case 8:
        alert("8 - Tháng tám ");break;
      case 9:
        alert("9 - Tháng chín");break;
      case 10:
        alert( "10 - Tháng mười ");break;
      case 11:
        alert("11 - Tháng mười một");break;
      case 12:
        alert( "12 - Tháng mười hai");break;
      default: 
      alert("  Không có tháng tương ứng ");
    }

}
//Ex8
function Ex9() {
  var str= document.getElementById("textEx9").value;
  if (str.length==0) alert(" Nhập chuỗi ! ") 
  else {
    var  arr = str.split(' ',);
    var arrLength= arr.length;
    var max=arr[0];
    var lengthMax= arr[0].length;
    for ( var i=1;i<arrLength;i++) {
      if (arr[i].length > lengthMax) {
        lengthMax=arr[i].length ;
        max=arr[i];
      }
    }
    alert(" Từ dài nhất trong chuỗi :" + max + ", độ dài từ :" + lengthMax );
}
}
 //Ex9
  
function Ex10() {
  var number1 =Number(document.getElementById("numberEx10-1").value);
  var number2 = Number(document.getElementById("numberEx10-2").value);
 if (number1 > number2) alert(" nhập sai định dạng ") ;
 var arr= [];
 for ( var i=number1;i<=number2;i++) 
   if ( checkPrime(i)) arr.push(i);
if (arr == 0) alert(" không có số nguyên tố ")
else alert (arr.join(", "));
 
}
// Kiểm tra số nguyên tố 
function checkPrime(x) {
  if (x <=1) return false;
	if (x == 2 || x == 3) return true;
	for (var i = 2; i*i <= x;i++){
		if (x % i == 0) return false;
	}
	return true;
}
 //Ex10
