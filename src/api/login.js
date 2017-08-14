/**
 * 登录
 * @param  {[type]} username [description]
 * @param  {[type]} password [description]
 * @return {[type]}          [description]
 */
const userInfo = {
	username: '张三',
	sex: '男',
	age: 18,
	mobile: 13821171724
}
export const loginInfo = (username, password) => {
	return new Promise(function(resolve, reject) {
		setTimeout(function() {
			resolve({username: userInfo})
		}, 1000)	
	})
}