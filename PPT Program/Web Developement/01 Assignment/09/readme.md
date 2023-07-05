What’s the difference between html tag and attribute and give example of some global attributes?

In HTML, there is a distinction between tags and attributes.

**HTML Tags:** Tags are the markup syntax used to define the structure and appearance of content within an HTML document. They are represented by angled brackets (< and >) and are used to enclose elements. For example, `<div>`, `<p>`, and `<img>` are all examples of HTML tags.

**HTML Attributes:** Attributes, on the other hand, provide additional information or modify the behavior of HTML elements. They are used within the opening tag of an element and consist of a name and a value. Attributes provide instructions to browsers and define various characteristics of an element. Examples of attributes include `src`, `alt`, `class`, `id`, `href`, and more.

**Global Attributes:** Global attributes are attributes that can be used on any HTML element. They are not specific to any particular tag or element type. Some examples of global attributes are:

1. `class`: Specifies one or more CSS classes to apply to an element, allowing you to target and style elements using CSS.
2. `id`: Provides a unique identifier for an element, which can be used for JavaScript manipulation or CSS styling.
3. `style`: Allows inline CSS styling to be applied directly to an element.
4. `title`: Specifies additional information about an element. It is often displayed as a tooltip when the user hovers over the element.
5. `data-*`: This is a custom attribute prefix that allows you to store custom data on an element. The `*` can be replaced with any name you choose.

Example usage of global attributes:
```html
<div class="container" id="myDiv" style="color: red;" title="This is a container">
  <p data-info="example">This is a paragraph with custom data attribute.</p>
</div>
```

In this example, the `<div>` element uses the `class`, `id`, `style`, and `title` attributes to define its properties. The `<p>` element utilizes the `data-info` attribute to store custom data.

Global attributes provide a way to add common functionalities and metadata to HTML elements, regardless of their specific tags or purposes.