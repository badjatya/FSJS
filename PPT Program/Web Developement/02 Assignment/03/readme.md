# Q.3 What is VW/VH ?

vw and vh are units of measurement in CSS that represent relative lengths based on the viewport size.

VW (Viewport Width): vw represents 1% of the viewport width. For example, if the viewport width is 1000 pixels, 1vw would be equivalent to 10 pixels (1% of 1000 pixels). This unit is useful for creating responsive designs that adapt to different screen sizes.

VH (Viewport Height): vh represents 1% of the viewport height. Similar to vw, 1vh is equal to 1% of the viewport height. For instance, if the viewport height is 800 pixels, 1vh would be equivalent to 8 pixels (1% of 800 pixels). It is commonly used for creating elements that scale proportionally with the height of the viewport.

By utilizing these units, you can create flexible and responsive layouts that adapt to various screen sizes. For example, you can set the width of an element to 50vw to make it occupy 50% of the viewport width, regardless of the device or screen size. Similarly, using vh, you can create elements that adjust their size based on the height of the viewport.

Here's an example of how you can use vw and vh in CSS:

```css
.container {
    width: 50vw; /* Sets the width to 50% of the viewport width */
    height: 80vh; /* Sets the height to 80% of the viewport height */
}
```

In the above example, the .container element will have a width of 50% of the viewport width and a height of 80% of the viewport height, ensuring it scales proportionally on different devices and screen resolutions.
