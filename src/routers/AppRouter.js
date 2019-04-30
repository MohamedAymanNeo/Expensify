//Imports
import  React  from 'react';
import {BrowserRouter as Router, Route, Switch, Link, NavLink} from 'react-router-dom';

import AddExpensePage from './../components/AddExpensePage';
import ExpensifyDashboardPage from './../components/ExpesifyDashboardPage';
import EditExpensePage from './../components/EditExpensePage';
import HelpPage from './../components/HelpPage';
import Header from './../components/Header';
import NotFoundPage from './../components/NotFoundPage';


const AppRouter = () => (
    <Router>
        <div>
            <Header/>
            <Switch>
                <Route path="/" component={ExpensifyDashboardPage} exact={true} />
                <Route path="/create" component={AddExpensePage} />
                <Route path="/edit" component= {EditExpensePage} />
                <Route path="/help" component={HelpPage} />
                <Route component={NotFoundPage} />
            </Switch>
        </div>
    </Router>
);


export default AppRouter;

