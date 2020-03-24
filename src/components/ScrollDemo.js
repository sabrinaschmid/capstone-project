import React from 'react'

const scrollToRef = ref => window.scrollTo(0, ref.current.offsetTop)

export default function ScrollDemo() {
  const myRef = useRef(null)
  const executeScroll = () => scrollToRef(myRef)

  return (
    <>
      <div ref={myRef}>I wanna be seen</div>
      <button onClick={executeScroll}> Click to scroll </button>
    </>
  )
}
