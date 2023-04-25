import "./Task&Goal.scss"
import coin from '../../assets/coins.svg'
import {DownOutlined} from '@ant-design/icons';
import { Collapse } from 'antd';

const { Panel } = Collapse;
const TaskAndGoals: React.FC  = () => {
   const onChange = (key: string | string[]) => {
      console.log(key);
    };
    return <div className="task_container">
     <p className="task_heading">Task & Goals</p>
     <div className="task_nav">
        <button>360* Feedback</button>
        <button>Personal Goals</button>
     </div>
     <div className="task_coin">
        <p> To earn gold coin complete the Feedback task.</p>
        <button><img src={coin} /></button>
     </div>
     <div className="dropdown">
     <Collapse defaultActiveKey={['1']} onChange={onChange}>
      <Panel header="Peer Feedback" key="1">
        <p>{"ok"}</p>
      </Panel>
      <Panel header="Learner Feedback" key="2">
        <p>{'text'}</p>
      </Panel>
      <Panel header="Management Feedback" key="3">
        <p>{'text'}</p>
      </Panel>
      <Panel header="Parent Feedback" key="3">
        <p>{'text'}</p>
      </Panel>
      <Panel header="Others" key="3">
        <p>{'text'}</p>
      </Panel>
    </Collapse>
      <div className="fb">
         
         {/* <button onClick={() => document.getElementById('peer_fb_box')!.style.display='block'}  className="peer_fb"><DownOutlined /></button> */}
      </div>
      {/* <div className="peer_fb_box">
            <h1>Faciliting a session</h1>
            <p>Deadline Date</p>
            <input type="text" placeholder="Enter Deadline foe this Task" />
            <p>Teacher Feedback</p>
            <input type="text" placeholder="Enter feedback" />
            <p>Upload Evidence/Result</p>
         </div> */}
      <div className="fb">
         Learner Feedback
         <button>   <DownOutlined /></button>
      </div>
      
      <div className="fb">
        Management Feedback
        <button>   <DownOutlined /></button>
     
      </div>

      <div className="fb">
        Parent Feedback
        <button><DownOutlined /></button>
      </div>

      <div className="fb"> 
        Others
        <button><DownOutlined /></button>
      </div>

     </div>
    </div>;
};

export default TaskAndGoals;
