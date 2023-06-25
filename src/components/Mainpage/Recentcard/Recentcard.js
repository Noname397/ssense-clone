const Recentcard = (props) => {
  return (
    <a href="#">
      <img src={props.img} alt="" />
      <div className="mt-2 flex">
        <label htmlFor="" className="uppercase mr-[40px] hidden md:block">
          Recent
        </label>
        <div>
          <p className="uppercase">{props.title}</p>
          <span className="font-light pr-1 mr-1 border-r-2 text-[12px] text-[rgb(51,51,51)]">{props.category}</span>
          <span className="font-light text-[12px] text-[rgb(51,51,51)]">
            {props.date.toLocaleString("default", { month: "long" }) +
              " " +
              props.date.getDate()}
          </span>
        </div>
      </div>
    </a>
  );
};

export default Recentcard;
