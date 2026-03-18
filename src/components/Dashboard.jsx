function Dashboard({ story, onPromote }) {
  return (
    <section className="space-y-4 rounded-[2rem] bg-white p-5 shadow-soft sm:p-6">
      <div className="flex items-center justify-between gap-4">
        <div>
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">
            Creator Dashboard
          </p>
          <h1 className="mt-2 text-2xl font-semibold text-slate-900">Share-ready promotion kit</h1>
        </div>
        <div className="rounded-full border border-slate-200 px-3 py-1 text-xs font-medium text-slate-500">
          Pocket FM inspired
        </div>
      </div>

      <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50">
        <img src={story.thumbnail} alt={`${story.title} cover`} className="h-64 w-full object-cover" />

        <div className="space-y-4 p-5">
          <div>
            <h2 className="text-2xl font-semibold text-slate-900">{story.title}</h2>
            <p className="mt-1 text-sm text-slate-500">{story.listeners}</p>
          </div>

          <button
            type="button"
            onClick={onPromote}
            className="inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
          >
            Promote 🚀
          </button>
        </div>
      </article>
    </section>
  )
}

export default Dashboard
