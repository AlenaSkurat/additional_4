module.exports = function multiply(first, second) {
  
    var a = String(first).split('').reverse(),
        b = String(second).split('').reverse(),
        result = [];
    
    for (var i = 0; i < a.length; i++) {
      for (var j = 0; j < b.length; j++) {
        if (!result[i + j]) {
          result[i + j] = 0;
      }
      result[i + j] += a[i] * b[j];
      }
    }
  
    var temp = 0;
  
    for (var i = 0; i < result.length; i++) { 
      result[i] += temp;
      temp = Math.floor(result[i]/10);
      result[i] = result[i]%10;  
    }
    if (temp != 0 ) {
      result[result.length] = temp;
    }
    return result.reverse().join('');
    }