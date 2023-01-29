
module.exports = {
    generateConfig: ({token = '', client = '', baseAPI = ''}) => {
        if(token === "RANDOM_TOKEN_123") {
            if( client === 'clientA' ) {
                return {
                    productAPI: `${baseAPI}/aaaa923998230/products`,
                    contentAPI: `${baseAPI}/aaaa923998230/content`,
                    contactAPI: `${baseAPI}/aaaa923998230/contacts`,
                }
            } else if( client === 'clientB' ) {
                return {
                    productAPI: `${baseAPI}/bbbbb23423423/products`,
                    contentAPI: `${baseAPI}/bbbbb23423423/content`,
                    contactAPI: `${baseAPI}/bbbbb23423423/contacts`,
                }
            } else {
                return {
                    message: 'Sorry no API available',
                }
            }
        } else {
            return {
                message: 'Sorry no API available',
            }
        }
    },
}