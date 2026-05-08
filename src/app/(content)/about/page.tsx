import Link from 'next/link';

const About = () => (
  <div className="content">
    <h1 className="mb-4">Welcome to blahsum.live</h1>

    <p>Every Blahsum show, ever. A live-recordings archive, free to stream.</p>

    <h3>What this is</h3>

    <p>
      A self-hosted catalog of Blahsum live recordings. Pick a year, pick a date,
      hit play. Every show is a single continuous recording today; if a show was
      taped in multiple sets you'll see them as separate entries on the same
      date.
    </p>

    <h3>Built on Relisten</h3>

    <p>
      blahsum.live is a fork of{' '}
      <a href="https://relisten.net" target="_blank" rel="noreferrer">
        Relisten
      </a>
      , the open-source live-music streaming platform created by Daniel Saewitz
      and Alec Gorge. Relisten powers similar archives for the Grateful Dead,
      Phish, Goose, and many other bands. We forked their AGPL-3.0 codebase and
      pointed it at our own catalog. Their work is doing all of the hard parts;
      we just changed the brand and the data.
    </p>

    <h3>Open source</h3>

    <p>
      blahsum.live's code is published at{' '}
      <a href="https://github.com/Zmatarasso/blahsum-relisten" target="_blank" rel="noreferrer">
        github.com/Zmatarasso/blahsum-relisten
      </a>{' '}
      (web frontend),{' '}
      <a
        href="https://github.com/Zmatarasso/blahsum-relisten-api"
        target="_blank"
        rel="noreferrer"
      >
        blahsum-relisten-api
      </a>{' '}
      (backend), and{' '}
      <a
        href="https://github.com/Zmatarasso/blahsum-relisten-deploy"
        target="_blank"
        rel="noreferrer"
      >
        blahsum-relisten-deploy
      </a>{' '}
      (orchestration). The upstream Relisten projects are at{' '}
      <a href="https://github.com/relistennet" target="_blank" rel="noreferrer">
        github.com/relistennet
      </a>
      . AGPL-3.0 throughout.
    </p>

    <h3>Thanks</h3>

    <p>
      To the Relisten team — Daniel Saewitz, Alec Gorge, and contributors — for
      building the platform that made this archive possible.
    </p>
  </div>
);

export const metadata = {
  title: 'About',
};

export default About;
