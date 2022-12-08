import Card from '../../components/Card';
import Title from '../../components/Title';

const WorkExperience = () => {
    return (
        <Card className='h-screen overflow-auto'>
            <>
                <Title text='Work Experience' />
                <div className="flex gap-5 xl:gap-7 justify-center flex-col my-2 md:my-1 xl:my-10 px-12">
                    <div className="grow">
                        <h3 className=''>
                            <span className='font-semibold'>
                                27estore: 2019 - Current
                            </span>                             
                            <p>
                                Product Manager / Web Developer
                            </p> 
                            <p className='pt-2'>
                                - Design and develop the company's inhouse invoice management sofware using React, Node.js, and MongoDB
                            </p>                           
                            <p>
                                - Manage the company's website and online store using Magento e-commerce CMS v2.3
                            </p>
                            <p>
                                - Supervise warehouse team and operations, including incoming and outgoing shipments
                            </p>
                        </h3>
                    </div>
                    <div className="grow ">
                        <h3 className=''>
                            <span className='font-semibold '>
                                US Bext: 2016 - 2019
                            </span> 
                            <p>
                                Product Manager / Content Manager
                            </p>
                            <p className='pt-2'>
                                - Manage the company's products, incoming shipments, and inventory. Supervise the warehouse and shipping department.
                            </p>
                            <p>
                                - Manage the company's website and online store using Magento e-commerce CMS v1.9
                            </p>
                        </h3>
                    </div>
                </div>
            </>            
        </Card>
    )
}

export default WorkExperience;