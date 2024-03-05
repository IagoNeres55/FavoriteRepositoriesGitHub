import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container, InfoContainer, BackButton, IssuesContainer } from "./style";
import { getRepoIssues, getInformation } from '../infra/api'
import { MoveLeft } from 'lucide-react'

export default function Repositorio() {
    const { repositorio } = useParams();
    const [isLoading, setIsLoading] = useState(true)
    const [repo, setRepo] = useState([])
    const [Issues, setIssues] = useState([])


    useEffect(() => {

        console.log(repositorio)
        const getIssues = async () => {
            const [responseIssues, responseRepos] = await Promise.all([
                getRepoIssues(repositorio),
                getInformation(repositorio)

            ])
            setIsLoading(false)
            setRepo(responseRepos)
            setIssues(responseIssues)
        }

        getIssues();


    }, [repositorio])

    if (isLoading) {
        return (
            <div>
                Carregando...
            </div>
        )
    }

    return (
        <Container>
            <InfoContainer>
                <BackButton to={'/'}> <MoveLeft color="#fff" strokeWidth={4} /></BackButton>
                <div>
                    <img src={repo?.owner.avatar_url} alt={repo?.owner.login} width={'45px'} ></img>
                </div>
                <header>
                    <span>{repo?.name}</span>
                    <p>{repo?.description}</p>
                </header>
            </InfoContainer>

            <IssuesContainer>

                {Issues.map(issue => (
                    <div key={String(issue.id)}>

                        <img src={issue.user.avatar_url} alt={issue.user.login}></img>
                        <b>
                            {issue.user.login}
                        </b>


                        <a href={issue.html_url} target="_blank" rel="noreferrer">{issue.title} </a>

                    </div>
                ))}
                {/* <div>
                    avatar_url
                </div>
                <div> user.login</div>
                <div>html_url</div>
                <div>title</div>
                <div> user.login</div> */}

            </IssuesContainer>

        </Container >
    )
}