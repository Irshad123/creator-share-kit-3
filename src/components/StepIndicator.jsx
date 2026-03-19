const steps = [
  { id: 1, label: 'Dashboard' },
  { id: 2, label: 'Edit' },
  { id: 3, label: 'Preview' },
]

function StepIndicator({ currentStep }) {
  return (
    <div className="flex flex-col gap-3 rounded-[1.5rem] bg-slate-50 p-4 sm:flex-row sm:items-center sm:justify-between">
      {steps.map((step, index) => {
        const isActive = step.id === currentStep
        const isComplete = step.id < currentStep

        return (
          <div key={step.id} className="flex items-center gap-3">
            <div
              className={`flex h-10 w-10 items-center justify-center rounded-full border text-sm font-semibold ${
                isActive
                  ? 'border-slate-950 bg-slate-950 text-white'
                  : isComplete
                    ? 'border-slate-300 bg-slate-200 text-slate-700'
                    : 'border-slate-200 bg-white text-slate-400'
              }`}
            >
              {step.id}
            </div>
            <div>
              <p className="text-sm font-semibold text-slate-900">{step.label}</p>
              <p className="text-xs text-slate-400">Step {step.id}</p>
            </div>
            {index < steps.length - 1 ? <div className="ml-2 hidden h-px w-12 bg-slate-200 sm:block" /> : null}
          </div>
        )
      })}
    </div>
  )
}

export default StepIndicator
