import React from 'react'
import img1 from "../../../../assets/img/pim-chu-z6NZ76_UTDI-unsplash.jpeg"
import img2 from "../../../../assets/img/cody-lannom-G95AReIh_Ko-unsplash.jpeg"
import { TabContent } from './TabContent'

type AboutPropsType = {

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

export const About = (props: AboutPropsType) => {
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