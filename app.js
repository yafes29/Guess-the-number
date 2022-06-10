


const bir = document.querySelector(".bir");
const yüz = document.querySelector(".yüz");
const inputNumber = document.querySelector(".number");
const button = document.querySelector(".button");
const attempt = document.querySelector(".attempt");
const randomNumber = Math.floor(Math.random() * 100 + 1);
const message = document.querySelector(".message");


button.addEventListener("click", function () {
    if (inputNumber.value > 0 && inputNumber.value < 100) {

        if (inputNumber.value > randomNumber) {

            yüz.innerHTML = `${inputNumber.value}`

            attempt.innerHTML--

            inputNumber.value = ""
        }
        else if (inputNumber.value < randomNumber) {

            bir.innerHTML = `${inputNumber.value}`

            attempt.innerHTML--

            inputNumber.value = ""

        } else if (inputNumber.value == randomNumber) {

            message.innerHTML = "Tebrikler bildiniz  🤞"

            inputNumber.value = ""

        }
         if(+attempt.innerHTML == 0){
            message.innerHTML = "Hakkınız bitti"
            button.disabled = true
            inputNumber.disabled = true

            inputNumber.value = ""
        }
    }
        
})

