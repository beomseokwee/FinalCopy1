import React, { useState, useEffect } from "react";

// css
import "./Toast.css";



function ToastNotification(props) {

    function toastClickEvent(props) {
        props.setToastState(false);
    }
    useEffect(() => {
        var timer2;
        let timer = setTimeout(() => {
            props.setToastAnimation("toast-alert openAnimation");
            timer2 = setTimeout(()=>{
                props.setToastState(false);
            },500);
        }, 3000);
        return () => {
            props.setToastAnimation("toast-alert closeAnimation");
            clearTimeout(timer);
            clearTimeout(timer2); }
    }, []);

    return (
        <div className={props.toastAnimation} onClick={()=>{toastClickEvent()}}>
            <img alt="" src="/images/alert2.png" />
            <p style={{fontFamily: 'GamjaFlower-Regular'}}>알림이 도착하였습니다!</p>
        </div>
    );
}

export { ToastNotification }