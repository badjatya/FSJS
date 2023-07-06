# Q.4 Whats difference between Inline, Inline Block and block ?

The differences between inline, inline-block, and block are related to how elements are displayed and interact with other elements on a web page.

Inline: Inline elements do not start on a new line and only take up the necessary width to fit their content. Examples of inline elements include <span>, <a>, and <strong>. Key characteristics of inline elements are:

They ignore properties like width and height.
Margins and paddings can be applied horizontally (left and right), but not vertically (top and bottom).
They flow alongside other inline elements within the same line.
They cannot contain block-level elements.
Inline-block: Inline-block elements share characteristics of both inline and block elements. They behave like inline elements by not starting on a new line, but they also allow the manipulation of width, height, margins, and paddings. Examples of inline-block elements include <img>, <input>, and <button>. Key characteristics of inline-block elements are:

They respect properties like width and height.
Margins and paddings can be applied in all directions.
They flow alongside other inline elements within the same line.
They can contain block-level elements.
Block: Block elements start on a new line and take up the full available width by default. Examples of block elements include <div>, <p>, and <h1>-<h6>. Key characteristics of block elements are:

They respect properties like width and height by default.
Margins and paddings can be applied in all directions.
They start on a new line and occupy the full width available in their parent container.
They can contain both inline and block-level elements.
In summary, inline elements do not start on a new line, inline-block elements behave like inline elements but allow for width and height adjustments, and block elements start on a new line and occupy the full available width. The choice of display type depends on the desired layout and behavior of the elements within the document structure.
