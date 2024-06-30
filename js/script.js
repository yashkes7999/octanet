let b = document.getElementsByClassName('btn')[0];
b.addEventListener('click',(e)=>{
    console.log("Clicked");
    let name = document.getElementById('Name').value;
    let email = document.getElementById('Email').value;
    let website = document.getElementById('Website').value;
    let gender = document.getElementsByName('Mygender');
    let g = "";
    for(let i = 0;i<gender.length;i++){
        if(gender[i].checked){
            g += gender[i].value;
        }
    }
    let skills = document.getElementsByName('skill');
    document.getElementById('myname').innerHTML = `Name : ${name}`;
    document.getElementById('myemail').innerHTML = `Email : ${email}`;
    document.getElementById('website').innerHTML = `Website : ${website}`;
    document.getElementById('Gender').innerHTML = `Gender : ${g}`;
    
    let s = " ";
    for(let i = 0;i<skills.length;i++){
        if(skills[i].checked){
            s+=skills[i].value;
            s+=" ";
        }
    }
    document.getElementById('myskill').innerHTML = `Skill : ${s}`;
    document.getElementsByClassName('left')[0].style.border = `2px solid black`;
   

})