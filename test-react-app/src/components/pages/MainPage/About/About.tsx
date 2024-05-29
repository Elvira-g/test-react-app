import React, { useEffect } from 'react'
import img1 from "../../../../assets/img/pim-chu-z6NZ76_UTDI-unsplash.jpeg"
import img2 from "../../../../assets/img/cody-lannom-G95AReIh_Ko-unsplash.jpeg"
import { isTemplateSpan } from 'typescript'

type AboutPropsType = {

}

type TabContentPropsType = {
    tab: TabContentType,
}


type TabContentType = {
    id: number
    image: string
    title: string
    text: string
    link: string
}

let contentList = [
    {
        id: 0,
        tabTitle: 'Introduction',
        image: img1,
        title:'Good Design Ideas for your fashion',
        text: 'Since this HTML template is based on Boostrap 5 CSS library, you can feel free to add more components as you need. Since this HTML template is based on Boostrap 5 CSS library, you can feel free to add more components as you need.',
        link: '#',
    },
    {
        id: 1,
        tabTitle: 'How we work?',
        image: img2,
        title:'Life at Studio',
        text: 'Over three years in business, We’ve had the chance to work on a variety of projects, with companies',
        link: '#',

    },
    {
        id: 2,
        tabTitle: 'Capabilites',
        image: img1,
        title:'What can help you?',
        text: 'Over three years in business, We’ve had the chance to work on a variety of projects, with companies',
        link: '#',
    }
]

type TabContentListType = typeof contentList

const TabContent: React.FC<TabContentPropsType> = ({tab}) => {
    return(
        <div className={`tab-pane fade show active`}>

            <div className="row">
                <div className="col-lg-7 col-12">
                    <img src={tab.image} className="img-fluid" alt=""/>
                </div>

                <div className="col-lg-5 col-12">
                    <div className="d-flex flex-column h-100 ms-lg-4 mt-lg-0 mt-5">
                        <h4 className="mb-3">{tab.title}</h4>

                        <p>{tab.text}</p>

                        <div className="mt-2 mt-lg-auto">
                            <a href={tab.link} className="custom-link mb-2">
                                Learn more about us
                                <i className="bi-arrow-right ms-2"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export const About: React.FC<AboutPropsType> = (props) => {
    const [ active, setActive ] = React.useState(0);
    
    // @ts-ignore
    const openTab = (e) => {
        // @ts-ignore
        setActive(+e.target.dataset.index);
    };


    return (

        <section className="about section-padding">

                <div className="container">
                    <div className="row">

                        <div className="col-12 text-center">
                            <h2 className="mb-5">Get started with <span>Little</span> Fashion</h2>
                        </div>

                            <div className="col-lg-2 col-12 mt-auto mb-auto">
                                <ul className="nav nav-pills mb-5 mx-auto justify-content-center align-items-center" id="pills-tab" role="tablist">
                                    {contentList.map((content, i) => (
                                        <li className="nav-item" role="presentation" key={i}>
                                            <button className={`nav-link ${i === active ? 'active' : ''}`} onClick={openTab} data-index={i} >{content.tabTitle}</button>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                        <div className="col-lg-10 col-12">
                            <div className="tab-content mt-2">
                                {contentList[active] && <TabContent tab={contentList[active]}/>}
                                
                            </div>
                        </div>

                    </div>
                </div>
            </section>
    )
}