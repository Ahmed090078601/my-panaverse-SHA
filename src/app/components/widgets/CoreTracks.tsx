import Button from "../shared/button"
import QuarterBox from "@/app/components/shared/QuarterBox"
import Wrapper from "../shared/Wrapper"
import { CoreTrackData2, Specifications } from "./SpecificationsDB"
 const CoreTrackData=
[
  {
    id:1,
header:"Quarter I",
description:"CS-101: Object-Oriented Programming using TypeScript - Full-Stack Template and API Product Development",
number:1
},
  {
    id:2,
header:"Quarter II ",
description:"W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
number:2
},
  {
    id:3,
header:"Quarter III",
description:"$-101: Dollar Making Bootcamp - Full-Stack Template and API Product Development",
number:3
},
]


const CoreTracks = () => {
    const paragraph = "Core Courses \n (Common in All Specializations):"
  return (
    <section className=" lg:mt-15">
      <Wrapper>
        {/* content */}
        <div className="max-w-screen-md">
        <h4>Program of Studies</h4>
        {
          CoreTrackData2.map((item,i) => (
            <div>
<h2 className="text-5xl font-bold whitespace-pre-line">
            {item.para1}
        </h2>
        <p className='mt-3 text-xl  text-slate-600'>{item.para2}</p>
        </div>
          ))
        }
        <div className="mt-5">
            <Button text='Learn More'/>
        </div>
        </div>

        {/* boxex */}
        <div className="my-20 flex flex-col gap-x-8  items-stretch  md:flex-row gap-y-6 justify-between">
    {
      CoreTrackData.map((item,i) => 
(


<QuarterBox 
key = {item.number}
header={item.header} 
description={item.description}
 number={i+1}
//  haveBorder={false}
 />
 
)   
      )
    } 
        </div>
      </Wrapper>
    </section>
  )
}

export default CoreTracks
