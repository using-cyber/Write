/**
 * 建立一个栈，每碰到一个左括号向右push进右括号  碰到右括号对比栈尾部的括号是否一致  结束时看栈是否为空
 * switch(c){
 *      case'(': stack.push(')'); break;
 *      default:
 *        if (c !== zh.pop()) {
                return false
            }   
 * }
 */
 var isValid = function (s) {
    let zh = []
    for (let i = 0; i < s.length; i++) {
        let c = s[i]
        switch (c) {
            case '(': zh.push(')') 
            break;
            case '{': zh.push('}')
            break;
            case '[': zh.push(']')
            break;
            default: 
            if (c !== zh.pop()) {
                return false
            }
        }
    }
    return zh.length === 0
};