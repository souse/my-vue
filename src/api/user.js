const userInfo = {
	username: '张三',
	sex: '男',
	mobile: 13821171724,
	birthday: '2017-07-09'
}
/**
 * 登录
 * @param  {[type]} username [description]
 * @param  {[type]} password [description]
 * @return {[type]}          [description]
 */
export const loginInfo = (username, password) => {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve(userInfo)
		}, 1000)	
	})
}


export const registerInfo = (user={}) => {
	return fetch(`http://management-api.test.chupinxiu.com/h5/user/getProtocol?shopId=1451`)
        .then(response => response.json())
        .then(json => {
        	return userInfo
        })
}