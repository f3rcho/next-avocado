# NextJS

## Preloading with hover

This options it is not active on the new version of next, by default Next justo render at once everything.

## Debugger

To use debugger on next just add to the scripts on package.json

```js
    "dev": "NODE_OPTIONS='--inspect' next",
```

## Extend document

- Since the Document is rendered on the server, events such as onClick will not work.
- React components outside of <Main /> will not be initialized by the browser. Do not add application logic here or custom CSS (such as styled-jsx). If you need shared components on all your pages (such as a menu or toolbar).
- Document's getInitialPropsfunction is not called during client-side transitions, nor when a page is statically optimized.

## Extend app

- In the \_app file we can inject anabolics (providers, themes, props, or whatever we need) to our whole application.
