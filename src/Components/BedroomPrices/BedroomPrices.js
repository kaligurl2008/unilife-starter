import React from 'react'
import './BedroomPrices.css'

function BedroomPrices({prices, propertyData}) {

    //create array for bedroom labels
    const bedroomLabels = ["bedroom_one", "bedroom_two", "bedroom_three", "bedroom_four", "bedroom_five", "bedroom_six", "bedroom_seven"];
    // console.log(bedroomLabels)

    const bedData = []
    // console.log(bedData)

    for( let i = 0; i < propertyData?.bedroom_count; i++){
      //find the price that goes with the bedLabels[i]
      bedData.push({name:"Bedroom " + (i+1), price: prices[bedroomLabels[i]]})
      console.log(bedData)
    }
    
    
    //   for(let i = 0; i < 4; i++){
    //   console.log(i)
    // }
    

  return (
    <div className='bedroom-price-container'>
        {/* {prices.bedroom_one} */}
        {
        bedData?.map(item => <p>{item.name}&nbsp;&nbsp;{item.price}</p>)
        }
    </div>
  )
}

export default BedroomPrices