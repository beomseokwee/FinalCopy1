import styled from 'styled-components';
import {useSelector} from "react-redux";

function QuotationNav ({gosuLists,setGosuLists,userLists,setUserLists,ids}) {
    const navList = ['진행전', '진행중', `진행완료`];
    const user_info = useSelector((state) => state.user.user);

    const goToGosuDetail = id => {
        window.location.href = `/GosuInfo/${id}`;
    };
    const goToUserDetail = id => {
        window.location.href = `/GosuInfoDetail/${id}`;
    };
    return (
        <>
        {user_info &&
        <>
            {user_info.role == 'ROLE_USER' ?
        <GosuStickyNav>
            <NavTitle onClick={()=>{
                console.log(ids)
                fetch(`https://jsonplaceholder.typicode.com/posts`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: localStorage.getItem('access_token'),
                    },
                    body: JSON.stringify(
                        {email: localStorage.getItem('email')}
                    )
                })
                    .then(res => res.json())
                    .then((res)=>  {
                        console.log(res);
                        let a = [{gosuName:'위범석',status:'1'},{gosuName: '범진성'}]
                        setGosuLists(a)
                    });
            }}>{navList[0]}</NavTitle>
            <NavTitle onClick={()=>{
                fetch(`https://jsonplaceholder.typicode.com/posts`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: localStorage.getItem('access_token'),
                    },
                    body: JSON.stringify(
                        {email: localStorage.getItem('email')}
                    )
                })
                    .then(res => res.json())
                    .then((res)=>  {
                        console.log(res);
                        let a = [{gosuName:'위범석',status:'1'},{gosuName: '범진성'}]
                        setGosuLists(a)
                    });
            }
            }>{navList[1]}</NavTitle>

            <NavTitle onClick={()=>{
                fetch(`https://jsonplaceholder.typicode.com/posts`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                        Authorization: localStorage.getItem('access_token'),
                    },
                    body: JSON.stringify(
                        {email: localStorage.getItem('email')}
                    )
                })
                    .then(res => res.json())
                    .then((res)=>  {
                        console.log(res);
                        let a = [{gosuName:'위범석',status:'1'},{gosuName: '범진성'}]
                        setGosuLists(a)
                    });
            }}>{navList[2]}</NavTitle>
            <>

            </>
        </GosuStickyNav>:
                <GosuStickyNav>
                    <NavTitle onClick={()=>{
                        console.log(ids)
                        fetch(`https://jsonplaceholder.typicode.com/posts`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: localStorage.getItem('access_token'),
                            },
                            body: JSON.stringify(
                                {email: localStorage.getItem('email')}
                            )
                        })
                            .then(res => res.json())
                            .then((res)=>  {
                                console.log(res);
                                let a = [{gosuName:'위범석',status:'1'},{gosuName: '범진성'}]
                                setUserLists(a)
                            });
                    }}>{navList[0]}</NavTitle>
                    <NavTitle onClick={()=>{
                        fetch(`https://jsonplaceholder.typicode.com/posts`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: localStorage.getItem('access_token'),
                            },
                            body: JSON.stringify(
                                {email: localStorage.getItem('email')}
                            )
                        })
                            .then(res => res.json())
                            .then((res)=>  {
                                console.log(res);
                                let a = [{gosuName:'위범석',status:'1'},{gosuName: '범진성'}]
                                setUserLists(a)
                            });
                    }
                    }>{navList[1]}</NavTitle>

                    <NavTitle onClick={()=>{
                        fetch(`https://jsonplaceholder.typicode.com/posts`, {
                            method: 'POST',
                            headers: {
                                'Content-Type': 'application/json',
                                Authorization: localStorage.getItem('access_token'),
                            },
                            body: JSON.stringify(
                                {email: localStorage.getItem('email')}
                            )
                        })
                            .then(res => res.json())
                            .then((res)=>  {
                                console.log(res);
                                let a = [{gosuName:'위범석',status:'1'},{gosuName: '범진성'}]
                                setUserLists(a)
                            });
                    }}>{navList[2]}</NavTitle>
                    <>

                    </>
                </GosuStickyNav>
            }
                </>
}
</>
);
}

const GosuStickyNav = styled.ul`
  display: flex;
  justify-content: flex-start;
  position: sticky;
  width: 100%;
  top: 0;
  padding-top: 10px;
  border-bottom: 1px solid #dbdbdb;
  background-color: white;
  z-index: 2;
  margin-left : 7.8%;
  margin-top : 1%;
`;

const NavTitle = styled.li`
  padding: 10px 0 20px 0;
  color: #737373;
  font-size: 16px;
  & + li {
    margin-left: 20px;
  }
  &:hover {
    padding-bottom: 5px;
    border-bottom: 4px solid black;
    color: black;
    font-weight: bold;
    cursor: pointer;
  }
`;

export default QuotationNav;


const GosuListWrap = styled.div`
  width: 100%;
  padding: 0 0 1rem;
  border: none;
  border-radius: 5px;
`;

const FindGosu = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  padding: 2rem 3rem;
  border-bottom: 1px solid #f4f4f4;
  &:hover {
    background: rgb(248, 248, 248);
    box-shadow: rgb(248 248 248) -24px 0px 0px 0px,
      rgb(248 248 248) 24px 0px 0px 0px;
    cursor: pointer;
  }
`;

const GosuListImg = styled.img`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 140px;
  height: 140px;
  border: 1px solid gray;
  border-radius: 10px;
`;

const GosuListForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 2rem;
`;

const GosuListTitle = styled.h2`
  font-size: 20px;
  font-weight: bolder;
`;

const GosuListContent = styled.p`
  margin-top: 20px;
  color: gray;
`;

const GosuListReviewForm = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const GosuListStar = styled.div`
  margin-left : 10px;
  font-size: 15px;
`;

const GosuListHire = styled.h2`
  margin-left: 10px;
  color: rebeccapurple;
  font-size: 15px;
  font-weight: bolder;
`;

const GosuListComment = styled.h3`
  margin-top: 20px;
  font-size: 15px;
  color: gray;
`;