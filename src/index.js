module.exports = function check(str, bracketsConfig) {

  if (str.length%2 !== 0) {    
    return false;
  }

  let flatBracketsConfig = bracketsConfig.flat();
  let newBracketsConfig = [];
  for (let i = 0; i < flatBracketsConfig.length; i +=2) {
    newBracketsConfig.push(flatBracketsConfig[i] + flatBracketsConfig[i+1]);
  }

  let deleteSubstr = function(item) {
    if(str.includes(item)) {
      str = str.split(item).join('');      
    }
  };

  while(newBracketsConfig.some(substr => {
    return str.includes(substr);
  })){
    newBracketsConfig.forEach(elem => {
      deleteSubstr(elem);
    });
  }
    
  if (str.length === 0) {  
    return true;    
  } else {
    return false;
  }
};
