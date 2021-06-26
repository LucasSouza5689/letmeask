import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { Link, useHistory } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthContext';
import { FormEvent, useState } from 'react';
import { useAuth } from '../hooks/useAuth';
import { database } from '../services/firebase';

export function NewRoom() {
   //const { user } = useContext(AuthContext)
    const { user } = useAuth();
    const [newRoom, setNewRoom] = useState('');
    const history = useHistory()



    async function handleCreateRoom(event: FormEvent) {
        event.preventDefault();

        if(newRoom.trim() === ''){
            return;
        }

        const roomRef = database.ref('rooms');

        const firebaseRom = await roomRef.push({
            title: newRoom,
            authorid: user?.id
        })
        history.push(`/rooms/${roomRef.key}`);

    }
    
    return (
        <div id="page-auth">
            <aside>
                <img src={illustrationImg} alt='Illustração' />
                <strong>Crie salas de Q&amp;A ao vivo</strong>
                <p>Tire as duvidas de sua audiencia em tempo-real</p>
            </aside>
            <main>
                <div className="main-content">
                    <img src={logoImg} alt="letmeask" />
                    <h2>Criar uma sala</h2>
                    <form onSubmit={handleCreateRoom} >
                        <input 
                            type="text" 
                            placeholder="Digite o nome da sala" 
                            onChange={event => setNewRoom(event.target.value)}
                            value={newRoom}
                        />
                        <Button type="submit">Criar sala</Button>
                    </form>
                    <p>
                        Deseja entrar em uma sala já existente? <Link to="/">Clique aqui</Link>
                    </p>
                </div>
            </main>
        </div>
    )
}
