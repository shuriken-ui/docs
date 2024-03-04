<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="w-full rounded-xl bg-muted-100 p-4 dark:bg-muted-900">
      <div class="flex items-center">
        <div class="flex flex-wrap items-end gap-4">
          <div class="nui-toast nui-toast-low-contrast nui-toast-default nui-toast-primary nui-toast-rounded-md">
            <div class="nui-toast-icon-block">
              <svg
                class="nui-toast-icon"
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 256 256"
              >
                <g fill="currentColor">
                  <path
                    d="m58.89 154.89l42.22 42.22l-50.63 18.4a7.79 7.79 0 0 1-10-10Zm138.82-4.72l-91.88-91.88A7.79 7.79 0 0 0 93 61.14l-14.9 41l75.82 75.82l41-14.9a7.79 7.79 0 0 0 2.79-12.89Z"
                    opacity=".2"
                  />
                  <path
                    d="M111.49 52.63a15.8 15.8 0 0 0-26 5.77L33 202.78A15.83 15.83 0 0 0 47.76 224a16 16 0 0 0 5.46-1l144.37-52.5a15.8 15.8 0 0 0 5.78-26Zm-8.33 135.21l-35-35l13.16-36.21l58.05 58.05Zm-55 20l14-38.41l24.45 24.45ZM156 168.64L87.36 100l13-35.87l91.43 91.43ZM160 72a37.8 37.8 0 0 1 3.84-15.58C169.14 45.83 179.14 40 192 40c6.7 0 11-2.29 13.65-7.21a22 22 0 0 0 2.35-8.85a8 8 0 0 1 16 .06c0 12.86-8.52 32-32 32c-6.7 0-11 2.29-13.65 7.21a22 22 0 0 0-2.35 8.85a8 8 0 0 1-16-.06Zm-24-32V16a8 8 0 0 1 16 0v24a8 8 0 0 1-16 0Zm101.66 82.34a8 8 0 1 1-11.32 11.31l-16-16a8 8 0 0 1 11.32-11.32Zm4.87-42.75l-24 8a8 8 0 0 1-5.06-15.18l24-8a8 8 0 0 1 5.06 15.18Z"
                  />
                </g>
              </svg>
            </div>

            <div class="nui-toast-inner">
              <div class="">
                <h4 class="nui-toast-title">
                  Primary
                </h4>
                <p class="nui-toast-subtitle">
                  You need to take some action.
                </p>
              </div>
              <button class="nui-button-rounded-full nui-button-default nui-button-close nui-button-sm">
                <svg
                  class="nui-button-icon"
                  aria-hidden="true"
                  viewBox="0 0 24 24"
                >
                  <path
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M18 6 6 18M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
