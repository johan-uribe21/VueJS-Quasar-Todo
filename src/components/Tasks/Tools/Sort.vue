<template>
  <q-select 
    filled 
    v-model="sortBy" 
    class="col q-ml-sm"
    :options="options" 
    label="Sort by" 
    stack-label 
    emit-value
    map-options/>
</template>

<script>
import { mapState, mapActions } from 'vuex'
export default {
  data () {
    return {
      options: [
        {
          label:'Name',
          value: 'name'
        },
        {
          label:'Date',
          value: 'dueDate'
        },
      ],

      dense: false,
      denseOpts: false
    }
  },
  computed: {
    ...mapState('tasks', ['sort']),
    sortBy: {
      get() {
        return this.sort
      },
      set(value) {
        this.setSort(value)
      }
    }
  },
  methods: {
    ...mapActions('tasks', ['setSort'])
  }
}
</script>

<style scoped>
  .q-select {
    flex: 0 0 112px;
  }
</style>