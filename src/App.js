import React, { useState } from "react";
import "./App.css";
import { RawInputArea } from "./component/RawInputArea";
import styled from "styled-components";
import { MarkdownSanitized } from "./component/MarkdownSanitized";
import MarkdownContext from "./context/MarkdownContext";
const AppContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Title = styled.div`
  font-size: 25px;
  font-weight: 700;
  font-family: "Lato", sans-serif;
  margin-bottom: 1em;
`;

const EditorContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
`;
function App() {
  const [markdownText, setMarkdownText] = useState("");
  const contextvalue = {
    markdownText,
    setMarkdownText,
  };

  return (
    <MarkdownContext.Provider value={contextvalue}>
      <AppContainer>
        <Title>Markdown editor</Title>
        <EditorContainer>
          <RawInputArea />
          <MarkdownSanitized />
        </EditorContainer>
      </AppContainer>
    </MarkdownContext.Provider>
  );
}
export default App;
