import type { State } from './types'


const resolveStoreProps = (state: State, path: string) => {
  const paths = path.split('.')
  let current = state
  let i

  for (i = 0; i < paths.length; ++i) {
    if (current[paths[i]] === undefined) {
      return undefined
    }
    current = current[paths[i]]
  }

  return current
}


export default resolveStoreProps
