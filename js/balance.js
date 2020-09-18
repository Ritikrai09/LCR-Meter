 function change3(val){

  var r3 =document.querySelector(".Z3").value = val;

  var a1 = document.querySelector(".range3").innerHTML = r3 +'&#8486';

  }

   function change2(val){

 var r2 =document.querySelector(".Z2").value = val;

    var a2 = document.querySelector(".range2").innerHTML = r2 +'&#8486';

  }

 function change1(val){

    var r1 =document.querySelector(".Z1").value = val;

   var a3 = document.querySelector(".range1").innerHTML = r1 +'&#8486';

  }

 function change(val){

           var r4 =document.querySelector(".R4").value = val;

           var ans = document.querySelector(".range4").innerHTML = r4 +'&#8486';

           var z1 = document.querySelector('.Z1');

           var z2 = document.querySelector('.Z2');

           var z3 = document.querySelector('.Z3');

           var alert = document.querySelector('.alert');

           var calc = 0;
        
          calc = z1.value * z3.value / z2.value;   

          document.querySelector('.alert').innerHTML= calc.val;

          var ans1 = Math.round(parseFloat(calc).toFixed(3));

          var ans2 = Math.round(parseFloat(r4).toFixed(3));

        if (ans2 >= ans1) 
          {
             var col = document.querySelector('.R4');
             col.disabled=true;
            alert.innerHTML='';
           document.querySelector('.alert').innerHTML='Balanced';
           document.querySelector('.led').classList.add('red-light');
          
           document.querySelector('.Z1').disabled=true;
           document.querySelector('.Z2').disabled=true;
           document.querySelector('.Z3').disabled=true; 
            document.querySelector('.Z3').disabled=true; 
            document.querySelector('.arr4').style.display='none'; 
            document.querySelector('.arr5').style.display='none'; 
            document.querySelector('.current').innerHTML='i = 0';  

          }   

         if (z1.value.length == 0 || z2.value.length == 0 || z3.value.length == 0) {
           
            document.querySelector('.alert').innerHTML='Note: please reset and inset all values';  
              document.querySelector('.R4').disabled=true;

           }
          

          console.log(ans1);
           console.log(ans2);
              
         }

         function reset(){

          document.querySelector('.alert').innerHTML='';
          document.querySelector('.Z1').value=0;
          document.querySelector('.Z2').value=0;
          document.querySelector('.Z3').value=0;
          document.querySelector('.R4').value=0;
         document.querySelector('.Z1').disabled=false;
         document.querySelector('.Z2').disabled=false;
         document.querySelector('.Z3').disabled=false;
         document.querySelector('.R4').disabled=false;
        document.querySelector('.led').classList.remove('red-light');
         document.querySelector(".range1").innerHTML = 0;
 document.querySelector(".range2").innerHTML = 0;
 document.querySelector(".range3").innerHTML = 0;
 document.querySelector(".range4").innerHTML = 0;
 document.querySelector('.op').innerHTML= '';
   document.querySelector('.arr4').style.display='block'; 
            document.querySelector('.arr5').style.display='block'; 

        
            }


  function selectElem(val){

  var opt1 = document.querySelector('.adjust');

  var vare1 = document.querySelector('.opt1').value = val;
  var val1 = document.querySelector('.imp1').innerHTML= vare1;

  if (val1 === 'Z1') {

document.querySelector('.imp1').innerHTML='';
document.querySelector('.imp1').innerHTML +='Z2';
document.querySelector('.imp2').innerHTML='';
document.querySelector('.imp2').innerHTML +='Z3';
document.querySelector('.imp3').innerHTML='';
document.querySelector('.imp3').innerHTML +='Z4';

  }

   if (val1 == 'Z2') {

document.querySelector('.imp1').innerHTML='';
document.querySelector('.imp1').innerHTML +='Z1';
document.querySelector('.imp2').innerHTML='';
document.querySelector('.imp2').innerHTML +='Z3';
document.querySelector('.imp3').innerHTML='';
document.querySelector('.imp3').innerHTML +='Z4';

  }

   if (val1 === 'Z3') {

document.querySelector('.imp1').innerHTML='';
document.querySelector('.imp1').innerHTML +='Z1';
document.querySelector('.imp2').innerHTML='';
document.querySelector('.imp2').innerHTML +='Z2';
document.querySelector('.imp3').innerHTML='';
document.querySelector('.imp3').innerHTML +='Z4';

  }

 if (val1 == 'Z4') {

document.querySelector('.imp1').innerHTML='';
document.querySelector('.imp1').innerHTML +='Z1';
document.querySelector('.imp2').innerHTML='';
document.querySelector('.imp2').innerHTML +='Z2';
document.querySelector('.imp3').innerHTML='';
document.querySelector('.imp3').innerHTML +='Z3';

  }


  }

