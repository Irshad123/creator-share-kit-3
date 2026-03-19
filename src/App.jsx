import { useEffect, useMemo, useState } from 'react'
import Dashboard from './components/Dashboard'
import EditScreen from './components/EditScreen'
import PreviewScreen from './components/PreviewScreen'
import StepIndicator from './components/StepIndicator'
import { commonHashtags, episodeHashtagShare, episodes, story } from './data/episodes'

function App() {
  const [step, setStep] = useState(1)
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

    const timeoutId = window.setTimeout(() => setCopied(false), 1800)
    return () => window.clearTimeout(timeoutId)
  }, [copied])

  const whatsappMessage = `${hook}\n\n${caption}\n\nListen now:\n${selectedEpisode.link}\n\n${episodeHashtagShare}`
  const whatsappUrl = `https://wa.me/?text=${encodeURIComponent(whatsappMessage)}`
  const facebookUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(selectedEpisode.link)}`

  const handleCopyLink = async () => {
    await navigator.clipboard.writeText(selectedEpisode.link)
    setCopied(true)
  }

  return (
    <div className="min-h-screen bg-stone-100 px-4 py-8 text-slate-900 sm:px-6 lg:px-8">
      <div className="mx-auto flex w-full max-w-5xl flex-col gap-6">
        <header className="space-y-3 rounded-[2rem] bg-white p-6 shadow-soft">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-sm font-medium uppercase tracking-[0.35em] text-slate-400">
                Creator Share Kit
              </p>
              <h1 className="mt-2 text-3xl font-semibold tracking-tight text-slate-950">
                Pocket FM-inspired external sharing flow
              </h1>
            </div>
            <div className="rounded-full border border-slate-200 px-4 py-2 text-sm text-slate-500">
              Minimal 3-step workflow
            </div>
          </div>

          <StepIndicator currentStep={step} />
        </header>

        {step === 1 ? <Dashboard story={story} onPromote={() => setStep(2)} /> : null}

        {step === 2 ? (
          <EditScreen
            story={story}
            episodes={episodes}
            selectedEpisode={selectedEpisode}
            selectedEpisodeId={selectedEpisodeId}
            hook={hook}
            caption={caption}
            hashtags={commonHashtags}
            onEpisodeChange={setSelectedEpisodeId}
            onHookChange={setHook}
            onCaptionChange={setCaption}
            onBack={() => setStep(1)}
            onNext={() => setStep(3)}
          />
        ) : null}

        {step === 3 ? (
          <PreviewScreen
            story={story}
            hook={hook}
            caption={caption}
            hashtags={commonHashtags}
            link={selectedEpisode.link}
            whatsappUrl={whatsappUrl}
            facebookUrl={facebookUrl}
            copied={copied}
            onCopy={handleCopyLink}
            onBack={() => setStep(2)}
          />
        ) : null}

        <footer className="rounded-[2rem] border border-slate-200 bg-white p-5 text-sm leading-6 text-slate-500 shadow-soft sm:p-6">
          {/* WhatsApp preview thumbnails depend on Open Graph metadata of the shared URL.
              Pocket FM links may not always render thumbnails correctly. */}
          <p>
            Built for creators to select an episode, edit share copy, preview the post, and publish in a few taps.
          </p>
        </footer>
      </div>
    </div>
  )
}

export default App
