import React from 'react'
import s from './App.module.css'
import Container from './container/Container'

const App = () => {
    return (
        <div className={s.app}>
            <header>
                Neko Games
            </header>

            <Container>info</Container>
        </div>
    )
}

export default App
