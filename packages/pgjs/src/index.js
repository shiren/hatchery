class MyClass {
  #pField = 'hello';

  getPField() {
    return this.#pField;
  }
}

console.log(new MyClass().getPField());

export default MyClass;
