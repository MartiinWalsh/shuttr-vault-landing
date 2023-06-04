import { Helmet } from 'react-helmet'

export function CallToAction() {
  return (
    <div id="register-interest">
      <Helmet>
        <script src="//embed.typeform.com/next/embed.js"></script>
      </Helmet>
      <div
        data-tf-widget="IRyRjys9"
        data-tf-opacity="100"
        data-tf-iframe-props="title=Register Your Interest Today!"
        data-tf-transitive-search-params
        data-tf-medium="snippet"
        style={{ width: '100%', height: '600px' }}
      />
    </div>
  )
}
