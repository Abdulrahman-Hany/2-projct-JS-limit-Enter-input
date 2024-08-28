let input =document.querySelector("form input"),
countener = document.querySelector(" form .counter"),
maxLength  = input.getAttribute("maxLength");


input.addEventListener("keyup" , () => {
  countener.innerText = maxLength  - input.value.length;
})