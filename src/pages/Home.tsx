import { useHistory } from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import { Button } from '../components/Button';
import '../styles/auth.scss';
import firebase from 'firebase';
import { auth, database } from '../services/firebase';
import { FormEvent, useContext, useState } from 'react';
import { AuthContext } from '../contexts/AuthContext';
import { useAuth } from '../hooks/useAuth';


export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle} = useAuth();
    const [roomCode, setRoomCode] = useState('');
    async function handleCreateRoom(){
    if(!user){
        await signInWithGoogle()
    }
    history.push("/room/new");
     
        
    }

    async function handleJoinRoom(event: FormEvent){
        event.preventDefault();

        if (roomCode.trim() === '') {
            return;
        }

        const roomRef = await database.ref(`room/${roomCode}`).get();

        if(!roomRef.exists()){
            alert('Room does not exists.');
            return;
        }

        history.push(`/room/${roomCode}`);
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
                    <button onClick={handleCreateRoom} className="create-room">
                        <img src={googleIconImg} alt="Logo do Google" />
                        Crie sua sala com a Google
                    </button>
                    <div className="separator">ou entre em uam sala</div>
                    <form onSubmit={handleJoinRoom}>
                        <input 
                        type="text" 
                        placeholder="Digite o codigo da sala" 
                        onChange={event => setRoomCode(event.target.value)}
                        value={roomCode}
                        />
                        <Button type="submit">Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}
function setRoomCode(value: string): void {
    throw new Error('Function not implemented.');
}

