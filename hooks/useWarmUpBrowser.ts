import { useEffect } from "react";
import * as WebBrowser from 'expo-web-browser';

export const useWarmUpBrowser = () => {
    useEffect(() => {
        const warmUpBrowser = async () => {
            await WebBrowser.warmUpAsync();
        };

        const coolDownBrowser = async () => {
            await WebBrowser.coolDownAsync();
        };

        warmUpBrowser();

        return () => {
            coolDownBrowser();
        };
    }, []);
};
