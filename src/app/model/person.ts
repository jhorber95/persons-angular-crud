export interface IPerson {
  id?: number;
  name?: string;
  lastname?: string;
  dni?: string;
  genre?: string;
  age?: number;
}

export class Person implements IPerson {

  constructor(public dni?: string,
              public genre?: string,
              public id?: number,
              public age?: number,
              public lastname?: string,
              public name?: string) {
  }


}
