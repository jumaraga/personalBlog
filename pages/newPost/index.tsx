import React, { ChangeEventHandler, ReactEventHandler, useContext, useState } from "react";
import axios from "axios";

export default function Write() {
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");
    const [file, setFile] = useState<File>();
    const [categoria, setCategoria] = useState<string>()
    const [markdown, setMarkdown]= useState<string>()
    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const newPost = {
            title,
            description,
            file,
            categoria,
            photo:null,
            markdown
        }; 
        if (file) {
            const data = new FormData();
            const filename = Date.now() + file.name;
           /*  data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename; */
            try {
                await axios.post("/upload", data);
            } catch (err) { }
        }
        try {
            const res = await axios.post("/api/guardar", newPost);
            window.location.replace("/" + res.data._id);
        } catch (err) { }
    };
    return (
        <div className="write">
            {file && (
                <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
            )}
            <form className="writeForm" onSubmit={handleSubmit}>
                <div className="writeFormGroup">
                    <label htmlFor="fileInput">
                        <i className="writeIcon fas fa-plus"></i>
                    </label>
                   {/*  <input
                        type="file"
                        id="fileInput"
                        style={{ display: "none" }}
                        onChange={(e:React.ChangeEvent<HTMLInputElement> ) => setFile(e.currentTarget.files[0])}
                    /> */}
                    <input
                        type="text"
                        placeholder="Title"
                        className="writeInput"
                        autoFocus={true}
                        onChange={e => setTitle(e.target.value)}
                    />
                </div>
                <select className="writeFormGroup" name="categoria" id="categoria" onChange={(e:React.ChangeEvent<HTMLSelectElement>)=>setCategoria(e.target.value)}>
                    <option value="pólitica">Polica</option>
                    <option value="tecnología"></option>
                    <option value="Curiosidades"></option>
                    <option value="ciencia"></option>
                </select>
                <div className="writeFormGroup">
                    <textarea
                        placeholder="add a little description"
                        className="writeInput writeText"
                        onChange={e => setDesc(e.target.value)}
                    ></textarea>
                </div>
                <div className="writeFormGroup">
                    <textarea
                        placeholder="Tell your story..."
                        className="writeInput writeText"
                        onChange={e => setMarkdown(e.target.value)}
                    ></textarea>
                </div><button className="writeSubmit" type="submit">
                    Publish
                </button>
            </form>
        </div>
    );
}