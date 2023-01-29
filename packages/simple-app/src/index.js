/**
 * Below code is the full version
 * (Has all the imports)
 * in this client and server markup generation is done.
 * 
 * This is to showcase the heavy package size that
 * we will be passing through postman
 * 
 * NOTE: Ensure to enable "REACT" import in App.js
 */
import * as ReactDOM from "react-dom/client";
import * as ReactDOMServer from 'react-dom/server';
import App from './App.js';

if(document) {
    ReactDOM.createRoot(
        document.getElementById('root'),
    ).render(<App />);
} else {
    __rendered = ReactDOMServer.renderToStaticMarkup(<App/>);
}



/**
 * Below code is the extracted version
 * (Has no imports)
 * in this only server markup generation is done.
 * 
 * This is to showcase the optimized package size that
 * we will be passing through postman
 * 
 * NOTE: Ensure to remove "REACT" import in App.js
 */
// import App from './App.js';

// __rendered = ReactDOMServer.renderToStaticMarkup(<App/>);