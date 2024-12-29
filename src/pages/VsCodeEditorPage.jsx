import { Col, Container, Row } from "react-bootstrap";
import { useRef, useState } from "react";
import Editor from "@monaco-editor/react";
import LanguageSelector from "./../component/CodeEditor/LanguageSelector";
import Output from "./../component/CodeEditor/Output";
import { CODE_SNIPPETS } from "../component/utility/codeEditor/vsCodeEditor";
import Layout from "./../component/layout/Layout";
import toast from "react-hot-toast";

const CodeEditorPage = () => {
  const [language, setLanguage] = useState("javascript");
  const [value, setValue] = useState("");
  const editorRef = useRef();

  const onSelect = (language) => {
    setLanguage(language);
    setValue(CODE_SNIPPETS[language]);
    toast.success("Successfully");
  };

  const onMount = (editor) => {
    editorRef.current = editor;
    editor.focus();
  };
  return (
    <Layout>
      <Container className=" my-5">
        <Row>
          <Col md={8}>
            {/* step 1  ---  language select */}
            <LanguageSelector language={language} onSelect={onSelect} />
            {/* step 2  ---  Editor setup */}
            <Editor
              options={{
                minimap: {
                  enabled: false,
                },
              }}
              height="75vh"
              theme="vs-dark"
              language={language}
              defaultValue={CODE_SNIPPETS[language]}
              onMount={onMount}
              value={value}
              onChange={(value) => setValue(value)}
            />
          </Col>
          <Col md={4}>
            {/* step 3  ---  Output setup */}

            <Output editorRef={editorRef} language={language} />
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default CodeEditorPage;
