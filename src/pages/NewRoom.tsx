import illustrationImg from '../assets/images/illustration.svg';
import logoImg from '../assets/images/logo.svg';
import { Button } from '../components/Button';
import { Link } from 'react-router-dom';

export function NewRoom() {
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
                    <form>
                        <input 
                            type="text" 
                            placeholder="Digite o nome da sala" 
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
