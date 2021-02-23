import React,{useState,useRef} from 'react';
import {FiSettings} from 'react-icons/fi';
import {AiFillPlusCircle} from 'react-icons/ai';
import { IconContext } from 'react-icons/lib';
import FlatList from 'flatlist-react';
import { Scrollbars } from 'react-custom-scrollbars';
import '../App.css';
import {DATA} from '../data';

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
                    <img className="avatar" alt="" src={item.profileUrl} />
                </div>
                <div className="name-box">
                    <text className="name-title">{item.userName}</text>
                    <text className="last-message">{item.lastMessage}</text>
                    {item.unreadMessage!==0 &&
                        <div className="unread-circle" >
                            <p style={{fontSize:'7pt',fontWeight:'bold',zIndex:'inherit'}}>{item.unreadMessage}</p>
                        </div>
                    }
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
                        list={DATA}
                        renderItem={ChatList}
                    />
                </Scrollbars>
                    
                

            </div>
        </div>
    )
}

export default ChatList;