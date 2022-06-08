declare global {
  namespace JSX {
    interface IntrinsicElements {
      'ion-icon': React.DetailedHTMLProps<HTMLElement>
    }
  }
}

interface Article {
  title: string
  date: string
  cover?: string
  excerpt: string
  content: string
}

export {}
