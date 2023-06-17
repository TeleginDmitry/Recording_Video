const path = require('path')

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
	webpack: {
		alias: {
			'@components': resolvePath('src/components'),
			'@assets': resolvePath('src/assets'),
			'@hooks': resolvePath('src/hooks'),
			'@utils': resolvePath('src/utils'),
		},
	},
}
