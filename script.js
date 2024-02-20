const passwordbox = document.getElementById("password");
const length = 13;

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const numbers = "0123456789";
const symbols = "!@#$%^&*()_+-=[]{}|;:,./<>?";

const allCharacters = upperCase + lowerCase + numbers + symbols;

function createPassword() {
    let password = "";
    
    // Generate at least one character from each character set
    password += upperCase[Math.floor(Math.random() * upperCase.length)];
    password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
    password += numbers[Math.floor(Math.random() * numbers.length)];
    password += symbols[Math.floor(Math.random() * symbols.length)];

    // Generate remaining characters to meet the desired length
    while (password.length < length) {
        password += allCharacters[Math.floor(Math.random() * allCharacters.length)];
    }

    // Shuffle the password characters
    password = password.split('').sort(() => Math.random() - 0.5).join('');

    passwordbox.value = password;
}

function copyPassword() {
    passwordbox.select();
    document.execCommand("copy");
}