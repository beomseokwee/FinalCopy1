import React, { useEffect } from 'react';
import Button from '@mui/material/Button';
const Payment2 = (effect, deps) => {


    console.log(text);
    text = '11';
    var text



    useEffect(() => {
        const jquery = document.createElement('script');
        jquery.src = 'https://code.jquery.com/jquery-1.12.4.min.js';
        const iamport = document.createElement('script');
        iamport.src = 'https://cdn.iamport.kr/js/iamport.payment-1.1.7.js';
        document.head.appendChild(jquery);
        document.head.appendChild(iamport);
        return () => {
            document.head.removeChild(jquery);
            document.head.removeChild(iamport);
        };
    }, []);

    const onClickPayment = () => {
        const { IMP } = window;
        IMP.init('imp04868015');

        const data = {
            pg: 'html5_inicis',
            pay_method: 'card',
            merchant_uid: `mid_${new Date().getTime()}`,
            name: '결제 테스트',
            amount: '1000',
            custom_data: {
                name: '부가정보',
                desc: '세부 부가정보',
            },
            buyer_name: '홍길동',
            buyer_tel: '01012345678',
            buyer_email: '14279625@gmail.com',
            buyer_addr: '구천면로 000-00',
            buyer_postalcode: '01234',
        };

        IMP.request_pay(data, callback);
    };

    const callback = response => {
        const { success, error_msg, imp_uid, merchant_uid, pay_method, paid_amount, status } = response;

        if (success) {
            alert('결제 성공');
        } else {
            alert(`결제 실패: ${error_msg}`);
        }
    };

    return <>
        <Button variant="contained"
                style={{backgroundColor:'#F2AA4C'}}
                onClick={()=>
        {
            onClickPayment()}
        }>결제하기</Button>

    </>;
};
export default Payment2;