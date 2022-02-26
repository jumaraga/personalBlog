import React, { ChangeEventHandler, ReactEventHandler, useContext, useState } from "react";
import axios from "axios";
import { getSession, useSession, signIn } from "next-auth/react";
import { ModalDialog, Modal, Button } from "react-bootstrap";
export default function Write() {
    const { data: session, status } = useSession()
    const [title, setTitle] = useState("");
    const [description, setDesc] = useState("");
    const [file, setFile] = useState<File | null>();
    const [categoria, setCategoria] = useState<string>()
    const [markdown, setMarkdown] = useState<string>()
    const [noPng, setNoPng] = useState<boolean>(false);
    const validadFormat = (file: File) => {
        const extention = file.name.slice(file.name.lastIndexOf('.'))
        console.log(extention)
        if (['.png'].includes(extention)) console.log('sie es')
        setNoPng(true)
    }


    const handleSubmit = async (e: any) => {
        e.preventDefault();
        const newPost = {
            title,
            description,
            file,
            categoria,
            photo: '',
            markdown,
            email: session?.user?.email
        };
        if (file) {

            const data = new FormData();
            const filename = Date.now() + file.name;
            data.append("name", filename);
            data.append("file", file);
            newPost.photo = filename;

            try {
                await axios.post("/upload", data);
            } catch (err) { console.log(e) }
        }
        try {
            const res = await axios.post("/api/guardar", newPost);
            console.log(res, 'response from newPOst')
            window.location.replace("/" + 'posts/' + res.data.savedArticule?.slug);
        } catch (err) {
            console.log(e)
        }
    };

    if (status === 'loading') {
        return null
    }


    if (status === 'authenticated' && session) {
        return (
            <>
                <div className="write">
                    {file && (
                        <img className="writeImg" src={URL.createObjectURL(file)} alt="" />
                    )}
                    <form className="writeForm" onSubmit={handleSubmit}>
                        <div className="writeFormGroup">
                            <label htmlFor="fileInput">
                                <i className="writeIcon fas fa-plus"></i>
                            </label>
                            <input
                                type="file"
                                id="fileInput"
                                style={{ display: "none" }}
                                onChange={(e: React.ChangeEvent<HTMLInputElement>) => { console.log(e.currentTarget.files[0].name); validadFormat(e.currentTarget.files[0]); setFile(e.currentTarget.files[0]) }}
                            />
                            <input
                                type="text"
                                placeholder="Title"
                                className="writeInput"
                                autoFocus={true}
                                onChange={e => setTitle(e.target.value)}
                            />
                        </div>
                        <select className="writeFormGroup" name="categoria" id="categoria" onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setCategoria(e.target.value)}>
                            <option value="pólitica">Polica</option>
                            <option value="tecnología"></option>
                            <option value="Curiosidades"></option>
                            <option value="ciencia"></option>
                        </select>
                        <div className="writeFormGroup">
                            <textarea
                                placeholder="add a little description"
                                className="writeInput writeDesc"
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
                <ModalDialog>
                    <Modal.Header >
                        <Modal.Title>Modal title</Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <p>Solo debe seleccionar imagen en formato png</p>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button className="close" variant="primary">Sing In</Button>
                    </Modal.Footer>
                </ModalDialog></>
        )
    }


    return (
        <ModalDialog>
            <Modal.Header >
                <Modal.Title>No se a loggeado aún</Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <p> Por favor inicie sesion</p>
            </Modal.Body>

            <Modal.Footer>
                <Button onClick={() => signIn()} variant="primary">Sing In</Button>
            </Modal.Footer>
        </ModalDialog>
    );
}

export async function getServerSideProps(ctx: any) {
    const session = await getSession(ctx)

    return {
        props: {
            session
        }
    }

}