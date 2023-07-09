# Q.10 What’s Super Keyword & What it does?

In JavaScript, the `super` keyword is used to call and access the parent class's constructor and methods from within a subclass. It is often used in classes that inherit from a superclass to invoke the superclass's constructor or to call overridden methods.

Here's an explanation of the `super` keyword and its usage:

1. Accessing the Parent Class's Constructor:
   - When a subclass extends a superclass, the subclass's constructor can call the superclass's constructor using the `super()` method.
   - This is done to initialize the inherited properties defined in the superclass.
   - The `super()` method must be called before accessing the `this` keyword in the subclass's constructor.
   ```javascript
   class Animal {
     constructor(name) {
       this.name = name;
     }
   }

   class Dog extends Animal {
     constructor(name, breed) {
       super(name); // Call the parent class's constructor
       this.breed = breed;
     }
   }

   const myDog = new Dog('Buddy', 'Labrador');
   console.log(myDog.name); // Output: Buddy
   console.log(myDog.breed); // Output: Labrador
   ```

2. Calling Overridden Methods:
   - The `super` keyword is also used to call overridden methods defined in the parent class.
   - Within a subclass, you can use `super.methodName()` to invoke the method implementation of the parent class.
   - This allows the subclass to extend or modify the behavior defined in the parent class.
   ```javascript
   class Animal {
     makeSound() {
       console.log('Animal makes a sound.');
     }
   }

   class Dog extends Animal {
     makeSound() {
       super.makeSound(); // Call the parent class's method
       console.log('Dog barks.');
     }
   }

   const myDog = new Dog();
   myDog.makeSound();
   // Output:
   // Animal makes a sound.
   // Dog barks.
   ```

The `super` keyword provides a way to access and call the parent class's constructor and methods from within a subclass. It allows for proper initialization of inherited properties and enables the subclass to extend or override the behavior defined in the parent class. The `super` keyword helps in achieving inheritance and code reuse in object-oriented programming in JavaScript.