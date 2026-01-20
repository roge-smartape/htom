import 'react'

declare global {
  namespace JSX {
    interface IntrinsicElements {
      'iconify-icon': React.DetailedHTMLProps<
        React.HTMLAttributes<HTMLElement> & {
          icon?: string
          width?: string | number
          height?: string | number
          className?: string
          style?: React.CSSProperties
        },
        HTMLElement
      >
    }
  }
}

export {}
