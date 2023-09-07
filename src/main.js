import './scss/main.scss'

const slides = document.querySelectorAll('.slide')

const stopCarousel = () => {
	clearInterval(carousel)
	slides.forEach(slide => slide.classList.remove('active'))
}

slides.forEach(slide => {
	slide.addEventListener('mouseenter', () => {
		stopCarousel()
		slide.classList.add('active')
	})

	slide.addEventListener('mouseleave', () => {
		carousel = setInterval(toggleSlides, 2000)
		slide.classList.remove('active')
	})
})

let i = 0

function toggleSlides() {
	if (i < slides.length) {
		if (
			i + 1 !== slides.length &&
			!slides[i + 1].classList.contains('active')
		) {
			slides[i].classList.remove('active')
			slides[i + 1].classList.add('active')
		}
		i++
	} else {
		i = 0
		slides[i].classList.add('active')
		slides[slides.length - 1].classList.remove('active')
	}
}

let carousel = setInterval(toggleSlides, 2000)
