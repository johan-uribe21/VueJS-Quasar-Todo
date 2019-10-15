<template>
  <div class="row q-mb-sm">
    <q-input 
      clearable
      class='col'
      outlined 
      :value="name" 
      @input="$emit('update:name', $event)"
      label="Task name" 
      :rules="[val => !!val || 'Task name is required']"
      ref="name"
      autofocus/>
    </div>
</template>

<script>
export default {
  props: ['name']
}
</script>

<style>

</style>