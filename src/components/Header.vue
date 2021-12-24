<template>
  <Popover
    class="sticky top-0 z-10"
    :class="scrollPosition > 80 ? 'bg-red-600' : 'bg-white'"
    v-slot="{ open }"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6">
      <div
        class="
          flex
          justify-between
          items-center
          py-6
          space-x-4
          md:justify-start md:space-x-10
        "
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <router-link to="/">
            <span class="sr-only">Picaflor</span>
            <img
              class="
                h-8
                w-auto
                sm:h-12
                ease-in-out
                duration-300
                hover:scale-125
              "
              src="../assets/name.png"
              alt=""
            />
          </router-link>
        </div>
        <div class="-mr-2 -my-2 md:hidden">
          <PopoverButton
            class="
              bg-white
              rounded-md
              p-2
              inline-flex
              items-center
              justify-center
              text-gray-400
              hover:text-gray-500 hover:bg-gray-100
              focus:outline-none
              focus:ring-2
              focus:ring-inset
              focus:ring-red-600
            "
          >
            <span class="sr-only">Open menu</span>
            <MenuIcon
              class="h-6 w-6"
              :class="scrollPosition > 80 ? 'text-red-600' : ''"
              aria-hidden="true"
            />
          </PopoverButton>
        </div>
        <PopoverGroup as="nav" class="hidden md:flex space-x-10">
          <router-link
            to="/"
            class="text-base font-medium"
            :class="
              scrollPosition > 80
                ? 'text-white hover:text-gray-900'
                : 'text-gray-500 hover:text-gray-900'
            "
          >
            Inicio
          </router-link>

          <router-link
            to="/about"
            class="text-base font-medium"
            :class="
              scrollPosition > 80
                ? 'text-white hover:text-gray-900'
                : 'text-gray-500 hover:text-gray-900'
            "
          >
            Nosotros
          </router-link>
        </PopoverGroup>
        <div class="hidden md:flex items-center justify-end md:flex-1 lg:w-0">
          <a
            @click="goToElement('order')"
            class="
              ml-8
              whitespace-nowrap
              inline-flex
              items-center
              justify-center
              px-4
              py-2
              border border-transparent
              rounded-md
              shadow-lg
              text-base
              font-medium
              ease-in-out
              duration-300
              hover:scale-125
            "
            :class="
              scrollPosition > 80
                ? 'text-red-600 bg-white hover:bg-red-200'
                : 'text-white bg-red-600 hover:bg-red-200'
            "
          >
            Ordenar
          </a>
        </div>
      </div>
    </div>

    <transition
      enter-active-class="duration-100 ease-out"
      enter-from-class="opacity-0 scale-95"
      enter-to-class="opacity-100 scale-100"
      leave-active-class="duration-100 ease-in"
      leave-from-class="opacity-100 scale-100"
      leave-to-class="opacity-0 scale-95"
    >
      <PopoverPanel
        v-slot="{ close }"
        focus
        class="
          absolute
          top-0
          inset-x-0
          p-2
          transition
          transform
          origin-top-right
          md:hidden
        "
      >
        <div
          class="
            rounded-lg
            shadow-lg
            ring-1 ring-black ring-opacity-5
            bg-white
            divide-y-2 divide-gray-50
          "
        >
          <div class="pt-5 pb-6 px-5">
            <div class="flex items-center justify-between">
              <div>
                <img class="h-8 w-auto" src="../assets/logo.png" alt="logo" />
              </div>
              <div class="-mr-2">
                <PopoverButton
                  class="
                    bg-white
                    rounded-md
                    p-2
                    inline-flex
                    items-center
                    justify-center
                    text-gray-400
                    hover:text-gray-500 hover:bg-gray-100
                    focus:outline-none
                    focus:ring-2
                    focus:ring-inset
                    focus:ring-red-600
                  "
                >
                  <span class="sr-only">Close menu</span>
                  <XIcon class="h-6 w-6" aria-hidden="true" />
                </PopoverButton>
              </div>
            </div>
            <div class="mt-6">
              <nav class="grid gap-y-8">
                <router-link
                  v-for="item in solutions"
                  @click="accept(close)"
                  :key="item.name"
                  :to="item.to"
                  class="-m-3 p-3 flex items-center rounded-md hover:bg-gray-50"
                >
                  <component
                    :is="item.icon"
                    class="flex-shrink-0 h-6 w-6 text-red-600"
                    aria-hidden="true"
                  />
                  <span class="ml-3 text-base font-medium text-gray-900">
                    {{ item.name }}
                  </span>
                </router-link>
              </nav>
            </div>
          </div>
          <div class="py-6 px-5 space-y-6">
            <div>
              <a
                @click="accept(close), goToElement('order')"
                class="
                  w-full
                  flex
                  items-center
                  justify-center
                  px-4
                  py-2
                  border border-transparent
                  rounded-md
                  shadow-sm
                  text-base
                  font-medium
                  text-white
                  bg-red-600
                  hover:bg-red-900
                "
              >
                Ordenar
              </a>
            </div>
          </div>
        </div>
      </PopoverPanel>
    </transition>
  </Popover>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from "vue";
import {
  Popover,
  PopoverButton,
  PopoverGroup,
  PopoverPanel,
} from "@headlessui/vue";
import {
  HomeIcon,
  UserGroupIcon,
  MenuIcon,
  XIcon,
} from "@heroicons/vue/outline";

const solutions = [
  {
    name: "Inicio",
    description:
      "Get a better understanding of where your traffic is coming from.",
    to: "/",
    icon: HomeIcon,
  },
  {
    name: "Nosotros",
    description: "Speak directly to your customers in a more meaningful way.",
    to: "/about",
    icon: UserGroupIcon,
  },
];

let scrollPosition = ref(0);

function updateScroll() {
  scrollPosition.value = window.scrollY;
}

function goToElement(element) {
  let target = document.getElementById(element);
  target.scrollIntoView({ behavior: "smooth" });
}
onMounted(() => {
  window.addEventListener("scroll", updateScroll);
});
onUnmounted(() => {
  window.removeEventListener("scroll", updateScroll);
});

function accept(close) {
  close();
}
</script>
