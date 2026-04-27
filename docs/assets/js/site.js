(() => {
	const root = document.documentElement
	document.body.classList.add('is-enhanced')

	const progress = document.createElement('div')
	progress.className = 'scroll-progress'
	progress.setAttribute('aria-hidden', 'true')
	document.body.prepend(progress)

	const updateProgress = () => {
		const max = document.documentElement.scrollHeight - window.innerHeight
		const value = max > 0 ? window.scrollY / max : 0
		root.style.setProperty('--scroll-progress', value.toFixed(4))
	}

	updateProgress()
	window.addEventListener('scroll', updateProgress, { passive: true })
	window.addEventListener('resize', updateProgress)

	if (window.matchMedia('(pointer: fine)').matches) {
		window.addEventListener(
			'pointermove',
			event => {
				root.style.setProperty('--spot-x', `${event.clientX}px`)
				root.style.setProperty('--spot-y', `${event.clientY}px`)
			},
			{ passive: true },
		)
	}

	document.querySelectorAll('#content > table').forEach(table => {
		const shell = document.createElement('div')
		shell.className = 'table-shell'
		table.parentNode.insertBefore(shell, table)
		shell.appendChild(table)
	})

	const revealTargets = document.querySelectorAll(
		'#content > h2, #content > h3, #content > p, #content > ul, #content > .table-shell, #content > blockquote, details',
	)

	if ('IntersectionObserver' in window) {
		const observer = new IntersectionObserver(
			entries => {
				entries.forEach(entry => {
					if (!entry.isIntersecting) return
					entry.target.classList.add('is-visible')
					observer.unobserve(entry.target)
				})
			},
			{ rootMargin: '0px 0px -8% 0px', threshold: 0.08 },
		)

		revealTargets.forEach(element => {
			element.classList.add('reveal-ready')
			observer.observe(element)
		})
	}
})()
