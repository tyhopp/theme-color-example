# theme-color-example

Shows how Safari behaves when the user's preferred color scheme is <code>dark</code>, and there is enough render-blocking CSS that the underlays and scroll bars do not respect the dark color scheme preference.

Also shows a solution to the issue using the `<meta name="theme-color" content="..." />` tag.

## Usage

1. Clone the repo
2. `npm run start`
3. Make sure your OS has a dark color scheme preference
4. Visit http://localhost:8000 in a private window in Safari, see the underlay and scroll bars not respect the dark color scheme
5. Visit http://localhost:8000/fixed-with-reduced-render-blocking-css in a private window in Safari, see the underlay and scroll bars respect the dark color scheme
6. Visit http://localhost:8000/fixed-with-theme-color-meta in a private window in Safari, see the underlay and scroll bars respect the dark color scheme
