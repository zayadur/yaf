import Tags from './Tags'
import Feed from './Feed'
import Meta from './Meta'

function Main() {
  return (
    <main className="grid min-h-screen grid-cols-9">
      <Tags />
      <Feed />
      <Meta />
    </main>
  )
}

export default Main