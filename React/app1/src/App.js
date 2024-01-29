import React from "react";
import MessageBox from "./compoents/state-func";
import { userContext } from "./compoents/context";
import Content from "./compoents/context-content";
function App() {
	return (
		<>
			<MessageBox/>
		</>
	)
  return (
    <>
      <userContext.Provider value={"Tom Jerry"}>
        <Content />
      </userContext.Provider>
    </>
  );
}

export default App;