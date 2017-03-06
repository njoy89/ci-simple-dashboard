import 'babel-polyfill';
import { jsdom } from 'jsdom';
import sass from 'node-sass';

// Allow use CSS Modules and test them
import hook from 'css-modules-require-hook';

hook({
    extensions: ['.css', '.scss', '.less'],
    generateScopedName: '[name]__[local]',
    // Ignore errors on css-modules since it depends on sass resolution first and we don't have such here.
    preprocessCss: ( data, file ) => sass.renderSync({ file }).css
});

const url = 'http://localhost:3000';

// Create a fake DOM to test React components
global.document = jsdom(`
    <!doctype html>
    <html>
        <head></head>
        <body></body>
    </html>
`);

global.window = document.defaultView;
global.navigator = document.defaultView.navigator;

global.fetch = () => {

};
