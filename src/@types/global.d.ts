declare module '*.jpg'
declare module '*.png'
declare module '*.jpeg'
declare module '*.json'

declare module 'lightense-images' {
  function init(query: string): void
  export = init
}

declare module 'gatsby-plugin-dark-mode' {
  export const theme = string | null
  export const ThemeToggler: any
}
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lottie-player': React.DetailedHTMLProps<HTMLElement>
    }
  }
}
