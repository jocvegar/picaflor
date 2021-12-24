<template>
  <section class="text-gray-600 body-font overflow-hidden">
    <div class="container px-5 py-12 mx-auto">
      <div class="lg:w-4/5 mx-auto flex flex-wrap items-center">
        <img
          alt="chile"
          class="
            lg:w-1/2
            w-full
            lg:h-auto
            h-1/3
            object-center object-fill
            rounded
          "
          src="../assets/chile.jpeg"
        />

        <div class="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h2 class="text-sm title-font text-gray-500 tracking-widest">
            Picaflor
          </h2>
          <h1 class="text-gray-900 text-3xl title-font font-medium mb-12">
            Something
          </h1>

          <p class="leading-relaxed">
            Fam locavore kickstarter distillery. Mixtape chillwave tumeric
            sriracha taximy chia microdosing tilde DIY. XOXO fam indxgo
            juiceramps cornhole raw denim forage brooklyn. Everyday carry +1
            seitan poutine tumeric. Gastropub blue bottle austin listicle
            pour-over, neutra jean shorts keytar banjo tattooed umami cardigan.
          </p>

          <div class="flex mt-8">
            <span class="title-font font-medium text-2xl text-gray-900">
              Lps. 500.00
            </span>
          </div>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="py-24 mx-auto flex justify-center bg-red-600">
      <div
        class="
          bg-white
          rounded-lg
          p-8
          flex flex-col
          mt-10
          md:mt-0
          relative
          z-4
          shadow-md
          w-1/2
        "
      >
        <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">
          Ordena
        </h2>
        <p class="leading-relaxed mb-5 text-gray-600">
          Post-ironic portland shabby chic echo park, banjo fashion axe
        </p>
        <div class="relative mb-4">
          <label for="email" class="leading-7 text-sm text-gray-600">
            Correo
          </label>
          <input
            type="email"
            id="email"
            name="email"
            class="
              w-full
              bg-white
              rounded
              border border-gray-300
              focus:border-red-500 focus:ring-2 focus:ring-red-200
              text-base
              outline-none
              text-gray-700
              py-1
              px-3
              leading-8
              transition-colors
              duration-200
              ease-in-out
            "
          />
        </div>
        <div class="relative mb-4">
          <label for="message" class="leading-7 text-sm text-gray-600">
            Mensaje
          </label>
          <textarea
            id="message"
            name="message"
            class="
              w-full
              bg-white
              rounded
              border border-gray-300
              focus:border-red-500 focus:ring-2 focus:ring-red-200
              h-32
              text-base
              outline-none
              text-gray-700
              py-1
              px-3
              resize-none
              leading-6
              transition-colors
              duration-200
              ease-in-out
            "
          ></textarea>
        </div>
        <button
          class="
            text-white
            bg-red-500
            border-0
            py-2
            px-6
            focus:outline-none
            hover:bg-red-600
            rounded
            text-lg
          "
        >
          Enviar
        </button>
        <p class="text-xs text-gray-500 mt-3">
          Chicharrones blog helvetica normcore iceland tousled brook viral
          artisan.
        </p>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style></style>
