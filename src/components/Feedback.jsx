import dynamic from 'next/dynamic'

const DynamicSidetab = dynamic(
  () =>
    new Promise((resolve) => {
      setTimeout(() => {
        resolve(import('@typeform/embed-react').then((mod) => mod.Sidetab))
      }, 5000)
    }),
  { ssr: false }
)

export function Feedback() {
  return (
    <DynamicSidetab
      id="J839Xt3r"
      buttonColor="#338FF2"
      buttonText="Feedback"
      autoClose={3000}
    />
  )
}
