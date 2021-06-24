import { useHistory } from 'react-router-dom';
import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import googleIconImg from '../assets/images/google-icon.svg';
import { Button } from '../components/Button';
import '../styles/auth.scss';
import firebase from 'firebase';
import { auth } from '../services/firebase';
import { useContext } from 'react';
import { AuthContext } from '../App';


export function Home() {
    const history = useHistory();
    const { user, signInWithGoogle} = useContext(AuthContext)
    
    async function handleCreateRoom(){
    if(!user){
        await signInWithGoogle()
    }
    history.push("/room/new");
     
        
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
                    <form action="">
                        <input type="text" placeholder="Digite o codigo da sala" />
                        <Button type="submit">Entrar na sala</Button>
                    </form>
                </div>
            </main>
        </div>
    )
}
