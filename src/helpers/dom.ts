export function strToDom (str: string): DocumentFragment {
  return document.createRange().createContextualFragment(str)
}

export function removeWithAnimation (el: Element) {
  el.classList.add('is-leaving')
  window.setTimeout(() => {
    el.remove()
  }, 900)
}
