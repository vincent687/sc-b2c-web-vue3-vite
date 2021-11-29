<template>
  <main>
    <div>
      <!-- Hero card -->
      <div class="bg-peach lg:px-40">
        <div class="grid grid-cols-12">
          <div class="col-span-12 row-start-2 sm:col-span-5 sm:row-start-1">
            <div class="flex h-full justify-center sm:justify-end">
              <img
                class="w-64 object-contain"
                alt="Good. For you."
                src="../../../assets/hero.png"
              />
            </div>
          </div>
          <div class="col-span-12 sm:col-span-7">
            <div class="px-4 py-6 sm:px-6 sm:py-8 lg:py-12 lg:px-8">
              <h1
                class="text-center text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
              >
                <span class="block text-black">Good.</span>
                <span class="block text-black">For you.</span>
              </h1>
              <p class="mt-6 max-w-lg mx-auto text-center text-sm text-black sm:max-w-3xl">
                嘗試新體驗，幫助有需要的人，認識一世的朋友。
              </p>
              <p class="max-w-lg mx-auto text-center text-sm text-black sm:max-w-3xl">
                立即下載手機APP
              </p>
              <div class="mt-10 flex justify-center">
                <img class="w-32 mx-1" alt="Google Play" src="../../../assets/google-play.svg" />
                <img class="w-32 mx-1" alt="App Store" src="../../../assets/app-store.svg" />
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Logo cloud -->
      <div class="bg-gray-100">
        <div class="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
          <p class="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
            Trusted by over 5 very average small businesses
          </p>
          <div class="mt-6 grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
            <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                class="h-12"
                src="https://tailwindui.com/img/logos/tuple-logo-gray-400.svg"
                alt="Tuple"
              />
            </div>
            <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                class="h-12"
                src="https://tailwindui.com/img/logos/mirage-logo-gray-400.svg"
                alt="Mirage"
              />
            </div>
            <div class="col-span-1 flex justify-center md:col-span-2 lg:col-span-1">
              <img
                class="h-12"
                src="https://tailwindui.com/img/logos/statickit-logo-gray-400.svg"
                alt="StaticKit"
              />
            </div>
            <div class="col-span-1 flex justify-center md:col-span-2 md:col-start-2 lg:col-span-1">
              <img
                class="h-12"
                src="https://tailwindui.com/img/logos/transistor-logo-gray-400.svg"
                alt="Transistor"
              />
            </div>
            <div class="col-span-2 flex justify-center md:col-span-2 md:col-start-4 lg:col-span-1">
              <img
                class="h-12"
                src="https://tailwindui.com/img/logos/workcation-logo-gray-400.svg"
                alt="Workcation"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
