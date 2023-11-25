import * as Font from "expo-font"

import {
    Sora_100Thin,
    Sora_200ExtraLight,
    Sora_300Light,
    Sora_400Regular,
    Sora_500Medium,
    Sora_600SemiBold,
    Sora_700Bold,
    Sora_800ExtraBold
} from '@expo-google-fonts/sora'

const useFonts = async () => {
    await Font.loadAsync({
        Sora_100Thin,
        Sora_200ExtraLight,
        Sora_300Light,
        Sora_400Regular,
        Sora_500Medium,
        Sora_600SemiBold,
        Sora_700Bold,
        Sora_800ExtraBold
    })
}

export default useFonts;