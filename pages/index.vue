<template>
  <div>
    <section id="hello" class="w-full h-screen pl-4 pt-32">
      <div class="w-full flex flex-col">
        <div class="flex flex-col space-y-3">
          <h1 class="font-bold text-4xl">Hello!</h1>
          <!-- TODO: Animate from alias to name -->
          <h1 id="me" class="font-bold text-4xl">
            I'm <br class="md:hidden" />
            Chabunda Victor.
          </h1>
          <p class="w-42 text-2xl font-light">
            Am a mobile, desktop and web developer with a passion for creating
            user-friendly and interactive software.
          </p>
        </div>
        <div class="my-8">
          <button
            class="w-32 items-center justify-center text-lg font-bold action-btn"
          >
            <nuxt-link to="#contacts"> Contact Me </nuxt-link>
          </button>
        </div>
        <div>
          <SocialLinks />
        </div>
      </div>
    </section>
    <section id="skills"></section>
    <section id="highlights"></section>
    <section id="education"></section>
    <section id="contacts"></section>
  </div>
</template>
<script lang="ts">
import Vue from 'vue'

export default Vue.extend({})
</script>
