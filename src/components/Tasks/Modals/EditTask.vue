<template>
  <q-card>
    <modal-header>Edit Task</modal-header>
    <q-form @submit="submitForm">
      <q-card-section>
        <modal-task-name ref="modalTaskName" :name.sync="taskToSubmit.name" />
        <modal-due-date :dueDate.sync="taskToSubmit.dueDate"/>
        <modal-due-time 
          :dueTime.sync="taskToSubmit.dueTime" 
          v-if="taskToSubmit.dueDate" />
      </q-card-section>
      <modal-buttons />
    </q-form>
  </q-card>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  props: ['task', 'id'],
  data() {
    return {
      taskToSubmit: {}
    }
  },
  methods: {
    ...mapActions('tasks', ['updateTask']),
    submitForm() {
      this.$refs.modalTaskName.$refs.name.validate()
      if (!this.$refs.modalTaskName.$refs.name.hasError){
        this.submitTask()
      }
    },
    submitTask(){
      this.updateTask({
        id: this.id,
        updates: this.taskToSubmit,
      })
      this.$emit('close')
    }
  },
  components: {
    'modal-header': require('components/Tasks/Modals/Shared/ModalHeader.vue').default,
    'modal-task-name': require('components/Tasks/Modals/Shared/ModalTaskName.vue').default,
    'modal-due-date': require('components/Tasks/Modals/Shared/ModalDueDate.vue').default,
    'modal-due-time': require('components/Tasks/Modals/Shared/ModalDueTime.vue').default,
    'modal-buttons': require('components/Tasks/Modals/Shared/ModalButtons.vue').default,
  },
  mounted() {
    this.taskToSubmit = Object.assign({}, this.task)

  } 
}
</script>

<style>

</style>