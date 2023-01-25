module.exports = function check(str, bracketsConfig) {
    const Brackets = [];
    let j=0;
  for (i=0; i<str.length; i++) {
    if (str[i]=='(' || str[i]=='{' || str[i]=='[' || str[i]=='|') {
      Brackets.push(str[i]);
    }
    else if (str[i]==')' || str[i]=='}' || str[i]==']') {
     Brackets.pop();
    }
  }

  for (elem of Brackets) {
    if (elem=='|' ) {
      j+=1;
    }
  }
  if (i%2!==0) return false;
  if (i%2==0 && Brackets.length%2==0) return true;

  if (Brackets) return false
  else return true;
}
