import React from "react"
import PropTypes from "prop-types"
import { Helmet } from "react-helmet"

const SEO = ({ description, lang, meta, title }) => {


    return (
        <Helmet
            htmlAttributes={{ lang }}
            title={title}

            meta={[
                {
                    name: `description`,
                    content: description,
                },
                {
                    property: `og:title`,
                    content: title,
                },
                {
                    property: `og:description`,
                    content: description,
                },
                {
                    property: `og:type`,
                    content: `website`,
                },


            ]
                .concat(meta)}
        >


        </Helmet>
    )
}

SEO.defaultProps = {
    lang: `en`,
    meta: [],
    description: ``,
}

SEO.propTypes = {
    description: PropTypes.string,
    lang: PropTypes.string,
    meta: PropTypes.arrayOf(PropTypes.object),
    title: PropTypes.string.isRequired,
}

export default SEO;
