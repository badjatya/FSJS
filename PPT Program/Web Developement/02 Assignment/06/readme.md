# Q.6 What’s z-index and How does it Function ?

z-index is a CSS property that controls the stacking order of positioned elements on a web page along the z-axis (depth axis). It determines which elements appear in front or behind other elements.

The z-index property accepts an integer value, and elements with higher z-index values will appear in front of elements with lower z-index values. If two elements have the same z-index, their stacking order will be determined by their position in the HTML document (the element appearing later in the document will be on top).

Here's how z-index functions:

Stacking Context: Each element with a z-index value other than "auto" establishes a stacking context. Stacking contexts create a hierarchy of elements and determine their relative stacking order within their respective contexts.

Parent-Child Relationship: Elements are stacked within their parent stacking context. If a child element has a higher z-index value than its parent, it can appear in front of other children of the parent but will not overlap elements outside the parent.

Sibling Elements: Elements that share the same parent and stacking context are considered siblings. Sibling elements are stacked based on their z-index values and their position in the HTML document.

Positioned Elements: The z-index property applies only to elements with a position value of relative, absolute, or fixed. It does not affect elements with a static position.

It's important to note that z-index values only affect elements within the same stacking context. If two elements are in different stacking contexts (e.g., different parent elements with different z-index values), their stacking order is independent of each other.

Here's an example of how z-index can be used:

```css
.element1 {
    position: relative;
    z-index: 2;
}

.element2 {
    position: relative;
    z-index: 1;
}

.element3 {
    position: relative;
    z-index: 3;
}
```

In the above example, element3 would appear in front of both element1 and element2 since it has the highest z-index value. element1 would appear above element2 since it has a higher z-index value.

The z-index property is useful for controlling the stacking order of overlapping elements, such as dropdown menus, tooltips, or elements with overlapping backgrounds, allowing you to achieve the desired visual hierarchy and layering effect on your web page.
