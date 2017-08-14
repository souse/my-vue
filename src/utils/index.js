/**
 * 存储localStorage
 */
export const setStore = (name, content) => {
	if (!name) return;
	if (typeof content !== 'string') {
		content = JSON.stringify(content);
	}
	window.localStorage.setItem(name, content);
}

/**
 * 获取localStorage
 */
export const getStore = name => {
	if (!name) return;
	return window.localStorage.getItem(name);
}

/**
 * 删除localStorage
 */
export const removeStore = name => {
	if (!name) return;
	window.localStorage.removeItem(name);
}

/**
 * 获取日期 默认 2018年12月12日
 * @param  {[type]} time [description]
 * @param  {[type]} type '-, /'
 * @return {[type]}      [description]
 */
export const getDate = (time, type='-') => {
	const date = new Date(time)
	const yyyy = date.getFullYear()
	let mm = date.getMonth() + 1
	let dd = date.getDay()

	mm = mm < 10 ? ('0' + mm) : mm
	dd = dd < 10 ? ('0' + dd) : dd

	return yyyy + type + mm + type + dd
}

