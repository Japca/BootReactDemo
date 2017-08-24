/**
 * Created by cor on 5/28/17.
 *
 */

import React from 'react';
import SimpleTable from '../../container/Table/SimpleTable';
import ItemsLayout from '../../container/ItemsLayout/ItemsLayout';
import Player from '../Player/Player';
import Page4 from '../../component/Page4';
import {Route, Switch} from 'react-router-dom';
import styles from './content.css';
import {ROOT, PAGE_LIST, PAGE_TABLE, PLAYER, PAGE_4} from '../Layout/Layout';


const Content = () => {
        return (
            <div id='content' className={styles.contentClass}>
                <Switch>
                    <Route path={PAGE_LIST} component={ItemsLayout}/>
                    <Route path={PAGE_TABLE} component={SimpleTable}/>
                    <Route path={PLAYER} component={Player}/>
                    <Route path={PAGE_4} component={Page4}/>
                    <Route exact path={ROOT} component={ItemsLayout}/>
                </Switch>
            </div>
        );
};

export default Content;
