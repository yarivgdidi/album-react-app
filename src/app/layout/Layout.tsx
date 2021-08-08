import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
  } from "react-router-dom";
import { Tabs } from 'antd';
import { Album }  from '../../features/album/Album'

import './layout.css';
const { TabPane } = Tabs;
function Layout(){
    return (
        <Router>
            <Switch>
                <Route 
                path="/:tab?"
                render={({ match, history }) => {
                    return (
                        <Tabs   centered
                                defaultActiveKey={match.params.tab}
                                onChange={key => { history.push(`/${key}`);}}
                        >
                        <TabPane tab="Albums" key="albums">
                            <div className='container'>
                                <Album />
                            </div>    
                        </TabPane>
                        <TabPane tab="Favorites" key="favorites">
                            <div className='container'>
                                Content of Tab Pane 2
                            </div>
                        </TabPane>
                    </Tabs>
                    )
                }}
                />
          </Switch>
        </Router>
           
    )
}

export default Layout;