function convertToRoman(num){
    const numerals = {
      M:1000,CM:900,D:500,CD:400,C:100,XC:90,L:50,XL:40,X:10,IX:9,V:5,IV:4,I:1
    };

    let roman = '';

    for (let i in numerals){
      while(num >= numerals[i]){
        roman += i;
        num -= numerals[i];
      }
    }

    return roman;
}

function roman_number(){
    let number = document.getElementById("number").value;

    if (number > 3999){
      number = "0";
    }

    number = convertToRoman(number);
    document.getElementById("roman").value = number;
}