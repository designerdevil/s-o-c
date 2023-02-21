const React = require('react')
const ReactDOM = require('react-dom')
const ReactDOMServer = require('react-dom/server')
const { TextEncoder } = require("util")
const vm = require('vm')
const util = require('../util/processForm')

module.exports = {
	processRequest: async(req, res) => {
		const request = await util.parseFile(req, res)
		if (request.body) {
			console.log(`Received render request`)
			const context = {
				React: React,
				ReactDOM: ReactDOM,
				ReactDOMServer: ReactDOMServer,
				TextEncoder: TextEncoder,
				console: console,
				isServerSide: true,
				__rendered: "",
				document: undefined,
			}
			
			const scriptCode = request.body
			const code = scriptCode.toString('utf8')
			vm.createContext(context)
			vm.runInContext(code, context)
			/** Below line shows the code pass as a request */
			// res.end(JSON.stringify({ data: code}))

			/** Below line shows the rendered version of the code passed */
			res.end(JSON.stringify({status:"success", data: context.__rendered, metaData: request.metaData}))
		} else {
			res.end(JSON.stringify({status:"failed", message:"Unknown request type"}))
		}
	}
}