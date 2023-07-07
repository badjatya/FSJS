# Q.4 What is the purpose of using Media Queries for Print Media?

Media queries for print media serve the purpose of customizing the appearance and layout of a webpage when it is printed. They allow you to specify specific styles that should be applied when a user prints a webpage or generates a PDF version of it. The use of media queries for print media ensures that the printed output is optimized for the printing device and provides a better reading and printing experience.

Here are some key purposes of using media queries for print media:

1. Print-specific styling: Media queries for print media enable you to define specific CSS rules that are applicable only when a webpage is printed. This allows you to modify the appearance of elements to ensure legibility and proper rendering on paper. For example, you can adjust font sizes, remove background colors or images, apply page breaks, and control margins and padding to optimize the content for print.

2. Layout adjustments: Media queries for print media allow you to modify the layout of a webpage when it is printed. This includes adjusting the positioning and formatting of elements to ensure they fit well within the printed page. You can specify different column arrangements, hide or show certain content, and reorganize the structure of the page to make it more printer-friendly.

3. Page breaks and pagination: Media queries for print media provide control over how content is divided across pages when printed. You can specify where page breaks should occur to prevent awkward content cutoffs or to ensure logical divisions of the content. By defining appropriate CSS rules, you can manage pagination, widows, and orphans to create a visually appealing and readable printed output.

4. Removing unnecessary elements: Media queries for print media enable you to selectively hide or remove elements that are not relevant or necessary for the printed version of a webpage. This can include navigation menus, sidebars, advertisements, or any other content that is not essential for the printed document. Removing such elements helps reduce clutter and makes the printed output more focused and concise.

To use media queries for print media, you would typically define a media query with the `print` media type. For example:

```css
@media print {
  /* CSS rules for print media */
}
```

Within the media query, you can specify the desired styles and layout adjustments that should be applied when the webpage is printed or generated as a PDF.