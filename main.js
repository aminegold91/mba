

 let nom = document.querySelector('.nom');
 let email = document.querySelector('.email');
 let phon = document.querySelector('.phon');
 
 let warni = document.querySelector('.warnin');
//  console.log(nom,email,phon);
 let btn= document.querySelector('.btn');
 btn.onclick = function(){
    if(nom.value != '' && email.value != '' && phon.value != ''){
        warni.style.display='flex';
    }
    else{
        warni.style.display='none';
        alert('المعدرة ! المرجو إملاء الاستمارة و شكرا');
    }
 }
