module.exports = function toReadable (number) {
    if ( number === undefined ) {
        return;
    } 
    
    if ( number === 0) {
        return 'zero'
    }

    let hundred = Math.floor(number / 100)
    let dozen = Math.floor((number - hundred * 100 ) / 10)
    let one = number - (hundred * 100 + dozen * 10)
  
    let result = '';
  
    if ( hundred > 0 ) {
      result = getOnesString(hundred) + ' hundred'
    }
  
    if (dozen > 1 ) {
      result += ' ' + getDozenString(dozen)
    } else if ( dozen === 1) {
      result += ' ' + getTeenString(10 + one)
    }
  
    if ( one > 0 && dozen !== 1) {
      result += ' ' + getOnesString(one);
    }
    return result.trim();
}

// get ones
function getOnesString(one) {
    switch(one) {
      case 1: return 'one';
      case 2:	return 'two';
      case 3:	return 'three';
      case 4:	return 'four';
      case 5:	return 'five';
      case 6:	return 'six';
      case 7:	return 'seven';
      case 8:	return 'eight';
      case 9:	return 'nine';
      default: return '';
    }
  }
  
  // get teens
  function getTeenString(teen) {
  
    switch(teen) {
      case 10: return 'ten';
      case 11: return 'eleven';
      case 12:	return 'twelve';
      case 13:	return 'thirteen';
      case 14:	return 'fourteen';
      case 15:	return 'fifteen';
      case 16:	return 'sixteen';
      case 17:	return 'seventeen';
      case 18:	return 'eighteen';
      case 19:	return 'nineteen';
      default: return '';
    }
  }
  
  
  // get dozens
  function getDozenString(dozen) {
  
    switch(dozen) {
      case 2: return 'twenty';
      case 3: return 'thirty';
      case 4: return 'forty';
      case 5: return 'fifty';
      case 6:	return 'sixty';
      case 7:	return 'seventy';
      case 8:	return 'eighty';
      case 9:	return 'ninety';
      default: return '';
    }
  }
  
