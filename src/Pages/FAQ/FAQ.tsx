import { Container, Row, Col } from "react-bootstrap"
import './FAQ.css';
import Breadcrumb from "../../Components/Breadcrumb";
import Footer from "../../Components/Footer";
import HeaderBottom from "../../Components/HeaderBottom";
import HeaderMiddle from "../../Components/HeaderMiddle";
import HeaderTop from "../../Components/HeaderTop";
import uuid from "react-uuid";
import { useState } from 'react'

const data = [
    {
        cardHeader: " Donec mattis finibus elit ut tristique?",
        cardDesc: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
    },
    {
        cardHeader: " Donec mattis finibus elit ut tristique?",
        cardDesc: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
    },
    {
        cardHeader: " Donec mattis finibus elit ut tristique?",
        cardDesc: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
    },
    {
        cardHeader: " Donec mattis finibus elit ut tristique?",
        cardDesc: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
    },
    {
        cardHeader: " Donec mattis finibus elit ut tristique?",
        cardDesc: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
    },
    {
        cardHeader: " Donec mattis finibus elit ut tristique?",
        cardDesc: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
    },
    {
        cardHeader: " Donec mattis finibus elit ut tristique?",
        cardDesc: "Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS."
    }
]



function FAQ() {
    const [accordionNumber, setAccordionNumber] = useState(0)


    const handleClick = (index: number) => {
        return () => {
            setAccordionNumber(index);
        }
    }
    return (
        <>
            <header>
                <HeaderTop />
                <HeaderMiddle />
                <HeaderBottom />
            </header>
            <Breadcrumb />
            <div className="frequently-area">
                <Container>
                    <Row>
                        <Col md={12}>
                            <div className="frequently-content">
                                <div className="frequently-desc">
                                    <h3>Below are frequently asked questions, you may find the answer for yourself</h3>
                                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec id erat sagittis, faucibus metus malesuada, eleifend turpis. Mauris semper augue id nisl aliquet, a porta lectus mattis. Nulla at tortor augue. In eget enim diam. Donec gravida tortor sem, ac fermentum nibh rutrum sit amet. Nulla convallis mauris vitae congue consequat. Donec interdum nunc purus, vitae vulputate arcu fringilla quis. Vivamus iaculis euismod dui.</p>
                                </div>
                            </div>
                            <div className="frequently-accordion">
                                <div id="accordion">
                                    {data.map((card: any, index: number) =>
                                        <div
                                            className={`card ${index === accordionNumber ? 'actives' : ''}`} key={uuid()}
                                            onClick={handleClick(index)}>
                                            <div className="card-header" id="headingTwo" >
                                                <h5>
                                                    <a className="collapsed" >
                                                        {card.cardHeader}
                                                    </a>
                                                </h5>
                                            </div>
                                            <div id="collapseTwo" className={`collapse ${index === accordionNumber ? 'show' : ''}`} aria-labelledby="headingTwo" data-parent="#accordion">
                                                <div className="card-body">
                                                    {card.cardDesc}
                                                </div>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </div>
            <Footer />
        </>
    )

}

export default FAQ;