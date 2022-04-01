import React from "react"
import {Titulo} from "./src/Home";
import {ThemeProvider} from "styled-components";
import theme from "./src/Global/styles/theme";

import {
    useFonts,
    Montserrat_100Thin
} from "@expo-google-fonts/montserrat";

export default function App() {
    const [fontsLoaded] = useFonts({
        Montserrat_100Thin
    })

    return (
        <ThemeProvider theme={theme}>\
            <Titulo/>
        </ThemeProvider>

    );
}