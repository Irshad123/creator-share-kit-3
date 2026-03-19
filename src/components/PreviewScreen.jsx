import PreviewCard from './PreviewCard'
import ShareButtons from './ShareButtons'

function PreviewScreen({
  story,
  hook,
  caption,
  hashtags,
  link,
  whatsappUrl,
  facebookUrl,
  copied,
  onCopy,
  onBack,
}) {
  return (
    <section className="rounded-[2rem] bg-white p-5 shadow-soft sm:p-6">
      <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-start">
        <div className="space-y-4">
          <div>
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-slate-400">Screen 3</p>
            <h2 className="mt-2 text-2xl font-semibold text-slate-950">Preview + Share</h2>
            <p className="mt-2 text-sm leading-6 text-slate-600">
              Review the final mobile card, then launch platform-specific shares with properly encoded URLs.
            </p>
          </div>

          <PreviewCard story={story} hook={hook} caption={caption} hashtags={hashtags} link={link} />
        </div>

        <div className="space-y-5">
          <div className="rounded-[1.5rem] border border-slate-200 bg-slate-50 p-4 text-sm leading-7 text-slate-600">
            <p className="font-medium text-slate-900">Share actions</p>
            <p className="mt-2">WhatsApp shares the hook, caption, CTA, episode link, and short hashtag set.</p>
            <p>Facebook shares only the selected episode URL.</p>
            <p>Copy Link copies only the selected episode link and shows a confirmation state.</p>
          </div>

          <ShareButtons
            whatsappUrl={whatsappUrl}
            facebookUrl={facebookUrl}
            onCopy={onCopy}
            copied={copied}
          />

          <button
            type="button"
            onClick={onBack}
            className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-700 transition hover:bg-slate-50"
          >
            Back
          </button>
        </div>
      </div>
    </section>
  )
}

export default PreviewScreen
