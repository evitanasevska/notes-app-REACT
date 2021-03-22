import React from "react";

function CreateArea(props) {
  
  const [input, setInput] = React.useState({
    title: "",
    content: ""
  })
 
  function handleChange(event){
    const {value, name} = event.target

    setInput(prevVal => {
      return {
        ...prevVal,
        [name]: value
      }
    })
  }

  return (
    <div>
      <form>
        <input value={input.title} onChange={handleChange} name="title" placeholder="Title" />
        <textarea value={input.content} onChange={handleChange} name="content" placeholder="Take a note..." rows="3" />
        <button onClick={(event) => {
          props.onAdd(input)
          setInput({
            title: "",
            content: ""
          })
          event.preventDefault();
        }}>+</button>
      </form>
    </div>
  );
}

export default CreateArea;