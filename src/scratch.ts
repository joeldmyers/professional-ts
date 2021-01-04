/* eslint-disable @typescript-eslint/no-unused-vars */
const x: {
  user: {
    name: string;
    address?: {
      street: string;
      city: string;
    };
  };
} = undefined as any;

console.log(x.user.address?.city);

class Foo {
  name;
  constructor(rawName?: string) {
    // Nullish Coalescing - ??
    this.name = rawName ?? '(no name)';
  }

  log() {
    console.log(this.name);
  }
}
