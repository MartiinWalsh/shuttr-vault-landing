import dynamic from 'next/dynamic'

const DynamicSidetab = dynamic(
  () => import('@typeform/embed-react').then((mod) => mod.Sidetab),
  { ssr: false }
)

export function Feedback() {
  return (
    <DynamicSidetab id="J839Xt3r" buttonColor="#338FF2" buttonText="Feedback" />
  )
}
