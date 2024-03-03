// import original module declarations
import "styled-components";

// and extend them!
declare module "styled-components" {
  export interface DefaultTheme {
    borderRadius: string;
    primary: Colors;
    secondary: Colors;
    tertiary: Colors;
    error: Colors;
    neutral: Colors;
  }
}

interface Colors {
  0: string;
  10: string;
  20: string;
  25: string;
  30: string;
  35: string;
  40: string;
  50: string;
  60: string;
  70: string;
  80: string;
  90: string;
  95: string;
  98: string;
  99: string;
  100: string;
}
