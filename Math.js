var check = function(x, y) {
  return x % y === 0;
};
var write = function(number) {
  var resultMass = [];
  for(var i = 1; i < number + 1; i++) {
    var result = number % i;
    if(result === 0) {
      resultMass.push(i);
    }
  }
  return(resultMass);
};
var isItEasy = function(number) {
  var needToBeEasy = [1, number].join(' ');
  var result = write(number).join(' ');
  if(result === needToBeEasy) {
    return(true);
  } else {
    return(false);
  }
};
var stepen = function(podkorennoye, pokazatel) {
  var p = podkorennoye;
  var pok = pokazatel;
  for(var i = 1; i < pok; i++) {
    p = p * podkorennoye;
  }
  return p;
};
var factorial = function(a) {
  var b = 1;
  for(var t = 1; t <= a; t++) {
    b = b * t;
  }
  return b;
};
var SL = function(r, whatToDo) {
  if(whatToDo === "S") return Math.PI * (r * r);
  if(whatToDo === "L") return 2 * r * Math.PI;
  return "Wrong number";
};
var degressToRadian = function(degress) {
  var rad = Math.PI / 180;
  return degress * rad;
};
var PS = function(a, b, whatToDo) {
  if(whatToDo === "P") return (a + b) * 2;
  if(whatToDo === "S") return a * b;
  return "Wrong number";
};
var VSparallel = function(a, b, h, whatToDo) {
  if(whatToDo === "V") return a * b * h;
  if(whatToDo === "S") {
    var sbp = ((a * h) * 2) + ((b * h) * 2);
    var sosn = (a * b) * 2;
    var S = sbp + sosn;
    return S;
  }
  return "Wrong item";
};
var VSsphero = function(r, whatToDo) {
  if(whatToDo === "V") return (4 / 3) * Math.PI * (r * r * r);
  if(whatToDo === "S") return 4 * Math.PI * (r * r);
  return "Wrong item";
};
var nearestEasy = function(i, bigger) {
  var number, c;
  if (bigger) {
    number = i - 1;
    while (true) {
      number++;
      c = isItEasy(number);
      if (c)
        return number;
    }
  }
  else {
    number = i + 1;
    while (true) {
      number = number - 1;
      c = isItEasy(number);
      if (c)
        return number;
    }
  }
};
var cycleEasy = function() {
  var number = 1;
  while(true) {
    var b = isItEasy(number);
    if(b) console.log(number);
    number++;
  }
};
var deleniye = function (delimoye, _delitel) {
    var s = delimoye / _delitel;
    s = Math.floor(s);
    var ost = delimoye - (_delitel * s);
    var r = {
      chastnoye: s,
      ostatok: ost
    };
    return r;
};

var nearest_kratnoye = function (n, delitel, bigger) {
  var c, number;
    if(bigger) {
      number = n - 1;
      while(true) {
        number++;
        c = check(number, delitel);
        if(c) {
          return number;
        }
      }
    } else {
      number = n + 1;
      while(true) {
        number--;
        c = check(number, delitel);
        if(c) {
          return number;
        }
      }
    }
};
