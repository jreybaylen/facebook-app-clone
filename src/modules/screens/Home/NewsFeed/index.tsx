import React from 'react'

import { Card } from '@components/Card'
import { ImagePlaceholder } from '@components/ImagePlaceholder'

function NewsFeed () {
    const name = "Software Engineer Corner"
    const caption = `
        #HashTag

        Content goes here
        Explore more !
        Content goes here
        Explore more !
    `
    const newsFeedElement = (
        <React.Fragment>
            <Card
                name={ name }
                caption={ caption }
            />
            <Card
                name={ name }
                caption={ caption }
                thumbnail={ [ <ImagePlaceholder key="user-1" /> ] }
            />
        </React.Fragment>
    )

    return newsFeedElement
}

export { NewsFeed }
