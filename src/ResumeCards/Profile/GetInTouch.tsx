import { FaEnvelope, FaGithub, FaInstagram, FaLaptopCode, FaLinkedin } from 'react-icons/fa'

const GetInTouch = () => {
    return (
        <ul className='list-disc list-inside px-16 md:px-6 '>
            <li className='flex items-center gap-4 py-2 md:py-1 xl:py-4 text-md text-slate-700'>
                <FaLinkedin size={20} /> 
                <a href="https://www.linkedin.com/in/venelin-mitev/" target="_blank" rel="noreferrer">
                    Venelin Mitev
                </a>
            </li>
            <li className='flex items-center gap-4 py-2 md:py-1 xl:py-4 text-md text-slate-700'>
                <FaEnvelope size={20} />
                <a href="mailto:business@venimitev.com" target="_blank" rel="noreferrer">
                    business@venimitev.com
                </a>
            </li>
            <li className='flex items-center gap-4 py-2 md:py-1 xl:py-4 text-md text-slate-700'>
                <FaGithub size={20} />
                <a href="https://github.com/VeniMitev" target="_blank" rel="noreferrer">
                    VeniMitev
                </a>                        
            </li>
            <li className='flex items-center gap-4 py-2 md:py-1 xl:py-4 text-md text-slate-700'>
                <FaInstagram size={20} />
                <a href="https://www.instagram.com/venelin_m/" target="_blank" rel="noreferrer">
                    @venelin_m
                </a>                        
            </li>
            <li className='flex items-center gap-4 py-2 md:py-1 xl:py-4 text-md text-slate-700'>
                <FaLaptopCode size={20} />
                <a href="https://venimitev.dev" target="_blank" rel="noreferrer">
                    venimitev.dev
                </a>
            </li>
        </ul>
    )
}

export default GetInTouch