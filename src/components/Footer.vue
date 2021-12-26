<template>
  <footer class="text-gray-600 body-font">
    <div
      class="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col"
    >
      <a
        @click="scrollToTop()"
        class="
          flex
          title-font
          font-medium
          items-center
          md:justify-start
          justify-center
          text-gray-900
        "
      >
        <img
          class="h-10 w-auto hover:scale-125 ease-in-out duration-300"
          src="../assets/logo.png"
          alt="logo"
        />
        <span class="ml-3 text-xl hover:scale-125 ease-in-out duration-300">
          Picaflor
        </span>
      </a>
      <p
        class="
          text-sm text-gray-500
          hover:text-red-500
          sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0
          mt-4
        "
      >
        © {{ new Date().getFullYear() }} by
      </p>
      <a
        class="flex ml-2 text-teal-600 hover:text-teal-800"
        href="https://jose-vega.netlify.app/"
        target="_blank"
      >
        <CodeIcon class="h-6 w-6" aria-hidden="true" />
        <span class="ml-2 font-semibold">Heka</span>
      </a>
      <span
        class="
          inline-flex
          sm:ml-auto sm:mt-0
          mt-4
          justify-center
          sm:justify-start
        "
      >
        <a
          href="https://www.instagram.com/chilepicaflorhn"
          target="_blank"
          class="
            ml-3
            text-gray-500
            hover:text-red-500 hover:scale-150
            ease-in-out
            duration-300
          "
        >
          <svg
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            class="w-5 h-5"
            viewBox="0 0 24 24"
          >
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path
              d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"
            ></path>
          </svg>
        </a>
      </span>
    </div>
  </footer>
</template>

<script setup>
import { CodeIcon } from "@heroicons/vue/outline";
function scrollToTop() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
}
</script>

<style></style>
