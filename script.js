const ageForm = document.getElementById("ageForm")
const name = document.getElementById("name")
const email = document.getElementById("email")
const button = document.getElementById("submit")
const nameSpan = document.getElementById("nameError")
const emailSpan = document.getElementById("emailError")
const div = document.getElementById("result")
const regExEmail =
  /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const regExName = /[a-z]{3}/; 
ageForm.addEventListener("submit", async function(submit){
    submit.preventDefault()
    let isValid= true
    if (!regExName.test(name.value)){
        nameSpan.innerHTML= "This Name Is Invalid"
        isValid= false
    }
    if(!regExEmail.test(email.value)){
        emailSpan.innerHTML= "This email is invalid"
        isValid= false
    }
    if (!isValid){
        return
    }
    try {
        const res= await fetch(`https://api.agify.io?name=${name.value}`)
        const data= await res.json()
        console.log(data)
        div.textContent= data.age 
      
    } catch  (error) {

        div.textContent= "Content not found"
    }
})

