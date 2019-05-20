<template>
   <div>
      <div class="col-md-5 pull-left" > 
         <strong>Permissões Diponíveis</strong>
         <select v-model="selected_available" multiple style="width: 100%; height: 250px;">
            <option v-for="opt in availableSort" :value="opt.id" v-on:dblclick="add()">{{opt.text}}</option>
         </select>
      </div>
      <div class="col-sm-1 pull-left" style="margin-top: 4%;">
         <button type="button" class="btn btn-primary btn-sm select-btn-right" @click="add()">
            <i class="fa fa-arrow-right fa-2x"></i>
         </button>
         <button type="button" class="btn btn-primary btn-sm select-btn-left" style="margin-top: 10px;" @click="remove()">
            <i class="fa fa-arrow-left fa-2x"></i>
         </button>
      </div>
      <div class="col-md-5 pull-left"> 
         <strong>Permissões Concedidas</strong>
         <select v-model="selected_requested" multiple style="width: 100%; height: 250px;">
            <option v-for="opt in requestedSort" :value="opt.id" v-on:dblclick="remove()">{{opt.text}}</option>
         </select>
      </div>
   </div>
</template>
<script>
   export default {
      props: {
         available: {
            type: Array,
            required: true
         },
         requested: {
            type: Array,
            required: true
         }
      },
      data() {
         return {
            selected_available: [],
            selected_requested: [],
            listrequested: [],
            listavailable: []
         }
      },
      watch: {
         available() {
            this.listavailable = this.available;
         },
         requested() {
            this.listrequested = this.requested;
         }
      },
      computed: {
         availableSort() {
            return this.listavailable.sort((a,b) => {
               if (a.id > b.id) {
                  return 1;
               } else {
                  return -1;
               }
            });
         },
         requestedSort() {
            return this.listrequested.sort((a,b) => {
               if (a.id > b.id) {
                  return 1;
               } else {
                  return -1;
               }
            });
         }
      },
      methods: {
         add() {
            let vm = this;

            if (vm.selected_available.length > 0) {
               let items = _.pullAllWith(vm.listavailable, vm.selected_available, (arrVal, othVal) => {
                  if (arrVal.id == othVal) {
                     vm.listrequested.push(arrVal);
                     return true;
                  }
                  return false;
               });
               this.$emit('update', vm.listrequested);
            }
         },
         remove() {
            let vm = this;

            if (vm.selected_requested.length > 0) {
               let items = _.pullAllWith(vm.listrequested, vm.selected_requested, (arrVal, othVal) => {
                  if (arrVal.id == othVal) {
                     vm.listavailable.push(arrVal);
                     return true;
                  }
                  return false;
               });

               this.$emit('update', vm.listrequested);
            }
         }
      },
      mounted() {
         this.listrequested = this.requested;
         this.listavailable = this.available;
      }
   }
</script>
<style>
   select[multiple] {
      padding: 7px 9px!important;
   }
</style>
