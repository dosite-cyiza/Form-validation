let nameError = document.getElementById('name-error')
let phoneError = document.getElementById('phone-error')
let levelError = document.getElementById('level-error')
let emailError = document.getElementById('email-error')
let submitError = document.getElementById('submit-error')

const validateName =()=>{
    let fullName = document.getElementById('name').value

    if(fullName == 0){
        nameError.innerHTML='Name is required.'
        return false
    }
    if (!fullName.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
        nameError.innerHTML="Write a full name."
        return false
    }
    nameError.innerHTML= "valid"
    return true
}
const validatePhone =()=>{
    let phoneNumber = document.getElementById('phone').value

    if(phoneNumber !== 10){
        phoneError.innerHTML='phone number should be ten digits.'
        return false
    }
    if (!phoneNumber.match(/^[0-9]{10}$/)) {
        phoneError.innerHTML="Only digit please."
        return false
    }
    phoneError.innerHTML= "valid"
    return true
}