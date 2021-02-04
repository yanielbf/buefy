import './chunk-1fafdf15.js'
import './helpers.js'
import './chunk-ce068f0a.js'
import './chunk-1c565a33.js'
import { r as registerComponent, u as use } from './chunk-cca88db8.js'
import { P as Pagination, a as PaginationButton } from './chunk-e48f431c.js'
export { P as BPagination, a as BPaginationButton } from './chunk-e48f431c.js'

var Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Pagination)
        registerComponent(Vue, PaginationButton)
    }
}
use(Plugin)

export default Plugin
