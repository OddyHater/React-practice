function Animal(type, phrase) {
    this.type = type;
    this.phrase = phrase;
    
    function say() {
        return `${type} says ${phrase}`;
    }
  }
  
  const fox = new Animal('fox', 'woopwoopwoop');
  const tRex = new Animal('T-rex', 'ЯAWR');
  
  fox.say(); // fox says woopwoopwoop
  tRex.say(); // T-rex says ЯAWR
  