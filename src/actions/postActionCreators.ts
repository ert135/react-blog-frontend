import * as react from 'react'

export function postExampleAction(text: string) {
    return {
        type: 'POST_EXAMPLE',
        text: text
    }
}

export function requestPosts() {
    return {
        type: 'PREQUEST_POSTS'
    }
}
