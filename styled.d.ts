// import original module declarations
import 'styled-components'

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    borderRadius: string
    colors: {
      main: string
      secondary: string
    }
    createGlobalStyle(
      strings: TemplateStringsArray,
      ...interpolations: SimpleInterpolation[]
    ): React.ComponentClass;
  }
}