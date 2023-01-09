<script setup lang="ts">
  const client = useSupabaseClient();
  const email = ref('hello@dakotahtaylor.com');
  const password = ref('hello@dakotahtaylor.com');
  
  const handleJoin = async () => {
    if(email.value.length === 0 || password.value.length === 0) {
      return;
    }

    const result = await client.auth.signUp({
      email: email.value,
      password: password.value
    });
    if(result.error) {
      return console.log(result.error);
    }

    console.log('success?', result.data);
  };

</script>
<template>
  <form v-on:submit.prevent="handleJoin">
    <NuxtLink to="/">Go Back</NuxtLink>
    <input type="text" placeholder="E-mail" v-model="email">
    <input type="password" placeholder="Password" v-model="password">
    <button type="submit">Join</button>
  </form>
</template>