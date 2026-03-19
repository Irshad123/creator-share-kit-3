function Dashboard({ story, onPromote }) {
  return (
    <section className="rounded-[2rem] bg-white p-5 shadow-soft sm:p-6">
      <div className="grid gap-6 md:grid-cols-[1.05fr_0.95fr] md:items-center">
        <article className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50">
          <img src={story.thumbnail} alt={`${story.title} cover`} className="h-72 w-full object-cover" />

          <div className="space-y-4 p-5">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">
                Screen 1
              </p>
              <h2 className="mt-2 text-3xl font-semibold text-slate-950">{story.title}</h2>
              <p className="mt-2 text-base text-slate-500">{story.listeners}</p>
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

        <div className="space-y-4 rounded-[2rem] border border-slate-200 bg-slate-50 p-5">
          <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">Creator Dashboard</p>
          <h3 className="text-2xl font-semibold text-slate-950">Start a share flow in one click</h3>
          <p className="text-sm leading-7 text-slate-600">
            Jump straight from your story card into a structured promotion flow designed for quick external sharing.
          </p>
          <ul className="space-y-3 text-sm text-slate-600">
            <li className="rounded-2xl bg-white px-4 py-3">Choose the episode you want to spotlight.</li>
            <li className="rounded-2xl bg-white px-4 py-3">Edit the hook and caption before posting.</li>
            <li className="rounded-2xl bg-white px-4 py-3">Preview and share via WhatsApp, Facebook, or copy the link.</li>
          </ul>
        </div>
      </div>
    </section>
  )
}

export default Dashboard
