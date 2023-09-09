import { SELECTORS, setSlideActiveClass, getActiveSlideIndex } from './services'

export default class Slider {
  #sliderPanel = null
  #slideNodes = []
  get slideNodes() {
    return this.#slideNodes
  }
  #activeSlideIndex = 0
  #autoPlayInterval = null

  get sliderPanel() {
    return this.#sliderPanel
  }

  constructor(sliderPanel = null) {
    try {
      this.#sliderPanel = sliderPanel ?? document.querySelector(SELECTORS.SLIDER)
      this.#slideNodes = this.#sliderPanel.querySelectorAll(SELECTORS.SLIDE)
    } catch (error) {
      console.error(error)
      return
    }

    this.#sliderPanel.addEventListener('mouseleave', () => {
      this.#activeSlideIndex = getActiveSlideIndex(this.slideNodes)
      this.startSlideshow()
    })

    this.#slideNodes.forEach(slide => {
      slide.addEventListener('mouseenter', event => {
        this.stopSlideshow()
        setSlideActiveClass(event, this.slideNodes)
      })

      slide.addEventListener('mouseleave', event => {
        setSlideActiveClass(event, this.slideNodes)
      })
    })
  }

  #nextSlide() {
    const slidesCount = this.#slideNodes.length - 1
    const { slideNodes: slides } = this

    if (
      this.#activeSlideIndex < slidesCount &&
      slides[this.#activeSlideIndex]?.classList.contains(SELECTORS.ACTIVE_CLASS_NAME)
    ) {
      slides[this.#activeSlideIndex].classList.remove(SELECTORS.ACTIVE_CLASS_NAME)
      slides[this.#activeSlideIndex + 1].classList.add(SELECTORS.ACTIVE_CLASS_NAME)
      this.#activeSlideIndex++
    } else {
      slides[this.#activeSlideIndex].classList.remove(SELECTORS.ACTIVE_CLASS_NAME)
      slides[0].classList.add(SELECTORS.ACTIVE_CLASS_NAME)
      this.#activeSlideIndex = 0
    }
  }

  startSlideshow(interval = 2500) {
    if (this.#autoPlayInterval) clearInterval(this.#autoPlayInterval)
    this.#autoPlayInterval = setInterval(() => this.#nextSlide(), interval)
  }

  stopSlideshow() {
    if (this.#autoPlayInterval) clearInterval(this.#autoPlayInterval)
  }
}
