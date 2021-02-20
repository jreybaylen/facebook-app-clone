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
                actions={ [
                    { label: 'Like', handler: () => { } }
                ] }
            />
            <Card
                name={ name }
                thumbnail={ [
                    <ImagePlaceholder key="user-1" />
                ] }
                actions={ [
                    { label: 'Like', handler: () => { } },
                    { label: 'Comment', handler: () => { } }
                ] }
            />
            <Card
                name={ name }
                caption={ caption }
                actions={ [
                    { label: 'Like', handler: () => { } },
                    { label: 'Comment', handler: () => { } },
                    { label: 'Share', handler: () => { } }
                ] }
            />
        </React.Fragment>
    )

    return newsFeedElement
}

export { NewsFeed }
