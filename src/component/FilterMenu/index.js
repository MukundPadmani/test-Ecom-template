import React from 'react'
import { filterOptionsData, sortListDropdown } from '../../utils';
import DropDownList from './components/DropDownList';
import OnSale from './components/OnSale';
import PriceRange from './components/PriceRange';

const FilterMenu = () => {

    return (
        <>
            <div className="flex lg:space-x-4">
                <PriceRange />

                {filterOptionsData.map((data,i)=>  <div className="relative">
                    <DropDownList Data={filterOptionsData[i]} />
                </div>)}

                <OnSale title="On Sale" />                

                <div className="!ml-auto">
                   {sortListDropdown.map((data,i)=>  
                        <div className="relative">
                            <DropDownList Data={sortListDropdown[i]} />
                        </div>
                    )}
                </div> 
            </div>
        </>
    )
}

export default FilterMenu;