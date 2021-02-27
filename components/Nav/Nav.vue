<template>
  <nav
    class="w-full h-16 fixed lg:pt-2 flex flex-col lg:flex-row text-2xl lg:text-lg font-bold text-dark-primary"
  >
    <div class="w-full lg:w-24 h-16 flex">
      <div class="w-24 md:w-40 h-full flex">
        <Logo class="m-auto" />
      </div>
      <!-- Mobile Menu Button-->
      <div class="w-8 h-full lg:hidden flex ml-auto mr-5" @click="toggleMenu()">
        <!-- TODO: Add change icon on open and close -->
        <button class="my-auto">
          <svg
            width="32"
            height="25"
            viewBox="0 0 32 25"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect width="32" height="3" rx="1" fill="#181818" />
            <rect y="11" width="32" height="3" rx="1" fill="#181818" />
            <rect y="22" width="32" height="3" rx="1" fill="#181818" />
          </svg>
        </button>
      </div>
    </div>

    <div
      v-if="open"
      class="w-full min-h-screen h-screen lg:h-auto lg:min-h-full flex flex-col lg:flex-row flex-grow-0 bg-white"
    >
      <!-- Navigation Links -->
      <!-- TODO: Add Animation To Bar -->
      <ul
        class="mt-10 lg:my-auto lg:ml-auto flex flex-col lg:flex-row lg:space-x-8 items-center"
      >
        <li class="p-4" @click="swichIndex(0)">
          <nuxt-link to="/">home</nuxt-link>
          <div
            v-if="index == 0"
            class="w-full h-1"
            style="background: #181818"
          ></div>
        </li>
        <li class="p-4" @click="swichIndex(1)">
          <nuxt-link to="/projects"
            >projects
            <div
              v-if="index == 1"
              class="w-full h-1"
              style="background: #181818"
            ></div
          ></nuxt-link>
        </li>
        <li class="p-4" @click="swichIndex(2)">
          <nuxt-link to="#contacts"
            >contacts
            <div
              v-if="index == 2"
              class="w-full h-1"
              style="background: #181818"
            ></div
          ></nuxt-link>
        </li>
        <li class="p-4" @click="swichIndex(3)">
          <nuxt-link to="/about"
            >about
            <div
              v-if="index == 3"
              class="w-full h-1"
              style="background: #181818"
            ></div
          ></nuxt-link>
        </li>
      </ul>

      <!-- Actions -->
      <div class="lg:hidden w-2/3 ml-12 mt-auto text-lg text-dark-primary">
        <span style="margin-bottom: 24px; opacity: 60%; display: block">
          Have a job or intersted
          <br />
          in talking to me?
        </span>

        <button class="w-32 m-auto text-lg font-bold action-btn">
          <nuxt-link to="/email-me"> Call Me </nuxt-link>
        </button>

        <span style="margin: 12px 48px; opacity: 60%; display: block">or</span>
        <button class="w-32 m-auto text-lg font-bold action-btn">
          <nuxt-link to="/email-me"> Email Me </nuxt-link>
        </button>
      </div>
      <!-- Social Links -->
      <SocialLinks class="mt-8 mb-24 mx-auto lg:hidden" />
    </div>
    <div class="hidden lg:inline mx-8 my-auto">
      <!-- Email Me Button -->
      <button
        id="email-me-btn"
        class="w-32 m-auto items-center justify-center text-lg font-bold action-btn"
      >
        <nuxt-link to="/email-me"> Email Me </nuxt-link>
      </button>
    </div>
  </nav>
</template>
<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  data() {
    return {
      index: 0,
      open: false,
    }
  },
  mounted() {
    this.shouldOpen()
    window.addEventListener('resize', this.shouldOpen)
  },
  destroyed() {
    window.removeEventListener('resize', this.shouldOpen)
  },
  methods: {
    swichIndex(newIndex: number) {
      this.index = newIndex
    },
    toggleMenu() {
      this.open = !this.open
    },
    shouldOpen() {
      if (process.client) {
        const isMobile = document.body.clientWidth < 1024
        if (!isMobile) {
          this.$data.open = true
        } else if (isMobile) {
          return (this.$data.open = false)
        }
      }
    },
  },
})
</script>
