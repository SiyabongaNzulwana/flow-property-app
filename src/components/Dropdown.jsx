import Select from 'react-select'
import { useState } from 'react'
import useFetch from './utils/useFetch'
import Spinner from './utils/Spinner'
import ViewPropertyListings from './ViewPropertyListings'
import TextScroller from './Scrolling'
import logo from './../flowImage.png'

const listingTypes = [
  { value: 'sale', label: 'sale' },
  { value: 'rent', label: 'rent' },
  { value: 'auction', label: 'auction' }
]

const listingSectors = [
  { value: 'residential', label: 'residential' },
  { value: 'commercial', label: 'commercial' }
]

const _start = 0
const _limit = 10

const Dropdown = () => {
  const [selectedOrg, setSelectedOrg] = useState('')
  const [listingType, setListingType] = useState('sale')
  const [listingSector, setListingSector] = useState('residential')

  const { data, isPending, error } = useFetch(
    `${process.env.REACT_APP_API_DOMAIN}${process.env.REACT_APP_ORGANISATIONS}`
  )

  const handleChangeSelectedOrg = (e) => setSelectedOrg(e._id)

  const handleChangeListingType = (e) => setListingType(e.label)
  
  const handleChangeListingSector = (e) => setListingSector(e.label)
  

  const {
    data: propertyListings,
    isPropertyListingsPending,
    isPropertyListingsError
  } = useFetch(
    `https://api-staging.flowliving.com/v3/guest/search?listingType=${listingType}&listingSector=${listingSector}&organisation=${selectedOrg}&_start=${_start}&_limit=${_limit}`
  )

  console.log('propertyListings:: ', propertyListings)

  return (
    <div className='content-container'>
      {isPending && Spinner(isPending)}
      {error && <p>{error}</p>}
      <TextScroller text="Use the Dropdowns to search for property listings.!"/>
      <div className='dropdown'>
        <Select
          placeholder='Select Organisation'
          className='basic-single'
          name='organisattion'
          options={
            data &&
            data.organisations.map((organisation) => ({
              ...organisation,
              label: organisation.name,
              value: organisation.name
            }))
          }
          onChange={(e) => handleChangeSelectedOrg(e)}
        />

        <Select
          placeholder='Select Listing Type'
          className='basic-single'
          classNamePrefix='select'
          name='listing'
          options={listingTypes}
          onChange={(e) => handleChangeListingType(e)}
        />

        <Select
          placeholder='Select Listing Sector'
          className='basic-single'
          classNamePrefix='select'
          name='sector'
          options={listingSectors}
          onChange={(e) => handleChangeListingSector(e)}
        />
      </div>
      <div style={{
        justifyContent: 'center',
        border: '2px solid #ccc',
        borderColor: '#fff',
        margin: '25px',
        borderRadius: '5px',
      }}>
        {
          isPropertyListingsPending && Spinner(isPropertyListingsPending)
        }

         { isPropertyListingsError && <p>{isPropertyListingsError}</p> }

        {
          !propertyListings || !propertyListings?.length &&
          <img src={logo} alt='' width={'100%'} />
        }
        {
          propertyListings && propertyListings?.length > 0 &&
          propertyListings.map( property => <div key={property._id} className="property">
            <ViewPropertyListings property={property}/>
          </div>)
        }
        </div>
    </div>
  )
}

export default Dropdown
