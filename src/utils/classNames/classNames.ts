export default function cn(
	defaultClasses?: string[],
	...conditions: [boolean, string][]
) {
	if (!defaultClasses) return

	const result: string[] = []

	defaultClasses.forEach(item => {
		result.push(item)
	})

	conditions.forEach(item => {
		if (item[0]) result.push(item[1])
	})

	return result.join(' ')
}
