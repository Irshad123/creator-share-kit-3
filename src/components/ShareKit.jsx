function ShareKit({ story, episodes, selectedEpisodeId, hook, caption, hashtags, onEpisodeChange, onHookChange, onCaptionChange }) {
  return (
    <section className="space-y-5 rounded-[2rem] bg-white p-5 shadow-soft sm:p-6">
      <div>
        <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">Share Kit</p>
        <h2 className="mt-2 text-xl font-semibold text-slate-900">Generate ready-to-share content</h2>
      </div>

      <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50">
        <img src={story.thumbnail} alt={`${story.title} thumbnail`} className="h-52 w-full object-cover" />

        <div className="space-y-5 p-5">
          <div className="space-y-2">
            <label htmlFor="episode" className="text-sm font-medium text-slate-700">
              Episode
            </label>
            <select
              id="episode"
              value={selectedEpisodeId}
              onChange={(event) => onEpisodeChange(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm text-slate-700 outline-none ring-0 transition focus:border-slate-400"
            >
              {episodes.map((episode) => (
                <option key={episode.id} value={episode.id}>
                  {episode.label}
                </option>
              ))}
            </select>
          </div>

          <div className="space-y-2">
            <label htmlFor="hook" className="text-sm font-medium text-slate-700">
              Hook
            </label>
            <textarea
              id="hook"
              rows="3"
              value={hook}
              onChange={(event) => onHookChange(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-700 outline-none transition focus:border-slate-400"
            />
          </div>

          <div className="space-y-2">
            <label htmlFor="caption" className="text-sm font-medium text-slate-700">
              Caption
            </label>
            <textarea
              id="caption"
              rows="4"
              value={caption}
              onChange={(event) => onCaptionChange(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm leading-6 text-slate-700 outline-none transition focus:border-slate-400"
            />
          </div>

          <div className="rounded-[1.5rem] border border-slate-200 bg-white p-4">
            <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">Hashtags</p>
            <p className="mt-2 text-sm leading-6 text-slate-500">{hashtags}</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ShareKit
