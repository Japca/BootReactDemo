/**
 * Created by cor on 5/28/17.
 *
 */

import React from 'react';
import SimpleTable from '../../container/Table/SimpleTable';
import ItemsLayout from '../../container/ItemsLayout/ItemsLayout';
import {Route, Switch} from 'react-router-dom';
import styles from './content.css';
import {ROOT, PAGE_LIST, PAGE_TABLE} from '../Layout/Layout';


const Content = () => {
        return (
            <div id='content' className={styles.contentClass}>
                <Switch>
                    <Route path={PAGE_LIST} component={ItemsLayout}/>
                    <Route path={PAGE_TABLE} component={SimpleTable}/>
                    <Route exact path={ROOT} component={ItemsLayout}/>
                </Switch>
            </div>
        );
};

export default Content;
