import Post from "../../components/Post/Post";
import "./Home.scss";
import { EditOutlined } from "@ant-design/icons";
import { Button, Checkbox } from "antd";

const Home = () => {
  return (
    <div className="home">
      <div>
        <div>
			<div className="home_heading">
			TimeTable
			</div>
         
          <div className="time_data">
            <div>09:00</div>
            <div className="colored_component">
              <div>
                <div>
                  <Checkbox />
                </div>
                <div>
                  <p>7th D</p>

                  <p>9:30-10:30</p>
                </div>
              </div>
              <div>
			  <p>Geography</p>
			  <p>Chapter 1 : Name of the Chapter</p>
			  </div>
			  <Button><EditOutlined /></Button>
            </div>
          </div>
        </div>

        <div className="container"></div>
      </div>

      <div className="post_home">
        <Post />
      </div>
    </div>
  );
};

export default Home;
