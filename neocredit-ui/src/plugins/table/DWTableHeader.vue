<template>
   <div>
      <div class="row">
         <div class="col-md-6">
            <i class="fa fa-align-justify"></i> Mostrando {{ pagination.numberOfElements }} de {{ pagination.totalElements }} registro(s)
         </div>
         <div class="col-md-6 text-right">
            <label>Exibir</label>
            <select2 v-model="selected" :options="sizes" style="width: 65px"></select2>
         </div>
      </div>
   </div>
</template>
<script>
   export default {
      props: {
         size: {
            type: [Number,String],
            required: true,
            default: 20
         },
         pagination: {
            type: Object,
            required: true
         }
      },
      data() {
         return {
            selected: 20,
            sizes: [{ id: 20, text: '20' }, { id: 50, text: '50' }, { id: 100, text: '100' }],
         }
      },
      watch: {
         selected: function () {
            this.$emit('finish', this.selected);
         }
      }
   }
</script>
