<template>

    <div>
        <div class="input-group mb-4" style="background-color: transparent;">
            <span class="input-group-addon"><i :class="icon"></i></span>
            <slot name="input"></slot>
        </div>
    </div>


</template>

<script>

    export default {
        props: ['icon'],
        data() {
            return {}
        }
    }

</script>