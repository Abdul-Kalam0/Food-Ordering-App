import React, { useState } from 'react'
import ItemList from './ItemList';

const RestaurantCategory = ({data, showItems, setShowIndex}) => {
   // const [showItems, setShowItems] = useState(false);

    const handleClick = () => {
    //    setShowItems(!showItems);
    setShowIndex();
        
    };
    
  return (
    <div>
      {/* { Accordion Header} */}
      <div className='w-6/12 bg-gray-50 shadow-lg  m-auto p-3 my-4 '>
            <div className='flex justify-between cursor-pointer' onClick={handleClick}>
                <span className='font-bold text-lg'>
                    {data.title} ({data.itemCards.length})
                </span>
                <span>🔽</span>
            </div>
            {/* {Accordion Body} */}
             {showItems && < ItemList items={data.itemCards} />}
        </div>
    </div>
  )
}

export default RestaurantCategory; 
 