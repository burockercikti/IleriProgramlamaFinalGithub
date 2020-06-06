/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    if(s == '') {
        return true;
    }

    if(s.length % 2 != 0 || s[0] == ')' || s[0] == ']' || s[0] == '}') {
        return false; 
//Eğer dizinin uzunluğu tek veya ilk indeks elemanı kapanış parantezi ise false döndürür
    }
var takipci = [];

for (var i = 0; i < s.length; i++) {
    if (s[i] == '(' || s[i] == '[' || s[i] == '{') {
        takipci.push(s[i]);
//push() yöntemi ile eğer girilen değerler ve yukarıdaki parantezler uyuşursa bunları takipci dizesinin sonuna ekler.
    } else {
        var son = takipci.pop();
        if ((son == '{' && s[i] != '}') || (son == '[' && s[i] != ']') ||(son == '(' && s[i] != ')')) {
//pop() yöntemi ile eğer parantez açma ve kapama işaretleri eşit değilse onu dizeden siler ve false döndürür.     
               return false;
            }
    }
}
return (takipci.length == 0);
};
console.log(isValid("{}"))