function telephoneCheck(str) {
  // Good luck!
  var regexPattern = /^(1?\s?)?(\([0-9]{3}\)|[0-9]{3})-?\s?[0-9]{3}-?\s?[0-9]{4}$/g;
  
  // BETTER WAY TO DO THIS us \d
//var regexPattern = /^(1\s?)?(\(\d{3}\)|\d{3})[\s\-]?\d{3}[\s\-]?\d{4}$/;
  
  //var regexPattern = /^\([0-9]{3}\)[0-9]{3}-[0-9]{4}$/g;
  //if (str.match(regexPattern) === null) return false;
  //else return true;
  
  return regexPattern.test(str);
}

telephoneCheck("(555-555-5555"); // should return false
//telephoneCheck("555)-555-5555"); // should return false
//telephoneCheck("1 555)555-555"); // should return false
//telephoneCheck("2 (757) 622-7382");
//telephoneCheck("1 555-555-5555"); //should return true
//telephoneCheck("555-555-5555");