"use strict";var form=document.getElementById("form"),validate=!1,printAlert=function(e,t){var r=document.createElement("P");r.classList.add("form__error"),r.textContent=e,t.insertAdjacentElement("afterend",r)},validateForm=function(e){!e.value.trim().length>0||null==e.value?(e.classList.add("form__input--error"),!e.nextElementSibling.classList.contains("form__error")&&printAlert("First Name cannot be empty",e),validate=!1):(e.classList.remove("form__input--error"),e.nextElementSibling.classList.contains("form__error")&&e.nextElementSibling.remove(),validate=!0)};form.addEventListener("submit",(function(e){e.preventDefault(),validateForm(form.firstname),validateForm(form.lastname),validateForm(form.email),validateForm(form.password),validate&&form.reset()}));