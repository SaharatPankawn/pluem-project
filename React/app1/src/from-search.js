import React from "react";

export default function Fromsearch() {
    const textKW = React.useRef()
    const btOK = React.createRef()

    const onChangeKw = () => {
        if (textKW.current.value.trim() !=="") {
            btOK.current.disabled = false
        } else {
            btOK.current.disabled = true
        }
    } 
    return (
        <div style={{margin:"30px"}}>
            <form>
                <input type="text" name="kw" placeholder="ค้นหา" 
                ref={textKW} onInput={onChangeKw}/> &nbsp;
                <button ref={btOK} disabled>ตกลง</button>
            </form>
        </div>
    )
}