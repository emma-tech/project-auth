import styled from "styled-components";

// Style for heading
export const Heading = styled.h1`
  font-size: 36px;
`;

//Style for text
export const Text = styled.p`
 font-size: 20px;
 margin: 10px;
 font-style: italic;
`;

// Styling for for container
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align:center;
  min-height: 100vh;
`;

//Style for form
export const UserForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  border:1px solid black;
  min-width: 50vw;
  margin-top: 50px;
  margin-bottom: 20px;
`;

export const FormLabel = styled.label`
 margin: 20px;
 font-weight:bold;
`;

export const FormInput = styled.input`
  border-radius: 5px;
  padding: 8px;
  margin-bottom: 10px;
  margin-left: 10px;
  width: 200px;
`;

// Style for buttons
export const Button = styled.button`
 margin: 10px;
 padding: 10px;
 background: #000;
 color: #fff;
 font-size: 18px;
 font-weight:bold;
 text-align: center;
 border-radius: 10px;
 border: none;
 cursor: pointer;

  &:hover {
    transition: 200ms ease-in-out;
    letter-spacing: 1px;
    background: #A599E0;
    color: #000;
  }
`;

//Styling for profile 

export const ProfileText = styled.p`
 color: #000;
 font-size: 20px;
 margin-bottom: 20px;
`;

export const CredText = styled.p`
 color: #000;
 font-size: 10px;
 margin-top: 20px;
`;

export const StatusMessage = styled.div`
 background: #A599E0;
 color: #000;
 min-width: 50vw;
`;