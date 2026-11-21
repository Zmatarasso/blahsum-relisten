// blahsum-relisten: play scrobbling disabled. Upstream posted every play to
// api.relisten.net (leaks listening data to a third party) and the self-hosted
// API endpoint is a public DB write. The API is not exposed publicly at all.
export function scrobblePlay(_uuid: string): void {}
