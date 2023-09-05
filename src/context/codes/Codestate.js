import codeContext from "./codeContext";
import { useState } from "react";

const Codestate = (props) => {
  const host = "http://localhost:5000"
  const codesInitial = []
  const [codes, setCodes] = useState(codesInitial)
  const [json, setJson] = useState(codesInitial)
  // const [bio, setBio] = useState(codesInitial)
  // const [news, setNews] = useState(codesInitial)
  const [image, setImage] = useState(codesInitial)



  // Get User Details
  const getUserDetails = async () => {
    // API Call 
    const response = await fetch(`${host}/getuser`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token"),
      }
    });
    // const json = await response.json()
    const jsonobj = await response.json();
    setJson(json.concat(jsonobj))
    console.log(json)
    // setJson(json)
  }

  // Get User;s Bio Details
  const getBioDetails = async () => {
    // API Call 
    const response = await fetch(`${host}/fetchallcodes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token"),
      }
    });
    const json = await response.json()
    setCodes(json)
  }




  const getImages = async () => {
    // API Call 
    const response = await fetch(`${host}/api/img/getimage`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token"),
      }
    });
    // const json = await response.json()
    const jsonimg = await response.json();
    setImage(image.concat(jsonimg))
    console.log(image)
    // setJson(json)
  }

  // Get all Codes
  const getCodes = async () => {
    // API Call 
    const response = await fetch(`${host}/fetchallcodes`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token"),
      }
    });
    const json = await response.json()
    setCodes(json)
  }

  // Add a Code
  const addCode = async (newssource, newscategory, newstype) => {
    // TODO: API Call
    // API Call 
    const response = await fetch(`${host}/addcode`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token"),

      },
      body: JSON.stringify({ newssource, newscategory, newstype })
    });
 
    const code = await response.json();
    setCodes(codes.concat(code))
  }

  // Delete a Code
  const deleteCode = async (id) => {
    // API Call
    const response = await fetch(`${host}/deletecode/${id}`, {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token"),

      }
    });
    // eslint-disable-next-line
    const json = response.json();
    const newCodes = codes.filter((code) => { return code._id !== id })
    setCodes(newCodes)
  }

  // Edit a Code
  const editCode = async (id, title, description, tag) => {
    // API Call 
    const response = await fetch(`${host}/updatecode/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token"),

      },
      body: JSON.stringify({ title, description, tag })
    });
    // eslint-disable-next-line
    const json = await response.json();

    let newCodes = JSON.parse(JSON.stringify(codes))
    // Logic to edit in client
    for (let index = 0; index < newCodes.length; index++) {
      const element = newCodes[index];
      if (element._id === id) {
        newCodes[index].title = title;
        newCodes[index].description = description;
        newCodes[index].tag = tag;
        break;
      }
    }
    setCodes(newCodes);
  }

  // updateName
  const updateName = async (id, name) => {
    // API Call 
    const response = await fetch(`${host}/updatename/${id}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        "auth-token": localStorage.getItem("token"),

      },
      body: JSON.stringify({ name })
    });
    // eslint-disable-next-line
    const json = await response.json();

    let newName = JSON.parse(JSON.stringify(json))
    // Logic to edit in client
    for (let index = 0; index < newName.length; index++) {
      const element = newName[index];
      if (element._id === id) {
        newName[index].name = name;
        break;
      }
    }
    setJson(newName);
  }


  return (
    <codeContext.Provider value={{ codes, json, getUserDetails, getBioDetails, addCode, deleteCode, editCode, getCodes, updateName, getImages }}>
      {props.children}
    </codeContext.Provider>
  )

}
export default Codestate;