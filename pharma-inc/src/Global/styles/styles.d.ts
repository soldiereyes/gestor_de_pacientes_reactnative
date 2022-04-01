// Onde vamos colocar a tipagem necessária para que o styled entenda o nosso novo tema.

import 'styled-components';
import theme from "./theme";

declare module 'styled-components'{
    type ThemeType = typeof  theme

    export interface DefaultTheme extends ThemeType{

    }
}