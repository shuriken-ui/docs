<template>
  <div class="flex flex-wrap items-end gap-4 p-4">
    <BaseAvatar size="xxs">
      <NuxtImg
        loading="lazy"
        decoding="async"
        src="/img/avatars/16.svg"
        rounded="full"
        alt=""
      />
    </BaseAvatar>
    <BaseAvatar size="xs">
      <NuxtImg
        loading="lazy"
        decoding="async"
        src="/img/avatars/10.svg"
        rounded="full"
        alt=""
      />
    </BaseAvatar>
    <BaseAvatar src="/img/avatars/25.svg" rounded="full" />
    <BaseAvatar
      src="/img/avatars/24.svg"
      rounded="full"
      size="md"
    />
    <BaseAvatar
      src="/img/avatars/3.svg"
      rounded="full"
      size="lg"
    />
    <BaseAvatar
      src="/img/avatars/8.svg"
      rounded="full"
      size="xl"
    />
    <BaseAvatar
      src="/img/avatars/15.svg"
      rounded="full"
      size="2xl"
    />
  </div>
</template>
