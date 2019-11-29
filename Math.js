var Math = function() {

};
m = new Math;
Math.prototype.check = function(x, y) {
  return x % y === 0;
};
Math.prototype.write = function(number) {
  var resultMass = [];
  for(var i = 1; i < number + 1; i++) {
    var result = number % i;
    if(result === 0) {
      resultMass.push(i);
    }
  }
  return(resultMass);
};
Math.prototype.isItEasy = function(number) {
  var needToBeEasy = [1, number].join(' ');
  var result = m.write(number).join(' ');
  if(result === needToBeEasy) {
    return(true);
  } else {
    return(false);
  }
};
Math.prototype.stepen = function(podkorennoye, pokazatel) {
  var p = podkorennoye;
  var pok = pokazatel;
  for(var i = 1; i < pok; i++) {
    p = p * podkorennoye;
  }
  return p;
};
Math.prototype.factorial = function(a) {
  var b = 1;
  for(var t = 1; t <= a; t++) {
    b = b * t;
  }
  return b;
};
Math.prototype.SL = function(r, whatToDo) {
  if(whatToDo === "S") return Math.PI * (r * r);
  if(whatToDo === "L") return 2 * r * Math.PI;
  return "Wrong number";
};
Math.prototype.degressToRadian = function(degress) {
  var rad = Math.PI / 180;
  return degress * rad;
};
Math.prototype.PS = function(a, b, whatToDo) {
  if(whatToDo === "P") return (a + b) * 2;
  if(whatToDo === "S") return a * b;
  return "Wrong number";
};
Math.prototype.VSparallel = function(a, b, h, whatToDo) {
  if(whatToDo === "V") return a * b * h;
  if(whatToDo === "S") {
    var S = 2*(a*b + b*h + a*h);
    return S;
  }
  return "Wrong item";
};
Math.prototype.VSsphero = function(r, whatToDo) {
  if(whatToDo === "V") return (4 / 3) * Math.PI * (r * r * r);
  if(whatToDo === "S") return 4 * Math.PI * (r * r);
  return "Wrong item";
};
Math.prototype.nearestEasy = function(i, bigger) {
  var number, c;
  if (bigger) {
    number = i - 1;
    while (true) {
      number++;
      c = m.isItEasy(number);
      if (c)
        return number;
    }
  }
  else {
    number = i + 1;
    while (true) {
      number = number - 1;
      c = m.isItEasy(number);
      if (c)
        return number;
    }
  }
};
Math.prototype.cycleEasy = function() {
  var number = 1;
  while(true) {
    var b = m.isItEasy(number);
    if(b) console.log(number);
    number++;
  }
};
Math.prototype.deleniye = function (delimoye, _delitel) {
    var s = delimoye / _delitel;
    s = Math.floor(s);
    var ost = delimoye - (_delitel * s);
    var r = {
      chastnoye: s,
      ostatok: ost
    };
    return r;
};

Math.prototype.nearest_kratnoye = function (n, delitel, bigger) {
  var c, number;
    if(bigger) {
      number = n - 1;
      while(true) {
        number++;
        c = m.check(number, delitel);
        if(c) {
          return number;
        }
      }
    } else {
      number = n + 1;
      while(true) {
        number--;
        c = m.check(number, delitel);
        if(c) {
          return number;
        }
      }
    }
};
exports.connect = function(opts) {
  return new Math(opts);
};