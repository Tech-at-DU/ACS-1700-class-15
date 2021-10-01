
export function random(n) {
	return Math.floor(Math.random() * n)
}

export function randomColor() {
	const hue = random(360)
	return `hsl(${hue}, 100%, 50%)`
}

export function choose(arr) {
	return arr[random(arr.length)]
}

export function randomFont() {
	const fonts = ['Arial','Verdana','Helvetica','Tahoma','Trebuchet MS','Times New Roman','Georgia','Garamond','Courier New','Brush Script MT']
	return choose(fonts)
}