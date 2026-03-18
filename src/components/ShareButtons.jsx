function WhatsAppIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.5 0 .15 5.35.15 11.93c0 2.1.55 4.15 1.6 5.95L0 24l6.32-1.65a11.9 11.9 0 0 0 5.75 1.47h.01c6.57 0 11.92-5.35 11.92-11.93 0-3.18-1.24-6.17-3.48-8.41Zm-8.45 18.32h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.75.98 1-3.66-.24-.38a9.88 9.88 0 0 1-1.52-5.22c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.15 1.03 7.02 2.9a9.85 9.85 0 0 1 2.9 7.02c0 5.47-4.45 9.92-9.93 9.92Zm5.44-7.42c-.3-.15-1.77-.87-2.05-.96-.27-.1-.47-.15-.67.15-.2.3-.77.96-.94 1.16-.17.2-.35.22-.65.08-.3-.15-1.26-.46-2.4-1.47a8.92 8.92 0 0 1-1.66-2.07c-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.18.2-.3.3-.5.1-.2.05-.37-.02-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.49-.5-.67-.5h-.57c-.2 0-.52.08-.8.37-.27.3-1.05 1.03-1.05 2.52 0 1.5 1.08 2.94 1.23 3.14.15.2 2.12 3.23 5.13 4.53.72.31 1.28.5 1.72.64.72.23 1.37.2 1.89.12.58-.09 1.77-.72 2.02-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
    </svg>
  )
}

function FacebookIcon() {
  return (
    <svg viewBox="0 0 24 24" aria-hidden="true" className="h-5 w-5 fill-current">
      <path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07c0 6.02 4.39 11 10.13 11.93v-8.44H7.08v-3.5h3.05V9.4c0-3.03 1.79-4.7 4.54-4.7 1.32 0 2.7.24 2.7.24v2.97h-1.52c-1.49 0-1.96.93-1.96 1.88v2.26h3.33l-.53 3.5h-2.8V24C19.6 23.07 24 18.1 24 12.07Z" />
    </svg>
  )
}

function ShareButtons({ whatsappUrl, facebookUrl, onCopy, copied }) {
  return (
    <section className="space-y-4 rounded-[2rem] bg-white p-5 shadow-soft sm:p-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">Share Actions</p>
        <h2 className="mt-2 text-xl font-semibold text-slate-900">One-click sharing</h2>
      </div>

      <div className="grid gap-3 sm:grid-cols-3">
        <a
          href={whatsappUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-emerald-500 px-4 py-3 text-sm font-semibold text-white transition hover:bg-emerald-600"
        >
          <WhatsAppIcon />
          WhatsApp
        </a>

        <a
          href={facebookUrl}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center justify-center gap-2 rounded-full bg-blue-600 px-4 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
        >
          <FacebookIcon />
          Facebook
        </a>

        <button
          type="button"
          onClick={onCopy}
          className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-slate-50 px-4 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-100"
        >
          Copy Link
        </button>
      </div>

      <div className="h-6">
        {copied ? (
          <div className="inline-flex rounded-full bg-slate-900 px-3 py-1 text-xs font-medium text-white">
            Copied!
          </div>
        ) : null}
      </div>
    </section>
  )
}

export default ShareButtons
