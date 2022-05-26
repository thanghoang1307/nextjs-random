export function isIncluded(soCanCheck, arrCanCheck, type) {
    if (arrCanCheck.some(item => { return item[type] == soCanCheck })) {
      return true
    } else {
      return false
    }
  }

export function runRandomValue(soKyTu, giaTri) {
    var result           = '';
    var characters       = giaTri;
    var charactersLength = characters.length;
    for ( var i = 0; i < soKyTu; i++ ) {
      result += characters.charAt(Math.floor(Math.random() * 
 charactersLength));
   }
   return result;
}