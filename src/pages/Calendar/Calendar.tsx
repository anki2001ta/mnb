import "./Calender.scss";
import clock from "../../assets/clock.svg";
import awaaj from "../../assets/awaj.svg";
import subject from "../../assets/book.svg";
import chapter from "../../assets/chapter.svg";
import pencil from '../../assets/pencil.svg'
// import Test from '../../components/Calender'


const Calendar = () => {
  return (
    <div className="box">
      <div className="calender_section">


{/* <Test /> */}


	  </div>
      <div className="calender_cards">
        <h1>Today's Schedule</h1>
        <div className="cards">
          <p>9:00am - 9:40am</p>
          <div className="time">
            <img src={clock} alt="" />
            <div>Class Time</div>
          </div>
          <div className="class_sub">
            <div>
              <p>7th D</p>
              <div className="time">
                <img src={awaaj} />
                <div>Class & Section</div>
              </div>
            </div>
            <div>
              <p>Maths</p>
              <div className="time">
                <img src={subject} />
                <div>Subject</div>
              </div>
            </div>
          </div>
		  <div className="chapter">
			<img src={chapter} />
			<h5 className="chapter_name">Chapter: 5 More on Multiplication</h5>
		  </div>
		  <div className="edit">
               <button><img src={pencil } alt="" />Edit</button>
		  </div>
        </div>
      </div>
    </div>
  );
};
export default Calendar;
