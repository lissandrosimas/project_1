<template>
   <div>
      <textarea rows="15" cols="100"
         maxlength="maxlength"
         class="form-control"
         v-bind:readonly="readonly"
         :disabled="disabled"
         @input="updateValue($event.target.value)">{{ value }}</textarea>
      <span>{{diff}} caracter(es) restante(s).</span>
   </div>
</template>
<script>
   export default {
      props: {
         value: String,
         maxlength: { type: Number, default: 500, required: true },
         //rows: { type: Number, default: 40 },
         //cols: { type: Number, default: 40 },
         disabled: {
             type: Boolean,
             default: false
         },
         readonly: {
             type: Boolean,
             default: false
         }
      },
      computed: {
         diff: function () {
            return this.maxlength - this.value.length;
         }
      },
      methods: {
         updateValue(val) {
            this.$emit('input', val);
         }
      }
   }
</script>
