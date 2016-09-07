function Person(name, age) {
  this.name = name;
  this.age = age;
  this.toString = function() {
    return '[' + this.name + ', ' + this.age + ']';
  };
}
//Person 函式中使用了函式實字建立了函式實例，並指定給 toString 特性，不過每次呼叫建構式時，都會建立一次函式實例。
