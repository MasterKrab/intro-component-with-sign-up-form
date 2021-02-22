const form = document.getElementById("form")
let validate

const printAlert = (message, element) =>{
   const alert = document.createElement("P")
   alert.classList.add("form__error")
   alert.textContent = message

   element.insertAdjacentElement("afterend", alert)
}

const validateEmail = (element, message) =>{
   const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

   if(!re.test(element.value.toLowerCase())){
      element.classList.add("form__input--error")
      !element.nextElementSibling.classList.contains("form__error") && printAlert(message, element)
      validate = false
   }else{
      element.classList.remove("form__input--error")
      if(element.nextElementSibling.classList.contains("form__error"))
         element.nextElementSibling.remove()
   }

}

const validateForm = (element, message) =>{
      if(!element.value.trim().length > 0 || element.value == null){
         element.classList.add("form__input--error")
         !element.nextElementSibling.classList.contains("form__error") && printAlert(message, element)
         validate = false
      }else{
         element.classList.remove("form__input--error")
         if(element.nextElementSibling.classList.contains("form__error"))
            element.nextElementSibling.remove()
      }

   
}

form.addEventListener("submit", e =>{
   e.preventDefault()

   validate = true

   validateForm(form.firstname, "First Name cannot be empty")
   validateForm(form.lastname, "Last Name cannot be empty")
   validateEmail(form.email, "Looks like this is not an email")
   validateForm(form.password, "Password cannot be empty")

   validate && form.reset()
})