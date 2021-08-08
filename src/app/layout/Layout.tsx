import { Tabs } from 'antd';
import { Album }  from '../../features/album/Album'
import './layout.css';
const { TabPane } = Tabs;
function Layout(){
    return (
            <Tabs defaultActiveKey="albums" centered >
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
}

export default Layout;