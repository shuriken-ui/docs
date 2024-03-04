<template>
  <div class="flex items-center justify-center px-4 pb-0 pt-4">
    <div class="relative w-full overflow-hidden rounded-xl bg-muted-100 p-4 dark:bg-muted-900" style="min-height: 540px;">
      <dialog
        open
        class="nui-modal-md open:nui-modal"
        style="position: absolute !important; height: 100%; width: 100%; top: 0; left: 0; z-index: 9999;"
      >
        <div class="nui-modal-inner relative start-0 top-0 h-full w-full">
          <div class="nui-modal-backdrop" style="position: absolute !important" />
          <div class="nui-modal-content" style="position: absolute !important">
            <div class="nui-modal-content-inner">
              <div class="nui-modal-content-panel">
                <div class="nui-card nui-card-default nui-card-rounded-sm" shape="smooth">
                  <div class="flex items-center justify-between p-4 md:p-6">
                    <h3 class="nui-heading nui-heading-lg nui-weight-medium nui-lead-normal text-muted-900 dark:text-white">
                      Invitation
                    </h3>

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
                  <div class="p-4 md:px-6 md:py-8">
                    <div class="mx-auto w-full max-w-xs text-center">
                      <div class="nui-avatar nui-avatar-rounded-full nui-avatar-2xl mb-2">
                        <div class="nui-avatar-inner">
                          <img
                            class=""
                            src="https://media.cssninja.io/shuriken/avatars/24.svg"
                            alt="?"
                          >
                        </div>
                      </div>

                      <h3 class="nui-heading nui-heading-lg nui-weight-medium nui-lead-normal text-muted-900 dark:text-white">
                        New Invite
                      </h3>

                      <p class="nui-weight-normal nui-lead-normal nui-paragraph nui-paragraph-sm text-muted-500 dark:text-muted-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et.
                      </p>
                    </div>
                  </div>
                  <div class="p-4 md:p-6">
                    <div class="flex w-full justify-end gap-x-2">
                      <button class="nui-button-rounded-md nui-button-default nui-button nui-button-medium nui-button-solid" flavor="solid">
                        Cancel
                      </button>

                      <button class="nui-button-rounded-md nui-button-primary nui-button nui-button-medium nui-button-solid" flavor="solid">
                        Confirm
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </dialog>
    </div>
  </div>
</template>
