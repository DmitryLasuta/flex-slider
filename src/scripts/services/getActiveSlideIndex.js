import { SELECTORS } from './selectors'

export const getActiveSlideIndex = slideNodes => {
  return [...slideNodes].findIndex(slide =>
    slide.classList.contains(SELECTORS.ACTIVE_CLASS_NAME)
  )
}
