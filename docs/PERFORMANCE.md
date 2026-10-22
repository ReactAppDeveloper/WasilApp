# Performance audit — why screens were slow, and what changed

## Root causes (in order of impact)

| # | Cause | Effect | Status |
|---|-------|--------|--------|
| 1 | `src/assets/icons/index.js` was **24.7 MB** of JavaScript. 50 "SVG icons" were really PNG photos stored as base64 strings inside `<Svg><Image>`; 48 icons were never used. | Huge JS bundle (very slow in debug, larger APK/IPA), and every render of one of those icons made react-native-svg decode a 0.2–3.8 MB base64 string on the JS thread. Imported by 276 files. | **Fixed** — unused icons removed; the 31 embedded photos extracted to `assets/icons/raster/` at ≤3× display size (JPEG when opaque). File is now **1.4 MB**; images total 1.5 MB and are decoded natively and cached. |
| 2 | All 51 Prayer rakat screens (Material Top Tabs) rendered **every tab at once**; each rakat tab is ~300 views. | 1–3 s freeze when opening any prayer guide. | **Fixed** — `lazy: true`: only the visible tab is built. |
| 3 | Quran reading page (2,600 lines) re-rendered **every animation frame** during auto-scroll (`setCurrentOffset` in `requestAnimationFrame` + `onScroll`) and **every second** while audio played (`useProgress` at page level). | Janky scrolling, laggy taps, battery drain. | **Fixed** — offset kept in a ref; progress moved into `ProgressBottomView`; track sync now runs on track change (`useActiveTrack`). Same fix in `SurahFullView`. |
| 4 | No caching of API responses — every visit re-downloaded the same lists (hadith books, duas, stories, videos, calendar, prayer times, address). | Spinner on every visit; nothing works offline. | **Fixed** — `src/services/http.js` `cachedGet` (memory + MMKV, TTL per endpoint, de-duplicated requests, stale copy on network failure). Applied to Home, Prayer Times, Hadith, Duas, Stories, Videos, Greetings, Calendar. |
| 5 | 64 Cloudinary images downloaded at full original resolution. | Slow image loading, high memory, OOM risk on low-end Android. | **Fixed** — URLs now request `c_limit,q_auto,w_1200` (resized/compressed by the CDN, never upscaled). |
| 6 | Tafsir screen rendered the whole surah's commentary in one `ScrollView` (286 long cards for Al-Baqarah). | Multi-second freeze opening Tafsir. | **Fixed** — virtualised `FlatList`. |
| 7 | Player screens (Reciters, Story player) re-rendered the whole screen 2×/s for the progress bar. | Lag while audio plays. | **Fixed** — shared `components/PlaybackProgress` owns the subscription. |
| 8 | 240 `console.log` calls, some printing whole API responses. | JS-thread time in release builds. | **Fixed** — `console.log/info/debug` are no-ops when `!__DEV__` (`index.js`). |

## Follow-up (done)

- Quran and Prayer merged into single theme-aware modules (Green/White copies removed: ~235k lines, plus duplicated images).
- Prayer guide: 48 rakat screens (~2.85 MB of JSX per theme) are now data (`PrayerGuide/rakatData.js`, 20 shared steps) rendered by `RakatSteps`.
- `TranslatorDetail`: progress bar uses the shared `PlaybackProgress`, so the 2,500-line screen no longer re-renders 4×/s; player state is saved on track/play changes and every 10 s instead of serialising the whole queue to storage 4×/s.
- ESLint (`@react-native` config) reports **0 errors** across `src/` (it found 64 undefined variables, 7 undefined components and 42 duplicate keys, all fixed).
- 50 unreferenced image files (35 MB) removed from the repo.

## Still open

- Images returned by the APIs (story covers, greeting cards) should be served resized by the backend.
- `index.js` overrides `Text.render`/`TextInput.render` to disable font scaling; prefer `allowFontScaling={false}` only where layouts break (also better for accessibility).
- API keys (LocationIQ, hadithapi.com) are in client code; restrict them by app/bundle id or proxy them.

## How to measure

Always judge speed on a **release** build — debug builds run unoptimised JS and are 3–10× slower:

```
npx react-native run-android --mode release
```

Use the React Native DevTools Profiler (or Flipper/Perfetto on Android) to check render counts on the screens above.
