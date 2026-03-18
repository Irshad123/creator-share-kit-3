import { useEffect, useMemo, useState } from 'react'
import Dashboard from './components/Dashboard'
import PreviewCard from './components/PreviewCard'
import ShareButtons from './components/ShareButtons'
import ShareKit from './components/ShareKit'
import { commonHashtags, episodeHashtagShare, episodes, story } from './data/episodes'

function App() {
  const [selectedEpisodeId, setSelectedEpisodeId] = useState(episodes[0].id)
  const [hook, setHook] = useState(episodes[0].hook)
  const [caption, setCaption] = useState(episodes[0].caption)
  const [copied, setCopied] = useState(false)

  const selectedEpisode = useMemo(
    () => episodes.find((episode) => episode.id === selectedEpisodeId) ?? episodes[0],
    [selectedEpisodeId],
  )

  useEffect(() => {
    setHook(selectedEpisode.hook)
    setCaption(selectedEpisode.caption)
  }, [selectedEpisode])

  useEffect(() => {
    if (!copied) {
      return undefined
    }

    const timer = window.setTimeout(() => setCopied(false), 1800)
    return () => window.clearTimeout(timer)
  }, [copied])

  const whatsappMessage = `${hook}\n\n${caption}\n\nListen now:\n${selectedEpisode.link}\n\n${episodeHashtagShare}`
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(selectedEpisode.link)}`

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(selectedEpisode.link)
    setCopied(true)
  }

  const handlePromote = () => {
    const shareKitSection = document.getElementById('share-kit-section')
    shareKitSection?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <div className="min-h-screen bg-slate-100 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-6xl flex-col gap-6">
        <Dashboard story={story} onPromote={handlePromote} />

        <div id="share-kit-section" className="grid gap-6 xl:grid-cols-[1.15fr_0.85fr]">
          <div className="space-y-6">
            <ShareKit
              story={story}
              episodes={episodes}
              selectedEpisodeId={selectedEpisodeId}
              hook={hook}
              caption={caption}
              hashtags={commonHashtags}
              onEpisodeChange={setSelectedEpisodeId}
              onHookChange={setHook}
              onCaptionChange={setCaption}
            />
            <ShareButtons
              whatsappUrl={whatsappUrl}
              facebookUrl={facebookUrl}
              onCopy={handleCopyLink}
              copied={copied}
            />
          </div>

          <PreviewCard
            story={story}
            hook={hook}
            caption={caption}
            hashtags={commonHashtags}
            link={selectedEpisode.link}
          />
        </div>

        <footer className="rounded-[2rem] border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-500 shadow-soft sm:p-6">
          {/* WhatsApp preview thumbnails depend on Open Graph metadata of the shared URL.
              Pocket FM links may not always render thumbnails correctly. */}
          <p>
            Built for creators who need a minimal, content-first workflow to promote stories outside the app.
          </p>
          <p className="mt-2 break-all text-xs text-slate-400">Selected episode link: {selectedEpisode.link}</p>
        </footer>
      </div>
    </div>
  )
}

export default App
