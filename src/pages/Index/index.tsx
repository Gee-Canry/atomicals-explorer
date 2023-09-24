import { useState } from 'react'
import { Pane } from 'evergreen-ui'

function Index() {
  const [] = useState(false)

  return (
    <>
      <Pane clearfix>
        <Pane border width={120} height={80} marginRight={16} float="left" />
        <Pane border="default" width={120} height={80} marginRight={16} float="left" />
        <Pane border="muted" width={120} height={80} marginRight={16} float="left" />
      </Pane>
    </>
  )
}

export default Index
