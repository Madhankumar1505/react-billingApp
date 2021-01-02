import React from 'react';
import Welcome from '../Welcome';
import Book from '../Book';
import BookList from '../BookList';
import CreateProduct from '../CreateProduct/CreateProduct';
import ViewProduct from '../ViewProduct/ViewProducts';
import { Switch, Route } from 'react-router-dom';
import Newsletter from '../PluralSight/Newsletter';
import BillProducts from '../BillProducts/BillProducts';

export default function Routes(props) {
    return (
        <Switch>
            <Route path="/" exact component={() => <Welcome headerArray={props.headerArray} />} />
            <Route path="/add" exact component={Book}></Route>
            <Route path="/list" exact component={BookList}></Route>
            <Route path="/createPrd" exact component={CreateProduct}></Route>
            <Route path="/edit/:productCode" exact component={CreateProduct}></Route>
            <Route path="/ViewPrd" exact component={ViewProduct}></Route>
            <Route path="/billing" exact component={BillProducts}></Route>
            <Route path="/cssplural" exact component={Newsletter}></Route>
            <Route path="*" component={() => <Welcome headerArray={props.headerArray} />}></Route>
        </Switch>
    );
}