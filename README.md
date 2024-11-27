# Lexical renderer example

NOTE: Payload 3.2.0 [now comes with its own Lexical -> JSX converter](https://payloadcms.com/docs/lexical/converters#lexical-jsx). This example will be updated soon on how to render custom blocks, but you can probably skip this repo and go straight to Payload's official implementation.

------

Adapted from [@AlessioGr](https://github.com/AlessioGr)'s work. This is an example of what you can implement to render Lexical as React nodes. You're expected to modify the example yourself and adapt this to your needs.

This renderer provides sample implementation for (frontend only - does not update the Lexical editor sadly):
- All core functionalities of Lexical (text, tables, quotes, etc.)
- Lightbox for images
- YouTube embed
- Media embed with caption (inline or block) - use the inline example to inline basically anything when rendering
- Sample for rendering a relationship (Releases)

The sample is currently updated for v3.0 Beta 97. Later versions of Payload should not break the example.

There's no requirement to keep the code `async`. If you want to remove all asyncs (e.g. because you want to render on the client), feel free to make the change.

License: MIT
