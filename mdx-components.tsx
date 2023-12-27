import type { MDXComponents } from 'mdx/types'
import MDXProviderComponents from '@/features/page-contents/mdx-components'

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...MDXProviderComponents,
    ...components,
  }
}
