//from:
//http://www.codedata.com.tw/javascript/essential-javascript-15-prototype/

function Person(name, age) {
  this.name = name;
  this.age = age;
  this.toString = function() {
    return '[' + this.name + ', ' + this.age + ']';
  };
}
//Person 函式中使用了函式實字建立了函式實例，並指定給 toString 特性，不過每次呼叫建構式時，都會建立一次函式實例。





function toString() {
    return '[' + this.name + ',' + this.age + ']';
}
 
function Person(name, age) {
    this.name = name;
    this.age = age;
    this.toString = toString;
}
//這可以解決重複建立函式實例的問題，但在全域範圍（物件）上多了個 toString 名稱





function Person(name, age) {
    this.name = name;
    this.age = age;
}
 
Person.prototype.toString = function() {
    return '[' + this.name + ', ' + this.age + ']';
};
 
var p1 = new Person('Justin', 35);
var p2 = new Person('Momor', 32);
 
console.log(p1.toString());   // [Justin, 35]
console.log(p2.toString());   // [Momor, 32]

//使用 new 關鍵字時，JavaScript 會先建立一個空物件，接著設定物件的原型為函式的 prototype 特性所參考的物件，
//然後呼叫建構式並將所建立的空物件設為 this。

//JavaScript 在尋找特性名稱時，會先在實例上找尋有無特性，以上例而言，p1 上會有 name 與 age 特性，所以可以直接取得對應的值。
//如果物件上沒有該特性，會到物件的原型上去尋找，以上例而言，p1 上沒有 toString 特性，所以會到 p1 的原型上尋找，
//而 p1 的原型物件此時也就是 Person.prototype 參考的物件，這個物件上有 toString 特性，所以可以 找到 toString 所參考的函式並執行
