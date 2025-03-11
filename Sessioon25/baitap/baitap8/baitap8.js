
function isStrongPassword(password) {
    if (password.length < 8) return 0;

    let hasUpperCase = 0;
    let hasLowerCase = 0;
    let hasNumber = 0;

    for (let i = 0; i < password.length; i++) {
        let char = password[i];

        if (char >= 'A' && char <= 'Z') hasUpperCase = 1;
        else if (char >= 'a' && char <= 'z') hasLowerCase = 1;
        else if (char >= '0' && char <= '9') hasNumber = 1;

        if (hasUpperCase && hasUpperCase && hasNumber) return true;
    }

    return false;
}
console.log(isStrongPassword("Abc123!@"));
console.log(isStrongPassword("weakpass"));
