const Newscard = (props) => {
    return (
        <a href="#">
            <img src={props.img} alt="" />
            <div className="mt-2 ">
                <h4 className="lg:flex lg:flex-row">
                    <label className="font-serif font-extralight text-[rgb(51,51,51)] mr-4">{props.category}</label>
                    <p className="uppercase">{props.title}</p>
                </h4>
                <p className="font-serif text-[rgb(51,51,51)] text-[1rem]">{props.subheadline}</p>
            </div>
        </a>
    )
}
export default Newscard;