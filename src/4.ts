class Key {
  private signature: string;
  constructor() {
    this.signature = (Math.random() * 10).toString();
  }
  getSignature(): string {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}
  getKey(): Key {
    return this.key;
  }
}
abstract class House {
  protected door: boolean = false;
  private tenants: Person[] = [];
  constructor(protected key: Key) {}

  comeIn(person: Person) {
    if (!this.door) {
      return;
    }
    this.tenants.push(person);
  }

  abstract openDoor(key: Key): boolean;
}

class MyHouse extends House {
  openDoor(key: Key): boolean {
    if (key.getSignature() === this.key.getSignature()) {
      return (this.door = true);
    }
    return (this.door = false);
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
