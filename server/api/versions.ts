import { joinURL } from 'ufo'

const repos = [
  {
    name: 'nuxt',
    icon: 'logos:nuxt-icon',
  },
  {
    name: 'react',
    icon: 'logos:react',
  },
  {
    name: 'tailwind',
    icon: 'logos:tailwindcss-icon',
  },
]

export default defineCachedEventHandler(async (event) => {
  assertMethod(event, 'GET')

  const appConfig = useAppConfig()

  return await Promise.all(repos.map(async (repo) => {
    const packageName = `@${appConfig.github.org}/${repo.name}`
    const meta = await $fetch(joinURL('https://registry.npmjs.org', packageName), {
      headers: {
        Accept: 'application/vnd.npm.install-v1+json',
      },
    }).catch(() => ({})) as Record<string, any>

    return {
      packageName,
      version: meta?.['dist-tags']?.latest as string || 'Coming soon',
      repo: joinURL('https://github.com', appConfig.github.org, repo.name),
      ...repo,
    }
  }))
}, {
  // 1 hour
  maxAge: 60 * 60,
})
