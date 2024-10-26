<template>
  <div>
    <h2>AboutView</h2>
    <p>Destination ID: {{ id }}</p> <!-- Imprime el ID recibido como prop -->
    <p v-if="destination">Destination Name: {{ destination.name }}</p>
    <label>
      Search: <input v-model.trim="search" maxlength="20" />
    </label>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'

// Simula una base de datos para el ejemplo
const sourceData = {
  destination: [
    { id: 1, name: 'Paris' },

  ]
}

export default defineComponent({
  props: {
    id: { type: Number, required: true }
  },
  computed: {
    destination() {
      return sourceData.destination.find(
        destination => destination.id === this.id
      )
    }
  },
  setup() {
    const router = useRouter()
    const route = useRoute()

    const search = computed({
      get() {
        return route.query.search ?? ''
      },
      set(search) {
        router.replace({ query: { search } })
      }
    })

    return { search }
  }
})
</script>
