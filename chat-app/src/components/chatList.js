import React,{useState,useRef} from 'react';
import {FiSettings} from 'react-icons/fi';
import {AiFillPlusCircle} from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import FlatList from 'flatlist-react';
import { Scrollbars } from 'react-custom-scrollbars';
import '../App.css';

const data=[
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
    {},
]

function ChatList(){

    //ref
    const inputRef = useRef(0);

    //states
    const [search, setSearch] = useState('');

    //lifecycle

    //methods

    const ChatList=(item,id)=>{
        return(
            <div className="chat-item" key={id}>
                <div className="avatar-box">
                    <img className="avatar" alt="" src={"data:image/jpeg;base64,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"} />
                </div>
                <div className="name-box">
                    <text className="name-title">Alexandra Daddario</text>
                    <text className="last-message">Hello world this is a long message and it will be long becaue it is for tessting purpose only lol .</text>
                </div>
            </div>
        )
    }

    return(
        <div className="container col-3" style={{float:"left"}}>
            <div className="chat-list mr-right">
                <div className="chat-list-header" >
                    <div className="header-item" style={{gridColumn:"1/1"}}>
                        <span className="header-button">
                            <IconContext.Provider value={{style:{verticalAlign:"middle"}}}>
                                <FiSettings size={30} color="#007aff" onClick={()=>console.log("left")}/>
                            </IconContext.Provider>
                        </span>    

                    </div>
                    <div className="header-item" style={{gridColumn:"2/6"}}>
                        <p className="heading">Chats</p>
                    </div>
                    <div className="header-item" style={{gridColumn:"6/6"}}>
                        <span className="header-button">
                            <IconContext.Provider value={{style:{verticalAlign:"middle"}}}>
                                <AiFillPlusCircle size={35} color="#007aff" onClick={()=>console.log("left")}/>
                            </IconContext.Provider>
                        </span> 
                    </div>
                </div>
                <div className="chat-search">
                    <input type="text" className="searchBar" ref={ref=>inputRef.current=ref} placeholder="Search Messages" value={search} onChange={(event)=>{setSearch(event.target.value);if(event.target.value===""){inputRef.current.blur()}}} />
                </div>
                    
                <Scrollbars autoHeightMax="81vh" autoHeight={true} autoHeightMin={0} autoHide={true}>
                    <FlatList
                        list={data}
                        renderItem={ChatList}
                    />
                </Scrollbars>
                    
                

            </div>
        </div>
    )
}

export default ChatList;