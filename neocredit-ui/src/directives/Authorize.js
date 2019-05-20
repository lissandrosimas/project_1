import Facade from '@/facade/facade'
const facade = new Facade()

export default {
    inserted(el, binding) {
        let removeEl = false

        if (binding.value.roles !== undefined && binding.value.roles !== null) {
            removeEl = facade.hasRole(binding.value.roles)
        }

        if (binding.value.permissions !== undefined && binding.value.permissions !== null) {
            removeEl = removeEl && facade.hasPermission(binding.value.permissions)
        }

        if (!removeEl) {
            el.remove();
        }

    }
}