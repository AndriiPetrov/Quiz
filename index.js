function uncensor(str, leters) {
  return leters.split('').reduce((init, curElem) => {
    return init.replace("*", curElem);
  }, str);
}

uncensor("Wh*r* d*d my v*w*ls g*?", "eeioeo");
