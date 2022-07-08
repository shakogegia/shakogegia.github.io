declare module '*.jpg';
declare module '*.png';
declare module '*.jpeg';
declare module '*.json';
declare global {
  namespace JSX {
    interface IntrinsicElements {
      'lottie-player': React.DetailedHTMLProps<HTMLElement>
    }
  }
}

