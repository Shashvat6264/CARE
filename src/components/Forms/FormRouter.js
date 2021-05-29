import { Route, Switch, useRouteMatch } from "react-router-dom";
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
                    <Col style={{zIndex:100}}>
                        <Image className="Images img-left" src={left}/>
                    </Col>
                    <Col>
                            <Switch>
                                <Route exact path={path}><ParentForm /></Route>
                                <Route exact path={`${path}/parent`}><ParentForm /></Route>
                                <Route exact path={`${path}/reporter`}><ReporterForm /></Route>
                                <Route exact path={`${path}/org`}><OrgForm /></Route>
                            </Switch>
                    </Col>
                    <Col style={{zIndex:100}}>
                        <Image className="Images img-right" src={right} />
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
