import axios from 'axios';
import React from 'react'
import { useParams } from 'react-router-dom'
import Banner from '../../Components/Banner/Banner'
import PropertyCard from '../../Components/PropertyCard/PropertyCard';
import './CityDetails.css'
import PropertySearch from './../../Components/PropertySearch/PropertySearch';
import students from '../../assets/students.png'


function CityDetails() {
  const baseUrl = "https://unilife-server.herokuapp.com"

  // https://unilife-server.herokuapp.com/properties/city/633a96b96893d471a68cc891

  //create state for total property count
  const [totalProperties, setTotalProperties] = React.useState(0)

  //create state for properties
  const [properties, setProperties] = React.useState([])
  
  //create state for university info
  const [universityInfo, setUniversityInfo] = React.useState([])

  const {cityId} = useParams();
  // console.log(cityId);

  //call api to get city details
  React.useEffect (
    ()=>{
      // console.log(`${baseUrl}/cities/${cityId}`)
      axios.get(`${baseUrl}/properties/city/${cityId}`)
      .then(res=>{
        console.log(res)
        setTotalProperties(res.data.total);
        setProperties(res.data.response)
      })
      .catch(err=>console.log(err))

      //call api to get city details for student info
      axios.get(`${baseUrl}/cities/${cityId}`)
      .then(res=>{
        console.log(res.data.data[0])
        setUniversityInfo(res.data.data[0])
      })
    }, []
  
  )

  return (
    <div className='city-details-container'>
      <Banner title="Search Accommodation"
      description="Whatever you're after, we can help you find the right student accommodation for you"/>
      <div className='filter-box-container'>
        <PropertySearch />
      </div>
      <div className='properties-wrapper'>
        <h2>{`${totalProperties} in ${properties[0]?.address?.city}`}</h2>
        <div className='properties-container'>
          {
            properties.map(item => <PropertyCard 
              key={item._id} property={item} />)
          }
        </div>
      </div>
      <div className='student-info-container'>
        <div className='student-text-container'>
          <h3>Being a student in {universityInfo?.name}</h3>
          <p className='student-life'>{universityInfo?.student_life}</p>
          <p className='universities'>{universityInfo?.universities}</p>
        </div>
        <div className='student-image-container'>
          <img src={students} alt="college students" />
        </div>
      </div>
    </div>
  )
}

export default CityDetails