export async function register() {
  // blahsum-relisten: only enable telemetry when an exporter is explicitly
  // configured (upstream defaulted to sending traces to a third-party collector).
  if (process.env.NEXT_RUNTIME === 'nodejs' && process.env.OTEL_EXPORTER_OTLP_ENDPOINT) {
    const { initTracing } = await import('./lib/tracing');
    initTracing();
  }
}
