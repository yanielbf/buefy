import './chunk-1fafdf15.js'
import './helpers.js'
import './chunk-ce068f0a.js'
import { r as registerComponent, u as use } from './chunk-cca88db8.js'
import './chunk-8e25f175.js'
import './chunk-42f463e6.js'
import { D as Dropdown, a as DropdownItem } from './chunk-1336fe77.js'
export { D as BDropdown, a as BDropdownItem } from './chunk-1336fe77.js'

var Plugin = {
    install: function install(Vue) {
        registerComponent(Vue, Dropdown)
        registerComponent(Vue, DropdownItem)
    }
}
use(Plugin)

export default Plugin
