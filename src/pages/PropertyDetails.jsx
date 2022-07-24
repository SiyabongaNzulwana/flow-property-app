
import { useParams } from 'react-router-dom'
import useFetch from './../components/utils/useFetch'
import PropertyMetaData from './../components/PropertyMetaData'
import Spinner from '../components/utils/Spinner'

const PropertyDetails = () => {
  const { propertyId } = useParams()

  const {
    data: property,
    isPending,
    error
  } = useFetch(`https://api-staging.flowliving.com/v3/guest/properties/${propertyId}`)

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        backgroundColor: 'rgba(130,179,204,0.5)',
        alignItems: 'center',
        alignContent: 'center',
        alignSelf: 'center',
        paddingLeft: '20px',
      }}>
         {error && <p>{error}</p>}
        <PropertyMetaData property={property}/>
    </div>
  )
}

export default PropertyDetails
