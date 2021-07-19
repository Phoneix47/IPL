import React, {Component} from 'react';
import {Route, Switch } from 'react-router-dom';
import home from "./components/home";
import Layout from "./hoc/Layout/layout";

class Routes extends Component{
    render(){
        return(
            <Layout>
            <Switch>
                <Route path="/" component={home}/>
            </Switch>
            </Layout>
        )
    }
}

export default Routes;
