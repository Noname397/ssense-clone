import { Link } from "react-router-dom";
import { FaCaretDown,FaCaretUp } from "react-icons/fa";
import { useState } from "react";

export const LeftSideBar = (props) => {
  const [statusCategories,setStatusCategories] = useState(false);
  const [statusDesigners,setStatusDesigners] = useState(false);
  return (
    <div className="mr-5">
      <div>
        <div className="flex justify-between items-center">
        <h2 className="font-bold uppercase text-xs my-[10px]" >
          All categories
        </h2>
        {statusCategories && <FaCaretDown onClick={() => setStatusCategories(false)} />}
        {!statusCategories && <FaCaretUp onClick={() => setStatusCategories(true)} />}
        </div>
        {
          statusCategories && 
        <ul>
          {props.allTypes.map((item1,index1) => {
            return <div>
              <li className={`flex uppercase mb-0.5  ${props.userType === item1 ? 'underline' : ''}`} onClick={() => {
                props.setUserType(item1)
                props.setActiveType((prev) => {
                  let temp = [...prev];
                  temp[index1] = !temp[index1];
                  return temp;
                })
                props.updateType(item1)
              }} >
                <Link>{item1}</Link>
              </li>
              {props.activeType[index1] && (
                <div>
                  <ul className="ml-2.5">
                    {
                      props.allSubTypes[index1].map((item2,index2) => {
                        return (
                          <div>
                            <li className={`flex mb-0.5 capitalize ${props.userType === item2 ? 'underline' : '' }`} onClick={() => {
                              props.setUserType(item2)
                              props.setActiveSubType((prev2) => {
                                let temp = [...prev2]
                                temp[index1][index2] = !temp[index1][index2];
                                return temp;
                              })
                              
                              props.updateType(item2)
                            }}>
                              <Link>{item2}</Link>
                            </li>
                            {
                              props.activeSubType[index1][index2] && (
                                <div>
                                 <ul>
                                  {props.allSubSubTypes[index1][index2].map((item3,index3) => {
                                    return (
                                      <div>
                                        <li className={`flex mb-0.5 capitalize ml-2.5 ${
                                          props.userType === item3 ? 'underline' : ''
                                        } `} onClick={() => {
                                          props.setUserType(item3)
                                          props.updateType(item3)
                                        }}>
                                          <Link>{item3}</Link>
                                        </li>
                                      </div>
                                    )                                    
                                  })}
                                 </ul>
                                </div>
                              )
                            }
                          </div>
                        )
                      })
                    }
                  </ul>
                </div>
              )}
            </div>
          })}
        </ul>
        }
      </div>
      <div>
        <div className="flex justify-between items-center">
        <h2 className="font-bold uppercase text-xs my-[10px]">All designers</h2>
        {statusDesigners && <FaCaretDown onClick={() => setStatusDesigners(false)} />}
        {!statusDesigners && <FaCaretUp onClick={() => setStatusDesigners(true)} />}
        </div>
        {
          statusDesigners && 
        <ul className="">
          {
            props.allDesigners.map((item,index) => {
              return (
                <div>
                  <li onClick={() => {
                    // props.setUserDesigner(item)
                    props.updateDesigner(item)
                  }} className={`flex mb-0.5 ${props.designerName === item ? 'underline' : ''}`}>
                    <Link>{item}</Link>
                  </li>
                </div>
              )
            })
          }
        </ul>
        }
      </div>
      <div className="flex justify-center mt-6">
        <button className="min-w-[100px] bg-black text-white p-2 uppercase" onClick={() => {
          props.updateType("");
          props.updateDesigner("")
          props.updateColor("")
          props.updatePrice("")
          props.setUserType("")
        }}>Reset</button>
      </div>
    </div>
  );
};
