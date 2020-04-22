let chosenCompany = null

let buttons2 = document.getElementsByTagName('input')
for (let i = 0; i < buttons2.length; i++) {
    buttons2[i].addEventListener("click", switchButton)
}

function switchButton () {
    console.log('here')
}

//onchange, setattribute value for true ? false, others for false, chosencompany for company
