import { Container, Col, Row } from "react-bootstrap";
import './Contact.css';



function Contact() {
    return (
        <div className="contact-main-page">
            <Container>
                <Row>
                    <Col lg={5} md={12} className="offset-lg-1 order-1 order-lg-2">
                        <div className="contact-page-side-content">
                            <h3 className="contact-page-title">Contact Us</h3>
                            <p className="contact-page-message">Claritas est etiam processus dynamicus, qui sequitur mutationem consuetudium lectorum. Mirum est notare quam littera gothica, quam nunc putamus parum claram anteposuerit litterarum formas human.</p>
                            <div className="single-contact-block">
                                <h4><i className="icon-fax"></i> Address</h4>
                                <p>123 Main Street, Anytown, CA 12345 – USA</p>
                            </div>
                            <div className="single-contact-block">
                                <h4><i className="icon-phone"></i>  Phone</h4>
                                <p>Mobile: (08) 123 456 789</p>
                                <p>Hotline: 1009 678 456</p>
                            </div>
                            <div className="single-contact-block last-child">
                                <h4><i className="icon-envelope-o"></i> Email</h4>
                                <p>yourmail@domain.com</p>
                                <p>support@hastech.company</p>
                            </div>
                        </div>
                    </Col>

                    <Col lg={6} md={12} className="order-2 order-lg-1">
                        <div className="contact-form-content">
                            <h3 className="contact-page-title">Tell Us Your Message</h3>
                            <div className="contact-form">
                                <form id="contact-form" action="#" method="post">
                                    <div className="form-group">
                                        <label>Your Name <span className="required">*</span></label>
                                        <input type="text" name="customerName" id="customername" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Your Email <span className="required">*</span></label>
                                        <input type="email" name="customerEmail" id="customerEmail" required />
                                    </div>
                                    <div className="form-group">
                                        <label>Subject</label>
                                        <input type="text" name="contactSubject" id="contactSubject" />
                                    </div>
                                    <div className="form-group form-group-2">
                                        <label>Your Message</label>
                                        <textarea name="contactMessage" id="contactMessage" ></textarea>
                                    </div>
                                    <div className="form-group">
                                        <button type="submit" value="submit" id="submit" className="li-btn-3" name="submit">send</button>
                                    </div>
                                </form>
                            </div>
                            <p className="form-messege"></p>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Contact;