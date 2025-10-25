import "server-only";
import { locales } from "./config";
import { notFound } from "next/navigation";

const dictionaries = {
    en: () => import("./dictionaries/en.json").then((module) => module.default),
    "pt-BR": () => import("./dictionaries/pt-BR.json").then((module) => module.default),
    "zh-CN": () => import("./dictionaries/zh-CN.json").then((module) => module.default)
}

export const getDictionary = async (locale) => {
    if (!locales.includes(locale) || !dictionaries.hasOwnProperty(locale)) {
        notFound();
    }
    
    return dictionaries[locale]();
};
