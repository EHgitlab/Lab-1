// Function to generate random password
const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    res.send("Welcome to my app");
});

function generatePassword(length, includeUppercase, includeNumbers, includeSymbols) {
    let charset = 'abcdefghijklmnopqrstuvwxyz';
    if (includeUppercase) charset += 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    if (includeNumbers) charset += '0123456789';
    if (includeSymbols) charset += '!@#$%^&*()-_';

    let password = '';
    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}

app.listen(3000, function () {
    console.log("app listening on port 3000.")
});

// Example usage:
const passwordLength = 12;
const useUppercase = true;
const useNumbers = true;
const useSymbols = true;

const generatedPassword = generatePassword(passwordLength, useUppercase, useNumbers, useSymbols);
console.log('Generated Password:', generatedPassword);