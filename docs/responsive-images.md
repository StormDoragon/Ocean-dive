# Local responsive images

Local raster covers are prepared before `npm run dev` and `npm run build`. `ContentImage` selects these static files using Next.js responsive image markup. They do not call Vercel's image transformation endpoint. Remote images still use Next.js optimization; this change does not reset already recorded usage.

- Originals, source URLs, rights fields, alt text, and content records remain unchanged.
- 480px and 960px WebP variants are created only when smaller than their original; full-size requests retain the original.
- Variant URLs include a content/settings hash and are cached for one year with immutable headers.
- Local raster sources without generated entries use their original file directly. SVGs retain Next.js SVG handling.
- Generated files in `public/images/resized` are build outputs, not repository assets. The empty manifest is replaced during preparation.

Run `npm run prepare:images && npm run test:images` to validate every generated file's dimensions, existence, byte savings, and original fallback. CI runs both commands.

Baseline measured on the 1,157-discovery catalog: 1,021 local raster sources, 1,433 smaller variants. The 480px-or-original set totals 7,265,328 bytes versus 16,327,666 original bytes (55.5% reduction). This is a file-set comparison, not a measured whole-page speed improvement or a new Vercel usage-counter reading.
