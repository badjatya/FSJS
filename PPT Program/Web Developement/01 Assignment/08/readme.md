What is the difference between <figure> tag and <img> tag?

The `<figure>` and `<img>` tags serve different purposes in HTML.

**<img> tag:** The `<img>` tag is used specifically for embedding images within an HTML document. It is a self-closing tag and does not have any content or nested elements. The `<img>` tag requires the `src` attribute to specify the path or URL of the image file. Other optional attributes like `alt`, `width`, and `height` can provide additional information about the image.

Example usage of the `<img>` tag:
```html
<img src="path/to/image.jpg" alt="Description of the image" width="300" height="200">
```

**<figure> tag:** The `<figure>` tag, on the other hand, represents self-contained content that is referenced from the main document. It is typically used to group and provide context for media content, such as images, illustrations, videos, or audio.

The `<figure>` tag can contain one or more media elements along with an optional `<figcaption>` element to provide a caption or description for the content.

Example usage of the `<figure>` tag:
```html
<figure>
  <img src="path/to/image.jpg" alt="Description of the image">
  <figcaption>Caption for the image</figcaption>
</figure>
```

In this example, the `<figure>` tag wraps the `<img>` tag to create a group of content. The `<figcaption>` element is used to provide a caption for the image, which can help provide additional information or context.

In summary, the `<img>` tag is used specifically for embedding images, while the `<figure>` tag is used to group and provide context for media content, including images. The `<figure>` tag can contain one or more media elements along with an optional `<figcaption>` element.