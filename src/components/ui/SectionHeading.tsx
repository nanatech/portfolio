interface SectionHeadingProps {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
  maxWidth?: string
}

function renderMultilineText(text: string) {
  const lines = text.replace(/\\n/g, '\n').split('\n')

  return lines.map((line, index) => (
    <span key={index}>
      {line}
      {index < lines.length - 1 && <br />}
    </span>
  ))
}

export function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  maxWidth = 'max-w-2xl',
}: SectionHeadingProps) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''

  return (
    <div className={`mb-12 ${maxWidth} ${alignClass}`}>
      {eyebrow && (
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
          {eyebrow}
        </p>
      )}
      <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
        {renderMultilineText(title)}
      </h2>
      {description && (
        <p className="mt-4 text-lg text-zinc-400">
          {renderMultilineText(description)}
        </p>
      )}
    </div>
  )
}
