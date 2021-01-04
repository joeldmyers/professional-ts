# My notes

This repo was forked from https://github.com/mike-north/professional-ts. Original notes from Mike North can be seen there.

## Latest Typescript Features

### Optional Chaining

```
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

```

If address is undefined, above expression will be terminated early. Note, this adds a condition

### Nullish Coalescing

Like using the || for default values, but with ?? - safer bc it specifically handles '' (empty string) or 0 coercing to false.

Ex:

```
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
```

### Variadic Tuple Types:

So refresh, normal tuple in TS (from typescript docs):

```
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
```

Type 'number' is not assignable to type 'string'.
Type 'string' is not assignable to type 'number'.

Variadic tuple types allow us to do the following:

`type Foo<T extends any[]> = [boolean, ...T, boolean];`

### Labeled Tuple Types

// this is bad because there is no label for each value in the tuple.
`type Address = [number, string, string, number];`

function printAddress(...address: Address) {
// now we have to go through specific index, which is annoying.
}

`type Address = [streetNumber: number, city: string, state: string, postal: number];`

In the above, it helps with autocomplete.

### Recursive Type Aliases

```
type JSONValue =
  | string
  | number
  | boolean
  | null
  | JSONValue[]
  | {
    [k: string]: JSONValue;
  }

const val: JSONValue = {
  name: 'joel',
  address: {
    street: 'Spear St'
  }
}
```

### Type Literals - only works in v4.1

```
type Corner = `${'top'|'bottom'}-${'left'|'right'}`;
```

The above works.

This can create a set of strings, top-left, top-right, bottom-left, bottom-right.

### Ts-expect-error

```
// @ts-expect-error
const num1: number = 'five';
// @ts-ignore
const num2: number = 'six';

```

Ts-expect-error is better because ts-ignore is pretty vague.

## Rest Client

Rest Client VS Code Extension is cool! Add API Examples. Will need to circle back on this to review again.
