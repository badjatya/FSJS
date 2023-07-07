# Q.2 How do you define a media query in CSS?

To define a media query in CSS, you use the `@media` rule followed by one or more conditions or expressions that specify when the associated CSS rules should be applied. The basic syntax of a media query looks like this:

```css
@media media_type and (media_feature: value) {
  /* CSS rules to apply */
}
```

Here's a breakdown of the different parts:

- `@media`: This keyword signals the start of a media query rule.
- `media_type`: It represents the type of media for which the styles will be applied. The most common media types are `all` (default, applies to all devices), `screen` (for screens such as desktops, laptops, tablets), `print` (for printers), `speech` (for speech synthesizers), and more.
- `media_feature: value`: This specifies the condition or feature that needs to be met for the styles to be applied. There are numerous media features available, such as `width`, `height`, `orientation`, `resolution`, `aspect-ratio`, `device-width`, `device-height`, and many others. You can use comparison operators (`<`, `>`, `<=`, `>=`) to define specific values or ranges for the media features.
- CSS rules: Inside the curly braces, you define the CSS rules that will be applied when the conditions of the media query are satisfied.

Here's an example that demonstrates a media query for targeting screens with a maximum width of 600 pixels:

```css
@media screen and (max-width: 600px) {
  /* CSS rules to apply */
}
```

In this example, the CSS rules inside the media query will be applied only when the media type is "screen" (indicating a screen-based device) and the maximum width of the viewport is 600 pixels or less. You can then define specific styles within the curly braces to customize the appearance of your webpage for such devices.
