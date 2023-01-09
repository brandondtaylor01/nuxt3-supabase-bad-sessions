<script setup lang="ts">
  definePageMeta({
    middleware: ['auth']
  });

  const client = useSupabaseClient();
  const user = useSupabaseUser();

  const handleSignOut = async () => {
    await client.auth.signOut()
  };

  onMounted(() => {
    client.auth.onAuthStateChange(async (event, session) => {
      if(event === 'SIGNED_OUT') {
        navigateTo('/sign-in');
      }
    });
  });
</script>

<template>
  <button v-on:click="handleSignOut">Sign out</button>
</template>
