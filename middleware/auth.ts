export default defineNuxtRouteMiddleware(async (to) => {
  const user = useSupabaseUser();

  if(!(user.value)) {
    return navigateTo('/sign-in');
  }

  // no need to redirect, continue.
  // ...
});
