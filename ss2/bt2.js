function hasUppercase(str) {
    return str.split('').some(function(char) {
        return char === char.toUpperCase() && char !== char.toLowerCase();
    });
}
