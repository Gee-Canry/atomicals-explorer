import { useState } from 'react'
import { Button, Dialog } from 'evergreen-ui'

function Wallet() {
  const [isShown, setIsShown] = useState(false)

  return (
    <>
      <Dialog
        isShown={isShown}
        title="Coming soon..."
        onCloseComplete={() => setIsShown(false)}
        hasCancel={false}
        confirmLabel="Okay"
      >
        Connect wallet is under construction, be patience.
      </Dialog>
      <Button
        intent="success"
        onClick={() => setIsShown(true)}
      >
        Connect Wallet
      </Button>
    </>
  )
}

export default Wallet
