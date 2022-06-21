import { LoginContainer, LoginTitle, CustomizedButton } from "../styledComponent/style.js";

function IDSearch() {
    return (
        <LoginContainer>
            <LoginTitle>아이디 찾기</LoginTitle>
            <input type="text" className="input-box" placeholder="이름을 입력하세요" style={{ textAlign: "start" }}></input>
            <input type="text" className="input-box" placeholder="Email을 입력하세요" style={{ textAlign: "start" }}></input>
            <CustomizedButton>Search</CustomizedButton>
        </LoginContainer>
    );
}

export default IDSearch;
