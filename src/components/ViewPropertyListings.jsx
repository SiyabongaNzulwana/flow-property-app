import { Link } from 'react-router-dom'
import Tilt from 'react-parallax-tilt'

const ViewPropertyListings = ({ property }) => {
  const { coverImageUrl, title, shortDescription, units, propertyType, _id } =
    property
  return (
    <div className='card-container'>
      <div className='card-content-wrapper'>
        <div>
        <Tilt>
          <Link to={`/property/${_id}`} state={property}>
            <img src={coverImageUrl} alt='' width={400} height={210}/>
          </Link>
        </Tilt>
        </div>
          <div className='card-title-short-description'>
            <h2 className='card-title-listingss'>{title}</h2>
            <p className='listing-short-description'>{shortDescription}</p>
            <p className='property-types-listing'>{propertyType}</p>
            <p className='card-rental-amount'>R {units[0].rentalAmount}</p>
          </div>
      </div>
    </div>
  )
}

export default ViewPropertyListings
