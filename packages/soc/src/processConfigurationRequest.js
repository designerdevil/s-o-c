const util = require('../util/processForm')

module.exports = {
	processRequest: async(req, res) => {
		const body = await util.parseForm(req);
		if (body) {
			res.end(JSON.stringify({...body}))
		} else {
			res.end(JSON.stringify({status:"failed", message:"Unknown request type"}))
		}
	}
}