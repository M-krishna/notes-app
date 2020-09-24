<template>
  <div class="home">
    <Notes />
  </div>
</template>

<script>
// @ is an alias to /src
import Notes from '@/components/Notes.vue'

export default {
  name: 'Home',
  components: {
    Notes
  }
}
</script>
