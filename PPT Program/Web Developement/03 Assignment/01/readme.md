# Q.1 What is a Media Query in CSS, and what is its purpose?

A media query in CSS is a feature that allows you to apply different styles to a webpage based on certain conditions such as the device's screen size, resolution, orientation, or other characteristics. It enables you to create responsive designs that adapt and display properly across various devices and screen sizes, including desktops, laptops, tablets, and smartphones.

The purpose of media queries is to provide a way to customize the layout and presentation of web content based on the capabilities and constraints of the user's device. By using media queries, you can target specific devices or device categories and apply different CSS rules accordingly. This helps ensure that your website or application looks and functions well on different devices and provides an optimal user experience.

Media queries use the `@media` rule in CSS and allow you to specify a set of CSS rules that will be applied only when certain conditions are met. For example, you can define a media query to apply a different layout or adjust font sizes when the screen width is below a certain threshold, or change the styling when the device is in landscape or portrait mode.

Here's an example of a media query that applies a different background color to a webpage when the screen width is less than or equal to 600 pixels:

```css
@media (max-width: 600px) {
  body {
    background-color: lightblue;
  }
}
```

In this example, the CSS rule inside the media query will be applied only when the maximum width of the viewport is 600 pixels or less.
