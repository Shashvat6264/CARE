import { BrowserRouter, Route, Switch, useRouteMatch } from "react-router-dom";
import ParentForm from "./ParentForm";
import OrgForm from "./OrgForm";
import ReporterForm from "./ReporterForm";
import {Container, Row, Col, Image} from 'react-bootstrap'
import left from "./left.png"
import right from "./right.png"
import './Form.css'

export default function RegisterationForm(){
    let {path, url} = useRouteMatch();

    return(
        <div>
            <Container fluid={true}>
                <Row>
                    <Col>
                        <Image className="Images" src={left}/>
                    </Col>
                    <Col>
                        <div id="login-box">
                            <div class="left">
                            <Switch>
                                <Route exact path={path}><ParentForm /></Route>
                                <Route exact path={`${path}/parent`}><ParentForm /></Route>
                                <Route exact path={`${path}/reporter`}><ReporterForm /></Route>
                                <Route exact path={`${path}/org`}><OrgForm /></Route>
                            </Switch>
                            </div>
                        </div>
                    </Col>
                    <Col>
                        <Image className="Images" src={right} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
