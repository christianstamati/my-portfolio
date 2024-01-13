export const formatPath = (path: string, locale: string): string => {
    const replacePathLocale = (path: string) => {
        const localePlaceholder = "{locale}";
        return path.replace(localePlaceholder, locale);
    };

    return replacePathLocale(path);
};
