function EditScreen({
  story,
  episodes,
  selectedEpisode,
  selectedEpisodeId,
  hook,
  caption,
  hashtags,
  onEpisodeChange,
  onHookChange,
  onCaptionChange,
  onBack,
  onNext,
}) {
  return (
    <section className="rounded-[2rem] bg-white p-5 shadow-soft sm:p-6">
      <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="overflow-hidden rounded-[2rem] border border-slate-200 bg-slate-50">
          <img src={story.thumbnail} alt={`${story.title} thumbnail`} className="h-72 w-full object-cover" />

          <div className="space-y-4 p-5">
            <div>
              <p className="text-xs font-medium uppercase tracking-[0.3em] text-slate-400">Screen 2</p>
              <h2 className="mt-2 text-2xl font-semibold text-slate-950">Edit share content</h2>
              <p className="mt-2 text-sm leading-6 text-slate-600">
                Switch episodes to auto-fill the hook, caption, and share link, then fine-tune the copy.
              </p>
            </div>

            <div className="rounded-[1.5rem] bg-white p-4">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">Thumbnail preview</p>
              <p className="mt-2 text-sm text-slate-500">Story artwork appears across all three screens.</p>
            </div>
          </div>
        </div>

        <div className="space-y-5">
          <div className="space-y-2">
            <label htmlFor="episode" className="text-sm font-medium text-slate-700">
              Episode selector
            </label>
            <select
              id="episode"
              value={selectedEpisodeId}
              onChange={(event) => onEpisodeChange(event.target.value)}
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-slate-400"
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
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700 outline-none transition focus:border-slate-400"
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
              className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-4 py-3 text-sm leading-6 text-slate-700 outline-none transition focus:border-slate-400"
            />
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">Episode link</p>
              <p className="mt-2 break-all text-sm leading-6 text-slate-600">{selectedEpisode.link}</p>
            </div>
            <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4">
              <p className="text-xs font-medium uppercase tracking-[0.2em] text-slate-400">Common hashtags</p>
              <p className="mt-2 text-sm leading-6 text-slate-600">{hashtags}</p>
            </div>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row sm:justify-between">
            <button
              type="button"
              onClick={onBack}
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
            >
              Back
            </button>
            <button
              type="button"
              onClick={onNext}
              className="inline-flex items-center justify-center rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-800"
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

export default EditScreen
