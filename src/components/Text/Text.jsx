import styled from "styled-components";


const Text = styled.p`
color : ${(props)=>(props.color ? props.color : 'black')};
margin : ${(props)=>(props.margin ? props.margin : 0)};

`


export default Text;