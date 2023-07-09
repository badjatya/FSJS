# Q.1 What’s Constructor And Its Purpose?

In object-oriented programming, a constructor is a special method or function that is used to initialize an object when it is created. It is called automatically at the time of object creation to set up the initial state and behavior of the object. The purpose of a constructor is to ensure that an object is properly initialized with the required properties and values.

In JavaScript, constructors are typically defined as functions with the same name as the class or object they are constructing. Constructors are invoked using the `new` keyword followed by the constructor name, which creates a new instance of the object.

Here's an example of a constructor function in JavaScript:

```javascript
function Person(name, age) {
  this.name = name;
  this.age = age;
}

const john = new Person('John', 30);
console.log(john.name); // Output: John
console.log(john.age); // Output: 30
```

In this example, the `Person` constructor function takes `name` and `age` as parameters and assigns them to the properties `name` and `age` of the newly created object (`this` refers to the new object being constructed). When the `new Person('John', 30)` statement is executed, it creates a new instance of the `Person` object with the specified name and age.

The constructor's purpose is to perform any necessary setup tasks and initialization for the object. It allows you to define and assign initial values to the object's properties, set up default values, validate inputs, establish connections, or perform any other necessary operations before the object is ready to be used.

Constructors provide a convenient way to create multiple objects of the same type with consistent initialization. They encapsulate the logic required to create objects and ensure that the objects are in a valid state when created.

It's important to note that in JavaScript, classes were introduced in ES6 (ECMAScript 2015), providing a more structured and syntactic way to define constructors and object-oriented programming. Classes have a special method called `constructor()` that serves as the constructor for the class.