import { locales, defaultLocale } from "./config";
import { match } from "@formatjs/intl-localematcher";
import Negotiator from "negotiator";
import { NextResponse } from "next/server";

/*
    Tries to find the user/browser's preferred language from 'locales'.
    If none exist, falls back to 'defaultLocale'.
*/
function getLocale(request) {
    const negotiatorHeaders = {}
    
    request.headers.forEach((value, key) => (negotiatorHeaders[key] = value));
    
    const languages = new Negotiator({ headers: negotiatorHeaders }).languages();
    
    return match(languages, locales, defaultLocale);
}

export function proxy(request) {
    const { pathname } = request.nextUrl;
    
    const pathnameHasLocale = locales.some(
        (locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`
    )
    
    // Do nothing here for invalid locales; 'dictionaries.js' will handle 404.
    if (locales.some((locale) => locale !== request && pathname !== "/")) {
        return;
    }
    
    if (!pathnameHasLocale) {
        const locale = getLocale(request);
        
        request.nextUrl.pathname = `/${locale}${pathname}`;
        
        return NextResponse.redirect(request.nextUrl);
    }
};

export const config = {
  matcher: [
    // Skip all internal paths (_next)
    // '/((?!_next).*)',
    '/((?!api|_next|.*\\..*).*)'
    // Optional: only run on root (/) URL
    // '/'
  ],
};
