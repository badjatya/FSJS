# Q.7  Whats Inheritance and Purpose of it?

Inheritance is a fundamental concept in object-oriented programming (OOP) that allows one class to inherit properties and behaviors from another class. It enables the creation of a hierarchy of classes, where subclasses (derived classes) inherit the characteristics of a superclass (base class).

The purpose of inheritance is to promote code reusability, create hierarchical relationships, and enable the organization and structuring of code in a more logical and manageable way.

Here's how inheritance works and its purpose:

1. Superclass and Subclass:
   - Inheritance involves creating a superclass (base class) that defines the common properties and behaviors shared by a group of related objects.
   - A subclass (derived class) is then created that inherits the properties and behaviors of the superclass.
   - The subclass can add additional properties and behaviors or override the inherited ones to provide specialized functionality.

2. Code Reusability:
   - Inheritance promotes code reusability by allowing the subclass to inherit and reuse the properties and behaviors defined in the superclass.
   - Common functionality can be implemented in the superclass, eliminating the need to rewrite code in every subclass that requires the same functionality.

3. Hierarchical Relationships:
   - Inheritance allows for the creation of hierarchical relationships among classes.
   - The superclass represents a higher level of abstraction, defining common characteristics shared by multiple subclasses.
   - Subclasses represent more specific and specialized entities that inherit and extend the functionality of the superclass.

4. Overriding and Extending:
   - Subclasses have the ability to override (redefine) methods or properties inherited from the superclass to provide their own implementation.
   - This allows for customization and specialization of behavior in the subclasses.
   - Subclasses can also add new properties and methods to extend the functionality inherited from the superclass.

5. Polymorphism:
   - Inheritance plays a crucial role in achieving polymorphism, which allows objects of different classes to be treated as objects of a common superclass.
   - Polymorphism enables code to be written that can work with objects of different types without needing to know their specific classes.

By using inheritance, you can create a hierarchy of classes that represents the relationships and characteristics of real-world entities. It promotes code reuse, reduces redundancy, and provides a way to organize and structure code in a modular and maintainable manner. Inheritance is a powerful mechanism in OOP for creating flexible and extensible code and supporting the principles of abstraction and polymorphism.