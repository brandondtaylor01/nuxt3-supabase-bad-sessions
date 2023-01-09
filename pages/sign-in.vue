<script setup lang="ts">
  const client = useSupabaseClient();
  const user = useSupabaseUser();
  const email = ref('');
  const password = ref('');

  const handleSignIn = async () => {
    if(email.value.length === 0 || password.value.length === 0) {
      return;
    }

    const result = await client.auth.signInWithPassword({
      email: email.value,
      password: password.value
    });

    // do some error handling later.
    // ...
  };

  onMounted(() => {
    client.auth.onAuthStateChange((event, session) => {
      if(event === 'SIGNED_IN') {
        navigateTo('/dashboard');
      }
    });
  })
</script>

<template>
  <form v-on:submit.prevent="handleSignIn">
    <NuxtLink to="/">Go Back</NuxtLink>
    <input type="text" placeholder="E-mail" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button type="submit">Sign-in</button>
  </form>
</template>
