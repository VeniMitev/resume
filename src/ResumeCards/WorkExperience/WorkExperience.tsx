import Card from '../../components/Card';
import Title from '../../components/Title';

const WorkExperience = () => {
    return (
        <Card className='h-min py-3 overflow-auto scrollbar-thin scrollbar-thumb-slate-300 scrollbar-track-transparent'>
            <>
                <Title text='Work Experience' />
                <div className="flex gap-5 xl:gap-7 justify-center flex-col my-2 md:my-1 xl:my-5 px-12 md:px-8">
                    <div className="grow">
                        <div className=''>
                            <h3 className='font-semibold'>
                                27estore: 2019 - Current
                            </h3>                             
                            <p>
                                Product Manager / Web Developer
                            </p> 
                            <ul className='pt-2 list-outside ml-4 list-disc'>
                                <li>
                                    Design and develop the company's inhouse invoice management sofware using React, Node.js, and MongoDB
                                </li>                           
                                <li>
                                    Manage the company's website and online store using Magento e-commerce CMS v2.3
                                </li>
                                <li>
                                    Supervise warehouse team and operations, including incoming and outgoing shipments
                                </li>
                            </ul>
                            
                        </div>
                    </div>
                    <div className="grow ">
                        <div className='max-w-prose'>
                            <h3 className='font-semibold '>
                                US Bext Ltd: 2016 - 2019
                            </h3> 
                            <p>
                                Product Manager / Content Manager
                            </p>
                            <ul className='pt-2 list-outside ml-4 list-disc'>  
                                <li>
                                    Manage the company's products, incoming shipments, and inventory. Supervise the warehouse and shipping department.
                                </li>
                                <li>
                                    Manage the company's website and online store using Magento e-commerce CMS v1.9
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </>            
        </Card>
    )
}

export default WorkExperience;