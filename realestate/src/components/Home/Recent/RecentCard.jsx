import React from "react"
import { list } from "../../Data"

const RecentCard = ({ location, property, price1 }) => {
    //Const [ prev, setPrice] = usestate(0)
    //converting everthing to a string 

    var property1 = (property['property'] === undefined) ? "" : property['property']
    var location1 = (location['location'] === undefined) ? "" : location['location']


    return (
        <>
            <div className='content grid3 mtop'>
                {list.map((val, index) => {
                    // these val are in the db.list a is db
                    const { cover, category, location, name, price, type } = val;
                    console.log(property1, "props");
                    console.log(val.category)
                    console.log(val.category.includes(property1))
                    console.log(price1.low)
                    console.log(location['location'])
                    console.log(val.location.includes(location))
                    console.log(val.location.toLowerCase().includes(location1.toLowerCase()))
                    // console.log(val.location.toLowerCase().includes(props.location.toLowerCase()));
                    return (
                        (val.category.toLowerCase().includes(property1.toLowerCase())) &&
                            ((price1.low === "" || price1.high === "") || (price >= parseInt(price1.low) && price <= parseInt(price1.high))) &&
                            (val.location.toLowerCase().includes(location1.toLowerCase()))
                            ? (
                                <div className='box shadow' key={index}>
                                    <div className='img'>
                                        <img src={cover} alt='' />
                                    </div>
                                    <div className='text'>
                                        <div className='category flex'>
                                            <span style={{ background: category === "For Sale" ? "#25b5791a" : "#ff98001a", color: category === "For Sale" ? "#25b579" : "#ff9800" }}>{category}</span>
                                            <i className='fa fa-heart'></i>
                                        </div>
                                        <h4>{name}</h4>
                                        <p>
                                            <i className='fa fa-location-dot'></i> {location}
                                        </p>
                                    </div>
                                    <div className='button flex'>
                                        <div>
                                            <button className='btn2'>${price}</button>
                                        </div>
                                        <span>{type}</span>
                                    </div>
                                </div>) : null
                    )

                })}
            </div>
        </>
    )
}

export default RecentCard
