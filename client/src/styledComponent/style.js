import styled from "styled-components";

export const CalendarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-item: center;
`;

export const CalendarWeekContainer = styled.div`
    display: grid;
    width: 80vw;
    max-width: 800px;
    margin-top: 4rem;
    grid-template-columns: repeat(7, auto);
`;

export const CalendarWeekDayContainer = styled.div`
    height: 2rem;
    color: #000;
    text-align: center;
    line-height: 2rem;
`;

export const CalendarDayContainer = styled.div`
    border: 1px solid #dedede;
    height: 5rem;
    color: #000;
    text-align: right;
    padding: 8px;
    line-height: 0.55rem;
`;

export const Header = styled.div`
    text-align: center;
    margin-bottom: 0;
    display: flex;
    justify-content: center;
    margin-top: 20px;
`;

export const TitleBox = styled.div`
    margin-top: 0.8rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
`;

export const NavBar = styled.div`
    display: flex;
    justify-content: start;
`;

export const NavBarButton = styled.button`
    margin-top: 1.5rem;
    margin-left: 1.5rem;
    padding: 0.1rem;
    letter-spacing: 0.2rem;
    font-size: 1.2rem;
    border: none;
    background: none;
    cursor: pointer;

    &:hover {
        color: #ef9f9f;
    }
`;

export const LeftBarButton = styled.button`
    margin-top: 1.5rem;
    margin-left: 1.5rem;
    padding: 0.1rem;
    letter-spacing: 0.2rem;
    font-size: 1.2rem;
    border: none;
    background: none;
    cursor: pointer;

    &:hover {
        color: #ef9f9f;
    }
`;

styled.body`
    box-sizing: border-box;
    margin: 0;
    padding: 0;
`;

export const Section = styled.div`
    margin: 0 auto;
    position: relative;
    display: flex;
    justify-content: space-between;
`;

export const LeftMenu = styled.button`
    flex: 0.75;

    margin-top: 2rem;
    margin-left: 1rem;
    letter-spacing: 0.2rem;
    font-size: 1.2rem;

    border: none;
    background: none;
    cursor: pointer;

    &:hover {
        color: #ef9f9f;
    }
`;

export const BlankBar = styled.div`
    flex: 7.5;
    line-height: 2.75;
`;

export const ProfileNavBar = styled.button`
    flex: 0.75;

    margin-top: 2rem;
    margin-right: 1.5rem;
    letter-spacing: 0.2rem;
    font-size: 1.2rem;

    border: none;
    background: none;
    cursor: pointer;

    &:hover {
        color: #ef9f9f;
    }
`;

export const LoginContainer = styled.div`
    border: 1px solid black;
    width: 100rem;
    height: 30rem;
    position: absolute;
    left: 50%;
    top: 50%;
    margin-left: -300px;
    margin-top: -250px;
    box-shadow: 8px 8px 7px #bababa;
    background: white;
`;

export const LoginTitle = styled.h2`
    margin-top: 3rem;
    font-family: Nanum Gothic Coding, monospace;
`;

export const CustomizedButton = styled.button`
    width: 70%;
    background-image: linear-gradient(to right, #f47c7c 0%, #fad4d4 51%, #ef9f9f 100%);
    margin: auto;
    margin-top: 2rem;
    padding: 15px 45px;
    text-align: center;
    text-transform: uppercase;
    transition: 0.5s;
    background-size: 200% auto;
    color: white;
    box-shadow: 0 0 20px #eee;
    border-radius: 2.5rem;
    border: none;
    display: block;
    cursor: pointer;

    &:hover {
        background-position: right center;
        color: #fff;
        text-decoration: none;
    }
`;

export const EngTitle = styled.h2`
    margin-top: 3rem;
    font-family: Gentium Plus, serif;
    font-size: 2rem;
    letter-spacing: 0.4rem;
`;

export const InputBox = styled.input`
    text-align: start;
    width: 70%;
    height: 2.5rem;
    border: none;
    border-bottom: solid;
    margin-top: 1rem;
    border-width: 0.01rem;
`;

export const LeftBox = styled.div`
    float: left;
    width: 30%;
    height: 2.5rem;
    padding-top: 0.5rem;
    text-align: end;
`;

export const RightBox = styled.div`
    float: right;
    width: 60%;
    height: 2.5rem;
    padding-top: 0.5rem;
    padding-left: 0.5rem;
    text-align: start;
`;

export const RightInput = styled.input`
    float: right;
    width: 57%;
    height: 1.5rem;
    padding-top: 0.2rem;
    padding-left: 0.5rem;
    text-align: start;
`;

export const ModifyButton = styled.button`
    width: 25%;
    border-width: 0.1rem;
    border-radius: 0.2rem;
    margin-top: 5rem;
    margin-left: 0.5rem;
    margin-right: 0.5rem;
`;

export const LeftInput = styled.input`
    text-align: left;
    width: 75%;
    height: 2.5rem;
    float: left;
    border: none;
    border-bottom: solid;
    margin-top: 1rem;
    margin-left: 10%;
    border-width: 0.01rem;
`;

export const RightCheckBox = styled.div`
    box-sizing: border-box;
    float: right;
    width: 10%;
    height: 2rem;
    text-align: start;
    margin-top: 1.8rem;
`;

export const DayButton = styled.button`
    font-size: 17px;
    border: none;
    background: none;
    cursor: pointer;
    margin: 0;
    padding: 0;
`;

export const DailyExpContainer = styled.div`
    width: 90%;
    display: flex;
    justify-content: center;
    margin: auto;
`;

export const ExpTitle = styled.div`
    float: left;
    width: 30%;
    box-sizing: border-box;
    margin: 0.2rem 1.4rem;
    padding-bottom: 0.5rem;
    border-bottom: 1px solid gray;
`;

export const ExpContent = styled.div`
    float: left;
    width: 30%;
    box-sizing: border-box;
    margin: 0.5rem 1.4rem;
`;

export const StatContainer = styled.div`
    width: 80vw;
    height: 80vh;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    margin: 3rem 6rem;

    padding: 1rem;
`;

export const StatChart = styled.div`
    float: left;
    width: 25rem;
    height: 25rem;
    align-items: center;
    padding: 1rem 2rem;
`;

export const StatDetail = styled.div`
    border: 1px solid black;
    width: 25rem;
    height: 25rem;
    box-shadow: 8px 8px 7px #bababa;
    float: left;
`;

export const LeftSummary = styled.div`
    float: left;
    width: 40%;
    height: 2rem;
    text-align: end;
`;

export const RightSummary = styled.div`
    float: right;
    width: 50%;
    height: 2rem;
    text-align: start;
`;

export const TotalSummary = styled.div`
    width: 80%;
    height: 2rem;
    display: flex;
    justify-content: center;
    margin-left: 1rem;
    margin-top: 15rem;
`;

export const Modal = styled.div`
    margin-top: 2rem;
    padding: 2rem;
    background-color: #eee;
    width: 50%;
    height: 10rem;
    margin: auto;
`;
