import React, { Component } from 'react'
import { Navbar, Container, Col} from 'react-bootstrap';

class Footer extends Component {
    render() {
        let fullYear = new Date().getFullYear();
        return (
            
            <div>
                <Navbar fixed='bottom' bg='dark' variant='dark'>
                    <Container>
                        <Col lg={12} className='text-center text-muted'>
                            <div>{fullYear} All rights reserved</div>
                        </Col>
                    </Container>
                </Navbar>
            </div>
        )
    }
}

export default Footer
