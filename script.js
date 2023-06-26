const password1 = document.querySelector("#password");
const password2 = document.querySelector("#confirm");
const btn = document.querySelector(".btn");

password1.addEventListener('input', check);
password2.addEventListener('input', check);

function check(e)
{
    let password1Value = password1.value;
    let password2Value = password2.value;
    
    if(!password2Value){
        password1.style.border = '1px solid green';
        password1.previousElementSibling.style.color = 'green'
        btn.disabled = true;
        btn.classList.add("disable");
    } else if (password1Value != password2Value) {
        password1.style.border = '1px solid red';
        password1.previousElementSibling.style.color = 'red'
        password2.style.border = '1px solid red';
        password2.previousElementSibling.style.color = 'red'
        btn.disabled = true;
        btn.classList.add("disable");
    } else {
        password1.style.border = '1px solid green';
        password1.previousElementSibling.style.color = 'green'
        password2.style.border = '1px solid green';
        password2.previousElementSibling.style.color = 'green'
        btn.disabled = false;
        btn.classList.remove("disable");
    }

    if(password1Value === "" && password2Value === "" )
    {
        btn.disabled = false;
        btn.classList.remove("disable");
        password1.style.border = '1px solid #E5E7EB';
        password1.previousElementSibling.style.color = 'rgb(91, 90, 90)';
        password2.style.border = '1px solid #E5E7EB';
        password2.previousElementSibling.style.color = 'rgb(91, 90, 90)';
    }
}
