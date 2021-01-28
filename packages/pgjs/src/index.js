import my from 'mymodule';

class MyClass {
  #pField = 'hello';

  getPField() {
    return this.#pField;
  }
}

console.log(my);

export default MyClass;
