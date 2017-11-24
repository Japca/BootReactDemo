/**
 * Created by cor on 5/28/17.
 *
 */

import React from 'react'
import SimpleTable from '../../container/Table/SimpleTable'
import ItemsLayout from '../../container/ItemsLayout/ItemsLayout'
import Player from '../Player/Player'
import logHoc from'../Log/LogHOC';
import Bubble from '../Bubble/Bubble'
import {Route, Switch} from 'react-router-dom'
import styles from './content.css'
import {ROOT, PAGE_LIST, PAGE_TABLE, PLAYER, BUBBLE} from '../Layout/Layout'


const Content = () => {
        return (
            <div id='content' className={styles.contentClass}>
                <Switch>
                    <Route path={PAGE_LIST} component={ItemsLayout}/>
                    <Route path={PAGE_TABLE} component={logHoc(SimpleTable)}/>
                    <Route path={PLAYER} component={Player}/>
                    <Route path={BUBBLE} component={Bubble}/>
                    <Route exact path={ROOT} component={ItemsLayout}/>
                </Switch>
            </div>
        )
}

export default Content
