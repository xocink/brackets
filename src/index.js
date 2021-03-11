module.exports = function check(str, bracketsConfig) {
    let exampleBracketsStr = bracketsConfig.map(b => b.join(''));
    let inner_str = str
    console.log(exampleBracketsStr)
    for (let i = 0; i < exampleBracketsStr.length; i++) {

        if (inner_str.includes(exampleBracketsStr[i])) {
            inner_str = inner_str.replace(exampleBracketsStr[i], '');
            i = -1;
        }
    }
    return inner_str.length === 0;

}
