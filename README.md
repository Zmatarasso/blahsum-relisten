# blahsum.live: frontend (Next.js)

> This is the **frontend** for [blahsum.live](https://truenas-scale.tail5a1866.ts.net:10000/),
> a fork of upstream Relisten ([RelistenNet/relisten-web](https://github.com/RelistenNet/relisten-web)).
> **`main` is the live branch.** `master` tracks upstream. Never push to RelistenNet.
>
> How the three repos fit together, how to deploy, and the security rules are in
> the hub repo: **[Zmatarasso/blahsum-relisten-deploy](https://github.com/Zmatarasso/blahsum-relisten-deploy)**
> (start with its README.md and docs/EDITING.md). In a deploy checkout this repo
> lives in the `relisten-web/` folder.

> Layout and colors: `src/styles/globals.css` (Tailwind v4 `@theme`), `src/app/layout.tsx`,
> `src/components/`. Run locally with `pnpm install && pnpm start` and open a PR to `main`.

---

*Upstream README follows.*

# Relisten (web)

[![Build Status](https://github.com/RelistenNet/relisten-web/actions/workflows/node.js.yml/badge.svg)](https://github.com/RelistenNet/relisten-web/actions/workflows/node.js.yml)

Relisten is a simple free music streaming platform for recorded live concerts.

Visit https://relisten.net to find out more.

## iOS
Our mobile app is on the App Store/Play Store and also open source @ https://github.com/RelistenNet/relisten-mobile

## Sonos
Our Sonos app is on the Sonos store and also open source @ https://github.com/RelistenNet/relisten-sonos

## Development

### To run
```
  #### install node
  #### install pnpm (npm i -g pnpm)
  $ pnpm i
  $ npm start
```

## License
AGPL3
