//------------------------------------------------------------------------------
class User {
  constructor() {}
  setAge(value){
    this.age = value;
  }
  setName(value){
    this.name = value;
  }
  setSurname(value){
    this.surname = value;
  }
}

function boundFieldDecorator(fnc, min, max){
  return function(...args){
    if(args >= min && args <= max){
      return fnc.call(this, ...args);
    }
  }
}

User.prototype.setAge = boundFieldDecorator(User.prototype.setAge, 5, 10);
let user = new User();
user.setAge(10);
//------------------------------------------------------------------------------
function isValidLastFirstName(str){
  return /^([a-z]+)$/i.test(str);
}
function checkField(fnc, fnc2){
    return function(...args){
      if(fnc2(args)){
        return fnc.call(this, ...args);
      }
    }
}

User.prototype.setName = checkField(User.prototype.setName, isValidLastFirstName);
User.prototype.setSurname = checkField(User.prototype.setSurname, isValidLastFirstName);
user.setName('Petr');
user.setSurname('Petrovsky');
console.log(user);

let user2 = new User();
user2.setName('Gendalf');
user2.setSurname('Sery2');
user2.setAge(350);
console.log(user2);
//------------------------------------------------------------------------------
