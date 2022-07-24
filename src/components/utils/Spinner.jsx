import BounceLoader from 'react-spinners/BounceLoader'
const Spinner = (isPending) => (
  <BounceLoader
    color={'green'}
    loading={isPending}
    size={100}
  />
)

export default Spinner
