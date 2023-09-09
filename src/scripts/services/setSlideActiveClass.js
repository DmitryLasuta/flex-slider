import { SELECTORS } from './selectors'

export function setSlideActiveClass({ target: slide }, slideNodes) {
  slideNodes.forEach(node => node.classList.remove(SELECTORS.ACTIVE_CLASS_NAME))
  slide.classList.add(SELECTORS.ACTIVE_CLASS_NAME)
}
