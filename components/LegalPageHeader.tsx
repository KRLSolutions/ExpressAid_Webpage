import { LEGAL_EFFECTIVE_DATE, LEGAL_LAST_UPDATED } from '@/lib/site'

type LegalPageHeaderProps = {
  title: string
}

export default function LegalPageHeader({ title }: LegalPageHeaderProps) {
  return (
    <div className="mb-12 text-center">
      <h1 className="mb-4 text-4xl font-black text-slate-900">{title}</h1>
      <p className="text-slate-600">
        <strong>Effective Date:</strong> {LEGAL_EFFECTIVE_DATE}
      </p>
      <p className="text-slate-600">
        <strong>Last Updated:</strong> {LEGAL_LAST_UPDATED}
      </p>
    </div>
  )
}
