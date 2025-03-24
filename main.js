 // let tobtm = document.querySelector('.tobottom');



 let nom = document.querySelector('.nom');
 let email = document.querySelector('.email');
 let phon = document.querySelector('.phon');
 
 let warni = document.querySelector('.warnin');
//  console.log(nom,email,phon);
 let btn= document.querySelector('.btn');
 btn.onclick = function(){
    if(nom.value != '' && email.value != '' && phon.value != ''){
        warni.style.display='flex';
        send();
    }
    else{
        warni.style.display='none';
    }
    
 }
 function send(){
    let nember  = '+212620490769';
    var url = 'https://wa.me/' + nember + '?text=' + ' الاسم الكامل  : ' + nom + '%0a'
          + 'رقم الهاتف  : ' + phone + '%0a'
          + 'البريد الالكتروني : ' + email + '%0a' ;
          window.open(url , '_blanck').focus();
 }