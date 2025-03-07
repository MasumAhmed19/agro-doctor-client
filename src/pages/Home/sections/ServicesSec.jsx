import React from 'react'
import { features } from '../../../contents/index'
import Card1 from './Card1'

const ServicesSec = () => {
    return (
        <div className='max-w-7xl mx-auto py-[8vh] px-6'>
            <div className='grid grid-cola-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
                {
                    features.map((feature, idx) => (
                        <Card1 key={idx} feature={feature} />
                    ))
                }

            </div>
        </div>
    )
}

export default ServicesSec

