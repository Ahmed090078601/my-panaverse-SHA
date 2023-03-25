// import Logo from "/public/Logo.png"
import Wrapper from '@/app/components/shared/Wrapper'
import Image from 'next/image'
import Link from 'next/link'
import panacersePic from '../../../../public/panaverse.png'
const Header = () =>{
    return(
    
        <header className='sticky top-0 z-10 bg-white '>
<Wrapper>
        <div className="items-center flex justify-between  mx-auto py-4  px-20">
            <div>
<Image src="/Logo.png" alt="logo" width="150" height="100"/>
            </div>
            <ul className="flex space-x-8 font-medium ">
              <li> <Link href="/">Home</Link> </li> 
                <li ><Link href="/">Courses</Link></li>
                <li ><Link href="/">Widgets</Link></li>
            </ul>
        </div>
        <div className='flex'>
    
    </div>
        </Wrapper>
        </header>
    
    )
}

export default Header
