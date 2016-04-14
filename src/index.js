// placeholder
import { createElement, createFactory, isValidElement } from './createElement'
import { addDirective, removeDirective } from './directive'
import { render, destroy } from './render'
import { DOMAttrDirective, DOMPropDirective } from './DOMPropertyOperations'
import { styleDirective } from './CSSPropertyOperations'
import { eventDirective } from './event-system'

addDirective('attr', DOMAttrDirective)
addDirective('data', DOMAttrDirective)
addDirective('aria', DOMAttrDirective)
addDirective('prop', DOMPropDirective)
addDirective('on', eventDirective)
addDirective('style', styleDirective)

const Vengine = {
	createElement,
	createFactory,
	isValidElement,
	addDirective,
	removeDirective,
	render,
	destroy
}

export default Vengine