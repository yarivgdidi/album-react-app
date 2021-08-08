import {
    BrowserRouter as Router,
    Route,
    NavLink,
    Switch
  } from "react-router-dom";
import { Tabs } from 'antd';
import './layout.css'
import { AlbumPage, FavoritePage} from '../pages/'
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
                            <TabPane tab="Albums" key="search">
                                <div className='container'>
                                    <AlbumPage />
                                </div>    
                            </TabPane>
                            <TabPane tab="Favorites" key="favorites">
                                <div className='container'>
                                    <FavoritePage />
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