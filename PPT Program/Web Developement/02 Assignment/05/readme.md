# Q.5 How is Border-box different from Content Box?

border-box and content-box refer to two different box-sizing models in CSS, which determine how the width and height of an element are calculated.

Content Box (default): In the content-box model, the width and height of an element are calculated by considering only the content area, excluding padding, border, and margin. This means that if you specify a width of, for example, 200 pixels, the final width of the element will be 200 pixels plus any additional padding or border added. The total width of the element will be the sum of its content width, padding width, and border width.

Border Box: In the border-box model, the width and height of an element are calculated by including the content area, padding, and border. When you specify a width of, for example, 200 pixels, the element's width will include the content width, padding width, and border width. In this model, the total width of the element is fixed, and any specified padding or border is deducted from the content area to fit within the specified width.

The main difference between border-box and content-box is how the width and height of an element are interpreted and calculated. The border-box model simplifies box sizing by allowing you to set the total width of an element while taking into account the padding and border. This can be advantageous for easier and more predictable layout calculations.

To specify the box-sizing model, you can use the box-sizing property in CSS. For example:

```css
.box {
    box-sizing: border-box; /* or content-box */
}
```

By default, most elements have box-sizing: content-box applied. However, it is common practice to set box-sizing: border-box at the beginning of a CSS file using a CSS reset or by setting it explicitly for specific elements or the entire document to achieve consistent and predictable layouts.
