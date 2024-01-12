<template>
  <section class="bg-white py-12 sm:py-16 lg:py-20 xl:py-24">
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="grid grid-cols-1 gap-x-20 gap-y-12 lg:grid-cols-7">
        <div class="grid place-items-end overflow-hidden rounded-3xl bg-blue-100 lg:col-span-3">
          <NuxtImg
            loading="lazy"
            decoding="async"
            class="-mb-8 w-full"
            format="webp"
            src="https://landingfoliocom.imgix.net/store/collection/saasui/images/features/9/feature-9.png"
            alt=""
          />
        </div>

        <div class="lg:col-span-4 xl:pr-24">
          <div class="max-w-lg lg:max-w-none">
            <p class="text-base font-semibold text-blue-600">
              Real-time Analytics
            </p>
            <h2 class="mt-6 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl lg:mt-8 lg:pr-8 lg:text-5xl">
              Understand your customers with better reports.
            </h2>
            <div class="mt-8">
              <a
                href="#"
                title=""
                class="inline-flex items-center justify-center rounded-full border border-transparent bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm transition-all duration-200 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-700 focus:ring-offset-2"
                role="button"
              >
                Start using LandingFolio
              </a>
            </div>
          </div>

          <div class="mt-12 border-t border-gray-200 pt-8 md:mt-16 xl:mt-24">
            <p class="text-base font-normal leading-7 text-gray-900 xl:pr-24">
              “Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ornare non sed est cursus. Vel hac convallis ipsum, facilisi odio pellentesque bibendum viverra tempus.”
            </p>
            <p class="mt-3 text-base font-semibold text-gray-900">
              Grandon Jones
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
