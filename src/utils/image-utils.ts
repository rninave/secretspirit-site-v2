
const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH || '';

/**
 * Resolves an image path by prepending the base path if not already present.
 * @param src The image source path (e.g., "/logo.png")
 * @returns The resolved path (e.g., "/base-path/logo.png")
 */
export function getImageUrl(src: string): string {
    if (src.startsWith('http') || src.startsWith('data:')) {
        return src;
    }

    // Ensure src starts with / if not empty
    const normalizedSrc = src.startsWith('/') ? src : `/${src}`;

    if (BASE_PATH && !normalizedSrc.startsWith(BASE_PATH)) {
        // Remove trailing slash from base path if exists to avoid double slashes
        const cleanBasePath = BASE_PATH.replace(/\/$/, '');
        return `${cleanBasePath}${normalizedSrc}`;
    }

    return normalizedSrc;
}
