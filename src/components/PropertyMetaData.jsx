import { useState } from 'react'
import Spinner from './utils/Spinner' 

const PropertyMetaData = ({ property }) => {
  const [showMore, setShowMore] = useState(false)
  return (
    <div className='meta-data'>
      {
        !property && 
        Spinner(!property)
      }
      <div className='listingImage'>
        <img src={property?.coverImageUrl} alt='' className='actual-Image' />
      </div>
      {property?.agentProfile && (
        <div className='agentProfile'>
          <img
            src={property?.agentProfile?.profileImageUrl}
            alt=''
            width={200}
            height={200}
            style={{ padding: '10px', borderRadius: '5px' }}
          />
          <div style={{ display: 'flex', justifyContent: 'space-evenly' }}>
            <p style={{ paddingLeft: '10px', fontWeight: 'bold' }}>
              Name: {property?.agentProfile?.firstName}
            </p>
            <p style={{ paddingRight: '20px', fontWeight: 'bold' }}>
              {property?.agentProfile?.lastName}
            </p>
          </div>
          <p style={{ paddingLeft: '10px' }}>
            {' '}
            Cell:{' '}
            <small style={{ fontSize: '15px', fontWeight: 'bold' }}>
              {property?.agentProfile?.contactNumber}
            </small>
          </p>
        </div>
      )}

      <div>
        <h2 className='listing-title'>{property?.title}</h2>
        <p className='listing-short-description'>
          {property?.shortDescription}
        </p>
      </div>
      <hr />

      {property?.description && (
        <div>
          <h3>About this property</h3>
          {property?.description && (
            <p className='listing-description'>
              {showMore
                ? property?.description
                : `${property?.description.substring(0, 200)}`}
              <div>
                <button
                  className='btn-show-more'
                  onClick={() => setShowMore(!showMore)}>
                  {!showMore ? 'show more' : 'show less'}
                </button>
              </div>
            </p>
          )}
        </div>
      )}
      <hr />
      {property?.propertyOverView && (
        <div>
          <h3>Property Overview</h3>
          <div className='property-overview-class'>
            {property?.propertyOverView?.length &&
              property?.propertyOverView.map((item, index) => {
                return (
                  <div key={index}>
                    {item?.name === 'Property Type' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>Property Type</p>
                        <p>{item['value']}</p>
                      </div>
                    )}

                    {item?.name === 'Property Title' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>Property Title</p>
                        <p>{item['value']}</p>
                      </div>
                    )}

                    {item?.name === 'Monthly levy' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>Monthly levy</p>
                        <p>{item['value']}</p>
                      </div>
                    )}
                    {item?.name === 'Monthly rates' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>Monthly Rates </p>
                        <p>{item['value']}</p>
                      </div>
                    )}
                    {item?.name === 'Erf size' && item?.value !== null && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>Erf Size </p>
                        <p>{item['value']}</p>
                      </div>
                    )}
                  </div>
                )
              })}
          </div>
        </div>
      )}
      {property?.propertyOverView && (
        <div>
          <h3>Property Overview</h3>
          <div className='property-overview-class'>
            {property?.propertyOverView?.length &&
              property?.propertyOverView.map((item, index) => {
                return (
                  <div key={index}>
                    {item?.name === 'Property Type' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>Property Type</p>
                        <p>{item['value']}</p>
                      </div>
                    )}

                    {item?.name === 'Property Title' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>Property Title</p>
                        <p>{item['value']}</p>
                      </div>
                    )}

                    {item?.name === 'Monthly levy' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>Monthly levy</p>
                        <p>{item['value']}</p>
                      </div>
                    )}
                    {item?.name === 'Monthly rates' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>Monthly Rates </p>
                        <p>{item['value']}</p>
                      </div>
                    )}
                    {item?.name === 'Erf size' && item?.value !== null && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>Erf Size </p>
                        <p>{item['value']}</p>
                      </div>
                    )}
                  </div>
                )
              })}
          </div>
        </div>
      )}
      <hr />

      {property?.units[0] && (
        <div className='property-info'>
          <h3>Info About the Unit</h3>
          <div className='property-type'>
            <p style={{ fontWeight: 'bolder' }}>Bathrooms </p>
            <p>{property?.units[0]?.bathrooms}</p>
          </div>
          <div className='property-type'>
            <p style={{ fontWeight: 'bolder' }}>Bedrooms </p>
            <p>{property?.units[0]?.bedrooms}</p>
          </div>
          <div className='property-type'>
            <p style={{ fontWeight: 'bolder' }}>Rental Amount </p>
            <p>R {property?.units[0]?.rentalAmount}</p>
          </div>
          <div className='property-type'>
            <p style={{ fontWeight: 'bolder' }}>Status </p>
            <p>{property?.units[0]?.status}</p>
          </div>
        </div>
      )}

      <hr />
      {property?.features && (
        <div className='features'>
          <h3>Property Features</h3>
          <div className='property-features-class'>
            {property?.features?.length &&
              property?.features.map((item, index) => {
                return (
                  <div key={index}>
                    {item?.name === 'Balcony' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>Balcony </p>
                        <p>
                          {item.isSelected.toString() === 'false'
                            ? 'NO'
                            : 'YES'}
                        </p>
                      </div>
                    )}
                    {item?.name === 'Braai Area' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>Braai Area </p>
                        <p>
                          {item.isSelected.toString() === 'false'
                            ? 'NO'
                            : 'YES'}
                        </p>
                      </div>
                    )}
                    {item?.name === 'Childcare' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>Child Care </p>
                        <p>
                          {item.isSelected.toString() === 'false'
                            ? 'NO'
                            : 'YES'}
                        </p>
                      </div>
                    )}

                    {item?.name === 'Cinema' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>Cinema </p>
                        <p>
                          {item.isSelected.toString() === 'false'
                            ? 'NO'
                            : 'YES'}
                        </p>
                      </div>
                    )}
                    {item?.name === 'Close Access To Transport' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>
                          Close Access To Transport
                        </p>
                        <p>
                          {item.isSelected.toString() === 'false'
                            ? 'NO'
                            : 'YES'}
                        </p>
                      </div>
                    )}
                    {item?.name === 'Close To Restaurants' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>
                          Close To Restaurants{' '}
                        </p>
                        <p>
                          {item.isSelected.toString() === 'false'
                            ? 'NO'
                            : 'YES'}
                        </p>
                      </div>
                    )}
                    {item?.name === 'Fibre' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>Fibre </p>
                        <p>
                          {item.isSelected.toString() === 'false'
                            ? 'NO'
                            : 'YES'}
                        </p>
                      </div>
                    )}
                    {item?.name === 'Furnished' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>Furnished </p>
                        <p>
                          {item.isSelected.toString() === 'false'
                            ? 'NO'
                            : 'YES'}
                        </p>
                      </div>
                    )}
                    {item?.name === 'Greenery' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>Greenery </p>
                        <p>
                          {item.isSelected.toString() === 'false'
                            ? 'NO'
                            : 'YES'}
                        </p>
                      </div>
                    )}
                    {item?.name === 'Gym' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>Gym </p>
                        <p>
                          {item.isSelected.toString() === 'false'
                            ? 'NO'
                            : 'YES'}
                        </p>
                      </div>
                    )}
                    {item?.name === 'Laundry' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>Laundry </p>
                        <p>
                          {item.isSelected.toString() === 'false'
                            ? 'NO'
                            : 'YES'}
                        </p>
                      </div>
                    )}
                    {item?.name === 'Live In Building Manager' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>
                          Live In Building Manager
                        </p>
                        <p>
                          {item.isSelected.toString() === 'false'
                            ? 'NO'
                            : 'YES'}
                        </p>
                      </div>
                    )}
                    {item?.name === 'Neighbourhood Security' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>
                          Neighbourhood Security
                        </p>
                        <p>
                          {item.isSelected.toString() === 'false'
                            ? 'NO'
                            : 'YES'}
                        </p>
                      </div>
                    )}
                    {item?.name === 'Parking' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>Parking</p>
                        <p>
                          {item.isSelected.toString() === 'false'
                            ? 'NO'
                            : 'YES'}
                        </p>
                      </div>
                    )}
                    {item?.name === 'Pool' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>Pool</p>
                        <p>
                          {item.isSelected.toString() === 'false'
                            ? 'NO'
                            : 'YES'}
                        </p>
                      </div>
                    )}
                    {item?.name === 'Security System' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>Security System</p>
                        <p>
                          {item.isSelected.toString() === 'false'
                            ? 'NO'
                            : 'YES'}
                        </p>
                      </div>
                    )}
                    {item?.name === 'Sportsfields' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>Sportsfields</p>
                        <p>
                          {item.isSelected.toString() === 'false'
                            ? 'NO'
                            : 'YES'}
                        </p>
                      </div>
                    )}
                    {item?.name === 'Storage Spaces' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>Storage Spaces</p>
                        <p>
                          {item.isSelected.toString() === 'false'
                            ? 'NO'
                            : 'YES'}
                        </p>
                      </div>
                    )}
                    {item?.name === 'Washing Line' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>Washing Line</p>
                        <p>
                          {item.isSelected.toString() === 'false'
                            ? 'NO'
                            : 'YES'}
                        </p>
                      </div>
                    )}
                    {item?.name === 'Work Spaces' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>Work Spaces</p>
                        <p>
                          {item.isSelected.toString() === 'false'
                            ? 'NO'
                            : 'YES'}
                        </p>
                      </div>
                    )}
                    {item?.name === 'Work Spaces' && (
                      <div className='property-type'>
                        <p style={{ fontWeight: 'bolder' }}>Work Spaces </p>
                        <p>
                          {item.isSelected.toString() === 'false'
                            ? 'NO'
                            : 'YES'}
                        </p>
                      </div>
                    )}
                  </div>
                )
              })}
          </div>
        </div>
      )}
    </div>
  )
}

export default PropertyMetaData
