<script setup>
const { $apiFetcher } = useNuxtApp()
const userServiceModule = new UserServiceModule($apiFetcher)

// ✅ fetch all users with cached data
const { data: users } = useAsyncData('fetchAllUsers', () =>
  userServiceModule.fetchAllUsers())
</script>

<template>
  <div>
    Nuxt module playground!
    <pre>
      {{ users }}
    </pre>
  </div>
</template>
