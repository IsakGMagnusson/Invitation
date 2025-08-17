type TimelineItemProps = {
  text: string;
  header: string;
  image: string;
};

const TimelineItem = ({ text, header, imagePath }: any) => (
  <div className="timeline-item">
    <div className="inner">
      <div className="date">
        {/*<div className="month">Nov</div> */}
        {/* <div className="year">2022</div>*/}
      </div>
      <h2>{header}</h2>
      <img className="timeline-image" src={imagePath} />
      <p className="standard-text">{text}</p>
    </div>
  </div>
);

export default TimelineItem;
