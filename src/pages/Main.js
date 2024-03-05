import React, { useState, useCallback, useEffect } from "react"
import { Repositorio, Container, Title, Form, InputForm, Button, ContainerInput, List, Avatar } from "./styles";
import { Github, Menu, Plus, RotateCw, Trash2 } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import getInformation from "./infra/api";

export default function Main() {
    const [repositorios, setRepositorios] = useState(() => {
        const repoStorage = localStorage.getItem('saveRepo');
        return repoStorage ? JSON.parse(repoStorage) : [];
    });
    const [newRepo, setNewRepo] = useState('')
    const [loading, setLoading] = useState(false)

    const notify = () => toast.error("Repositório não encontrado", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });

    const notify2 = () => toast.warning("Repositório já existe", {
        position: "top-center",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
    });


    useEffect(() => {
        localStorage.setItem('saveRepo', JSON.stringify(repositorios))
    }, [repositorios])

    const handleSubmit = useCallback((e) => {
        e.preventDefault()
        async function submit() {
            if (newRepo === '') return
            if (repositorios.find(r => r.name === newRepo)) {
                notify2()
                return
            }
            setLoading(true)
            const response = await getInformation(newRepo)
            if (response === null) {
                setLoading(false)
                notify()
                return
            }
            const data = {
                name: response?.full_name,
                avatar: response?.owner?.avatar_url,
            }
            setRepositorios([...repositorios, data])

            setNewRepo('')
            setLoading(false)
        }
        submit()
    }, [newRepo, repositorios])


    function handleInputChange(e) {
        setNewRepo(e.target.value)
    }

    const handleDelete = useCallback((repo) => {
        const find = repositorios.filter(r => r.name !== repo);
        setRepositorios(find)
    }, [repositorios])

    return (
        <Container>
            <Form onSubmit={handleSubmit} >
                <Title> <Github size={20} />Meus Repositórios</Title>
                <ContainerInput>
                    <InputForm value={newRepo} onChange={handleInputChange} placeholder="Busque por um repositório"></InputForm>

                    <Button loading={loading ? 1 : 0}>{loading ? <RotateCw size={20} /> : <Plus size={20} />}</Button>
                </ContainerInput>
            </Form>
            <ToastContainer />
            {repositorios?.map(repositorio => {
                return <Repositorio key={repositorio.name}>
                    <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }} >
                        <Avatar src={repositorio.avatar} alt={repositorio.name} />
                        <List key={repositorio.name} >{repositorio.name}  </List>
                    </div>
                    <div>
                        <Trash2 onClick={() => handleDelete(repositorio.name)} size={22} color="#000" style={{ cursor: 'pointer', paddingRight: '20px' }} />
                        <Link to={`/repositorio/${encodeURIComponent(repositorio.name)}`}><Menu color="#000" style={{ cursor: 'pointer', paddingRight: '25px' }} /></Link>
                    </div>
                </Repositorio>
            })}

        </Container>
    )
}