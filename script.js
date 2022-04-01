var s = '';

for (var i = 0; i <= 10; i++) {
    for (j = 0; j < i; j++) {
        s += '*';
    }
    for (u = ' '; u < 10; u++) {
        s += ' ';
    }
        s += '\n';
}
console.log(s);