"use client"
import React from 'react'
import QuarterBox from '../shared/QuarterBox'
import Wrapper from '../shared/Wrapper'
import Image from 'next/image'
import { CoreTrackData2 } from './SpecificationsDB'
import ai from "../../../../public/ai.webp"
import metaverse from "../../../../public/metaverse.webp"
import network from "../../../../public/network.webp"
import a1 from "../../../../public/a1.png"
import a2 from "../../../../public/a2.png"
import { useState } from 'react'
export const programsData = [
    {
        slug:'WMS',
        header:"Web 3.0 (Blockchain) and Metaverse Specialization",
        description:"This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
       image: ai,
        quarters:[
            {
header:"Quarter IV",
description:"W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
number:4,

            },
 {
                header:"Quarter V",
                description:"W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
                number:5
                            },
        ]
    },
    {
        slug:'AI',
        header:"Artificial Intelligence (AI) and Deep Learning Specialization",
        description:"The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
        image:metaverse, 
        quarters:[
            {
header:"Quarter IV",
description:"W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
number:4
            },
 {
                header:"Quarter V",
                description:"MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences ",
                number:5
                            },
        ]
    },
    {
        slug:'NW',
        header:"Artificial Intelligence (AI) and Deep Learning Specialization",
        description:"The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
        image:network, 
        quarters:[
            {
header:"Quarter IV",
description:"W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
number:4
            },
 {
                header:"Quarter V",
                description:"MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences ",
                number:5
                            },
        ]
    },
    {
        slug:'A1',
        header:"Artificial Intelligence (AI) and Deep Learning Specialization",
        description:"The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
        image:a1, 
    },
    {
        slug:'A2',
        header:"Artificial Intelligence (AI) and Deep Learning Specialization",
        description:"The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
        image:a2, 
    },
    {
        slug:'A1',
        header:"Artificial Intelligence (AI) and Deep Learning Specialization",
        description:"The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
        image:a1, 
    },
    {
        slug:'A2',
        header:"Artificial Intelligence (AI) and Deep Learning Specialization",
        description:"The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
        image:a2, 
    },
]

const SpecializedTracks = () => {
    const [selectedItem, setSelectedItem] = useState("WMS")
    const selectedItemData = programsData.find((item) => item.slug === selectedItem)
    console.log(selectedItemData)
    console.log(selectedItem)
  return (
   <section>
<Wrapper>
    
    {/* header */}
    {
        
        CoreTrackData2.map((item, i) => (
            
            <div key={item.id}>
                
                <div>
<h2 className='text-5xl font-bold whitespace-pre-line'>{item.heading2}</h2>
<p className="mt-3 text-xl text-slate-600 mb-10 max-w-screen-sm">{item.para3}</p>
</div>
<div className='flex flex-col-reverse lg:flex-row mt-10 gap-x-6 gap-y-8'>
 {/* content left */}

<div className='flex-1 h-auto self-start sticky top-28 basis-8/12 shadow-xl rounded-xl  border border-slate-200 py-8 px-8 '>
<h2 className='text-primary text-lg font-medium'>{selectedItemData?.header}</h2>
<h2 className='font-bold text-2xl'>{item.heading3}</h2>
<p className="text-lg text-slate-600 mt-2">{item.para4}</p>
<button className='text-primary gap-x-2 text-xl mt-4 underline flex items-end'>Learn More
<svg className='mb-1.5' width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" stroke-width="2"/>
</svg>
</button>
<div className='flex gap-4 mt-8 '>
    {
    selectedItemData?.quarters.map((item) =>(
    <QuarterBox
    key={item.number}
    header={item.header}
    number={item.number}
    description={item.description}
     haveBorder={false}
    />
    )) 
}
</div>

</div>
 {/* content right */}
<div  className=' basis-4/12 space-y-5 px-4 py-6 bg-slate-100 flex-1 '>
    {
        programsData.map((item,i) => (

        
<div onClick={() => setSelectedItem(item.slug)} key={item.slug} className='flex gap-x-4 items-center '>
<div className='flex-shrink-0 h-24 w-36'>
    <Image src={item.image} alt={item.header} className={'h-24 object-cover rounded-md'} />
</div>
<div className=''>
<h4 className='text-primary font-medium '>Specialized Program</h4>
<h3 className='text-xl font-semibold'>{item.header}</h3>
</div>
</div>

))}



</div>
</div>

</div>
))
    }
</Wrapper>
   </section>
  )
}

export default SpecializedTracks
