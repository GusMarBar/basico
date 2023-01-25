const myName = 'Gustavo';
const myAge = 26;
const suma = (a: number, b: number) => {
  return a + b;
};
suma(10, 15);
class Persona {
  constructor(private age: number, private name: string) {}
  getSummary() {
    return `my name is ${this.name}, ${this.age}`;
  }
}
const Gustavo = new Persona(26, 'gustavo');

