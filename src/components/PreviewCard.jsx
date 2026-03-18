function PreviewCard({ story, hook, caption, hashtags, link }) {
  return (
    <section className="space-y-4 rounded-[2rem] bg-white p-5 shadow-soft sm:p-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">Preview</p>
        <h2 className="mt-2 text-xl font-semibold text-slate-900">Mobile share card</h2>
      </div>

      <div className="mx-auto w-full max-w-sm overflow-hidden rounded-[2rem] border border-slate-200 bg-white shadow-lg">
        <img src={story.thumbnail} alt={`${story.title} preview`} className="h-56 w-full object-cover" />

        <div className="space-y-4 p-5">
          <div className="inline-flex rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-500">
            WhatsApp / Facebook style preview
          </div>
          <div className="space-y-3">
            <p className="text-xl font-bold leading-tight text-slate-950">{hook}</p>
            <p className="text-sm leading-6 text-slate-600">{caption}</p>
            <p className="text-xs leading-5 text-slate-400">{hashtags}</p>
          </div>

          <a
            href={link}
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-4 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Listen Now
          </a>
        </div>
      </div>
    </section>
  )
}

export default PreviewCard
