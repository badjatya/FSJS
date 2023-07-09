# Q.8 Whats Encapsulation and Purpose of it ?

Encapsulation is a fundamental principle in object-oriented programming (OOP) that involves bundling data (attributes) and methods (behavior) together within a class, and restricting direct access to the internal state of an object. It provides data hiding and abstraction, allowing controlled access to an object's properties and behaviors.

The purpose of encapsulation is to protect the integrity and internal details of an object, promote modularity, and provide a clean and well-defined interface for interacting with the object.

Here's how encapsulation works and its purpose:

1. Class and Object:
   - Encapsulation is achieved by defining a class, which serves as a blueprint for creating objects.
   - A class encapsulates the data (attributes) and methods (behavior) related to a specific entity or concept.
   - Objects are instances of the class, and they encapsulate the specific data and behavior defined by the class.

2. Data Hiding:
   - Encapsulation hides the internal state of an object, making the data private or accessible only through defined methods.
   - Data members are often declared as private or protected, preventing direct access or modification from outside the class.
   - Access to the data is provided through public methods, also known as getters and setters, which allow controlled interaction with the object's state.

3. Abstraction and Information Hiding:
   - Encapsulation supports abstraction, where the internal complexities of an object are hidden, and only the essential features are exposed.
   - The public interface of the object, consisting of public methods, defines how the object can be interacted with.
   - The internal implementation details are encapsulated within the class, allowing changes to be made without affecting the code that uses the object.

4. Modularity and Code Organization:
   - Encapsulation promotes modularity by grouping related data and behavior together within a class.
   - It allows for clear separation of concerns and provides a way to organize code into self-contained units.
   - Encapsulated objects can be treated as black boxes, providing a well-defined interface and reducing dependencies between different parts of the codebase.

5. Data Validation and Access Control:
   - Encapsulation enables the implementation of data validation and access control logic within the class.
   - By encapsulating data and providing controlled access through methods, you can enforce constraints and rules on how the data is accessed and modified.
   - This helps in maintaining the integrity of the object's state and prevents invalid or inconsistent data from being used.

Encapsulation provides several benefits, including improved code maintainability, enhanced security and privacy of data, code reusability, and better code organization. It allows objects to hide their internal complexities and expose a well-defined interface, promoting clean and robust design. Encapsulation is a key principle of OOP and helps in achieving encapsulation, abstraction, and information hiding in your code.