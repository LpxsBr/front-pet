import styled from "styled-components";
import Explanation from "./Explanation/Explanation";
import AuthAndLogin from "../AuthAndLogin";

const StyledHomepage = styled.main`
display: flex;
background: #F1F1F1;
height: 100vh;
margin: 0;
`;

function Homepage(){
    return(
        <StyledHomepage>
            <Explanation/>
            <AuthAndLogin/>
        </StyledHomepage>
    )
}

export default Homepage;