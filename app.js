let chosenCompany = 'none'

let microsoftToggle = false
let microsoftButton = document.getElementById('microsoft')
microsoftButton.addEventListener("click", switchMicrosoft)

function switchMicrosoft () {
    if (microsoftToggle) {
      microsoftToggle = false;
      if (!appleToggle && !googleToggle && !amazonToggle) {chosenCompany = 'none'}
    } else {
        microsoftToggle = true
        chosenCompany = 'microsoft'
        if (amazonToggle) {amazonButton.click()}
        if (googleToggle) {googleButton.click()}
        if (appleToggle) {appleButton.click()}
    }
    console.log(chosenCompany)
}

let amazonToggle = false
let amazonButton = document.getElementById('amazon')
amazonButton.addEventListener("click", switchAmazon)

function switchAmazon () {
    if (amazonToggle) {
      amazonToggle = false;
      if (!microsoftToggle && !googleToggle && !appleToggle) {chosenCompany = 'none'}
    } else {
        amazonToggle = true
        chosenCompany = 'amazon'
        if (microsoftToggle) {microsoftButton.click()}
        if (googleToggle) {googleButton.click()}
        if (appleToggle) {appleButton.click()}
    }
    console.log(chosenCompany)
}

let googleToggle = false
let googleButton = document.getElementById('google')
googleButton.addEventListener("click", switchGoogle)

function switchGoogle () {
    if (googleToggle) {
      googleToggle = false;
      if (!microsoftToggle && !appleToggle && !amazonToggle) {chosenCompany = 'none'}
    } else {
        googleToggle = true
        chosenCompany = 'google'
        if (amazonToggle) {amazonButton.click()}
        if (microsoftToggle) {microsoftButton.click()}
        if (appleToggle) {appleButton.click()}
    }
    console.log(chosenCompany)
}

let appleToggle = false
let appleButton = document.getElementById('apple')
appleButton.addEventListener("click", switchApple)

function switchApple () {
    if (appleToggle) {
      appleToggle = false;
      if (!microsoftToggle && !googleToggle && !amazonToggle) {chosenCompany = 'none'}
    } else {
        appleToggle = true
        chosenCompany = 'apple'
        if (amazonToggle) {amazonButton.click()}
        if (googleToggle) {googleButton.click()}
        if (microsoftToggle) {microsoftButton.click()}
    }
    console.log(chosenCompany)
}
