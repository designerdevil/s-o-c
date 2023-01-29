# Separation Layer
This is to demo the capabilities and POC for handling concerns.

### APIs Handled
**/processReactMarkup**
This is to demo React rendering based on the asset passed to this route. Below the body format required
`form-data`
```
.js file passed in form data without key

and

"metaData"
{
    "title": "Title of the page",
    "other":5,
    "keywords":"keyword1, mykeyword2, yourkeyword, hiskeyword"
}
```

**/processConfiguration**
This is to demo Configuration mapper based on the data passed to this route. Below is the format needed
`raw json`
```
{
	"baseAPI": "/apiURL",
	"client": "clientA",
	"token": "RANDOM_TOKEN_123"
}
```

### Postman Details
API details can be found in _docs