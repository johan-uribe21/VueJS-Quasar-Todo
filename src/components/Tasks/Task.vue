<template>
  <q-item 
    @click="updateTask({id, updates: {completed: !task.completed}})"
    :class="!task.completed? 'bg-orange-1' : 'bg-green-1' "
    clickable >
    <q-item-section side top>
      <q-checkbox v-model="task.completed" />
    </q-item-section>

    <q-item-section>
      <q-item-label :class="{ 'text-strikethrough' : task.completed}">
        {{task.name}}
      </q-item-label>
    </q-item-section>
    <q-item-section v-if="task.dueDate" side >
      <div class="row">
        <div class="column justify-center">
          <q-icon
            class='q-mr-xs'
            size="18px" 
            name="event" />
        </div>
        <div class="column">
          <q-item-label class="row justify-end" caption>
            {{task.dueDate}}
          </q-item-label>
          <q-item-label class="row justify-end" caption>
            <small>{{task.dueTime}}</small>
          </q-item-label>
        </div>
      </div>
    </q-item-section>
    <q-item-section side >
      <div class="row">
        <q-btn 
          @click.stop="showEditTask=true"
          dense
          flat 
          round 
          color="primary" 
          icon="edit" 
        />
        <q-btn 
          @click.stop="promptToDelete(id)"
          dense
          flat 
          round 
          color="red" 
          icon="delete" 
        />
      </div>
    </q-item-section>
   
    <q-dialog v-model="showEditTask">
      <edit-task :task="task" :id="id" @close="showEditTask=false"/>
    </q-dialog>
    
  </q-item>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data() {
    return {
      showEditTask: false
    }
  },
  props: ['task', 'id'],
  methods: {
    ...mapActions('tasks', ['updateTask', 'deleteTask']),
    promptToDelete(id){
            this.$q.dialog({
        title: 'Confirm',
        message: 'Really delete?',
        cancel: true,
        persistent: true
      }).onOk(() => {
        this.deleteTask(id)
      })
    }
  },
  components: {
    'edit-task': require('components/Tasks/Modals/EditTask.vue').default
  },
}
</script>

<style>

</style>