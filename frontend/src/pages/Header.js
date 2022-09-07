
import React, {useState,useEffect} from "react";
import styled from "styled-components";
import { Grid, Text, Input } from "../elements";
import { history } from "../redux/configStore";
import { useSelector, useDispatch } from "react-redux";
import { actionCreators as userActions } from "../redux/modules/user";
// import Nav from "./Nav";
import { getCookie } from "../shared/Cookie";
import * as S from './NavEle';
import { FiBell } from '@react-icons/all-files/fi/FiBell';
import AlarmMy from './Alarm/AlarmMy';
import UserMy from './UserMy/UserMy';
import {useHistory} from "react-router-dom";
import {IoIosArrowDown} from "react-icons/all";
import {ToastNotification} from "./ToastNotification";

function test(){
    window.location.href='/payment2'
}


const Header = (props) => {
    // const [quotationUsers, setQuotationUsers] = useState([]);
    const dispatch = useDispatch();
    const user_info = useSelector((state) => state.user.user);
    const is_login = getCookie("is_login");
    const [isUserMyOpen, setIsUserMyOpen] = useState(false);
    const history = useHistory();
    const [isAlarmMyOpen, setIsAlarmMyOpen] = useState(false);
    const [data, setData] = useState([]);
    const [alarm, setAlarm] = useState('');
    const [listening, setListening] = useState(false);
    let [toastState, setToastState] = useState(false);
    let eventSource = undefined;
    const [read,setRead] = useState('');
    localStorage.setItem('read',read)
    const [count, setCount] = useState([]);
    let [toastAnimation, setToastAnimation] = useState("toast-alert closeAnimation");
    if (!listening && (user_info != null) ) {
        eventSource = new EventSource(`/test/subscribe/${user_info.email}`);
        eventSource.addEventListener("sse", (event) => {
            checkInputValues()
            const result = JSON.parse(event.data);
            console.log("received:", result);
            setData(old => [...old, result])
            setRead(0)
            setCount(old => [...old, result])
            // setCount(count +1)
        });
        eventSource.onopen = (event) => {
            console.log("connection opened")
        }
        setListening(true);
    }




    // if ( //로그인, 회원가입 화면에서는 헤더를 보여주지 않음.
    //     window.location.pathname === "/signin"
    //     // window.location.pathname === "/signup"
    // )
    //     return null;
    // if ( //로그인, 회원가입 화면에서는 헤더를 보여주지 않음.
    //     window.location.pathname === "/test"
    //
    //     // window.location.pathname === "/signup"
    // )
    //     return null;

    const userMyOpen = () => {
        setIsUserMyOpen(!isUserMyOpen);
    };
    // useEffect(() => {
    //     getQuotationList();
    // }, []);
    // const getQuotationList = () => {
    //     fetch(`/quotations`, {
    //         method: 'GET',
    //         headers: {
    //             Authorization: localStorage.getItem('access_token'),
    //         },
    //     })
    //         .then(res => res.json())
    //         .then(res => {
    //             setQuotationUsers(res);
    //         });
    // };
    const AlarmMyOpen = () => {
        setIsAlarmMyOpen(!isAlarmMyOpen);

    };

    function checkInputValues() {
        // checkInputValues : 입력하지 않은 input값이 있으면 해당 칸으로 이동시켜주고 toast알림을 통해 입력하지 않은 칸이 있다고 알리는 함수
        // if (data.length != 0) {
        //     // setUserInputScreen(0);
            setToastState(true);
            // return false;
        // }
        // return true;
    }
    return (
        <>
            <S.NavContainer>
                <S.Navbar>
                    <S.NavLeft>
                        <S.LogoBox>
                            <S.HomeLink>
                                <S.LogoImg onClick={()=>{
                                    document.location.href ='/'
                                }} src='/images/logo.png' alt="logo" />
                            </S.HomeLink>
                        </S.LogoBox>

            <S.MenuBox>
                <S.MenuList onClick={()=>{
                    window.location.href='/QuotationList'
                    // history.push('/QuotationList')
                }} >견적보기</S.MenuList>
                <S.MenuList onClick={test}>전문가 찾기</S.MenuList>
            </S.MenuBox>


                        <>
                            {
                                isAlarmMyOpen  == true ? <AlarmMy data = {data} /> : null
                            }
                        </>
                    </S.NavLeft>
                    <S.UserBox>
                        {user_info ? (
                            <>
                                <S.AlarmBox>
                                    {
                                        data.length != 0  ? <>
                                                {localStorage.getItem('read')==1 ? null :<Alarm>{count.length}</Alarm>
                                                }</>
                                            : null
                                    }
                                    {
                                        data.length != 0  ? <>
                                                {localStorage.getItem('read')==1 ? null :<Alarm>{count.length}</Alarm>
                                                }</>
                                            : null
                                    }

                                    <FiBell onClick={()=>{
                                        // setCount(count +1)
                                        AlarmMyOpen();
                                        console.log(localStorage.getItem('read'))
                                        setRead(1);
                                        setCount([]);
                                        localStorage.setItem('read',read)
                                    }} style={{position:'absolute', top : '50.5%' ,right : '38.2%',margin:'-15px 0px 0px -15px',zIndex:'-1'}}>
                                    </FiBell>

                                </S.AlarmBox>

                                <S.UserImgBox>
                                    {
                                        window.location.pathname !='/ChatApp'?(
                                        <S.MenuList style={{marginRight:'40px'}} onClick={()=>{

                                            window.location.href='/ChatList';
                                        }}>채팅</S.MenuList>):null
                                    }
                                    <S.UserImg src='/images/111111.jpg' alt='user1'></S.UserImg>
                                </S.UserImgBox>
                                <S.User
                                    onClick={userMyOpen}
                                >
                                    <S.UserName>
                                        {user_info.nickname}님
                                    </S.UserName>
                                    <IoIosArrowDown className="userIcons" />
                                </S.User>
                                <span style={{ margin: "0 13px" }}></span>
                                {
                                    isUserMyOpen  == true ? <UserMy /> : null
                                }
                            </>

                        ) : (
                            <>
                                <S.UserImgBox>
                                    <S.MenuList onClick={()=>{
                                        window.location.href='/GosuMain'
                                    }} style={{marginRight:'40px'}}>전문가 가입</S.MenuList>
                                </S.UserImgBox>
                                <S.Login
                                    style={{ textDecoration: "none", cursor: "pointer" }}
                                    onClick={() => {
                                        document.location.href = "/signin";
                                    }}
                                >
                                    로그인
                                </S.Login>
                                <span style={{ margin: "0 13px" }}></span>
                            </>
                        )}
                        {user_info ? (
                            <>
                                {
                                    toastState === true ? (
                                        <ToastNotification toastAnimation={toastAnimation} setToastAnimation={setToastAnimation} setToastState={setToastState} />
                                     ) : null
                                }
                                <S.Login
                                    onClick={() => {
                                        dispatch(userActions.logOut());
                                        document.location.href="/";
                                    }}
                                >
                                    로그아웃
                                </S.Login>
                                <span style={{ margin: "0 13px" }}></span>
                            </>


                        ) : (
                            <>
                                <S.Signup
                                    style={{ textDecoration: "none", cursor: "pointer" }}
                                    onClick={() => {
                                        document.location.href = "/signup";
                                    }}
                                >
                                    회원가입
                                </S.Signup>
                                <span style={{ margin: "0 13px" }}></span>
                            </>
                        )}
                    </S.UserBox>
                    </S.Navbar>

                    </S.NavContainer>


        </>
    );
};

export default Header;

const Alarm = styled.div`
    font-size:13px;
    background-color: red;
    border-radius: 100%;
    width: 15px;
    text-align : center;
    color : white;
    z-index : 5;
    position:absolute;
    right : 38%;
    margin-top: -15px;
`;
