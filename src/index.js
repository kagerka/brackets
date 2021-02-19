module.exports = function check(str, bracketsConfig) {
    let stack = [];
    if (str.length % 2 == 1) {
        return false;
    }
    for (let i = 0; i < str.length; i++) {
        for (let j = 0; j < bracketsConfig.length; j++) {
            if (str[i] == bracketsConfig[j][0] && bracketsConfig[j][0] !== bracketsConfig[j][1]) {
                stack.push(str[i]);
            } else if (str[i] == bracketsConfig[j][0] && bracketsConfig[j][0] == bracketsConfig[j][1]) {
                if (stack[stack.length - 1] !== bracketsConfig[j][0] || stack.length == 0) {
                    stack.push(str[i]);
                } else {
                    stack.pop();
                }
            } else if (str[i] == bracketsConfig[j][1]) {
                if (stack[stack.length - 1] !== bracketsConfig[j][0]) {
                    return false;
                } else {
                    stack.pop();
                }
            }
        }
    }

    if (stack.length !== 0 && stack[0] != stack[stack.length - 1]) {
        return false;
    }
    if (stack.length == 0 || stack.map((a, b) => a == b)) {
        return true;
    } else {
        return false;
    }
}
