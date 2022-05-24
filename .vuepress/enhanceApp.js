export default ({router}) => {
    if (process.env.NODE_ENV !== 'production' || typeof window === 'undefined') {
        return
    }

    // Google analytics...
    ((window, document, tagType, gaId, undefined) => {
        const existingTag = document.getElementsByTagName(tagType)[0]
        const tag = document.createElement(tagType)
        tag.async = 1
        tag.src = `https://www.googletagmanager.com/gtag/js?id=${gaId}`
        existingTag.parentNode.insertBefore(tag, existingTag)

        window.dataLayer = window.dataLayer || []
        window.gtag = () => window.dataLayer.push(arguments)
        window.gtag('js', new Date());
        window.gtag('config', gaId, {
            'anonymize_ip': true
        });

        router.afterEach((to) => {
            window.gtag('set', 'page_path', router.app.$withBase(to.fullPath))
            window.gtag('event', 'page_view');
        })
    })(window, document, 'script', 'UA-23865777-2')
}
