import { useEffect } from 'react';
import { FormEvent, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom'

import logoImg from '../assets/images/logo.svg';

import { Button } from '../components/Button';
import { Question } from '../components/Question';
//import { Question } from '../components/Question';
import { RoomCode } from '../components/RoomCode';
//import { useAuth } from '../hooks/useAuth';
import { useRoom } from '../hooks/useRoom';
import { database } from '../services/firebase';

import '../styles/room.scss';
//import '../componets/Question/index.tsx';

import deleteImg from '../assets/images/delete.svg';

type RoomParams = {
  id: string;
}

export function AdminRoom() {
  //const { user } = useAuth();
  const params = useParams<RoomParams>();
  const history = useHistory();
  const roomId = params.id;
  const {title, questions } = useRoom(roomId);


  async function handleEndRoom(){
      await database.ref(`room/${roomId}`).update({
          endedAt: new Date(),
      })
      
      history.push('/');
  }

  async function handleDeleteQuestion(questionId: string) {
      if (window.confirm('tem certeza?')) {
          const questionRef = await database.ref(`rooms/${roomId}/questions/${questionId}`).remove();
      }
  }




//   async function handleSendQuestion(event: FormEvent) {
//     event.preventDefault();

//     if (newQuestion.trim() === '') {
//       return;
//     }

//     await database.ref(`rooms/${roomId}/questions`).push(question);

//     setNewQuestion('');
//   }

  return (
    <div id="page-room">
      <header>
        <div className="content">
          <img src={logoImg} alt="Letmeask" />
          <RoomCode code={roomId} />
          <Button isOutlined>Encerrar sala</Button>
        </div>
      </header>

      <main>
        <div className="room-title">
          <h1>Sala {title}</h1>
          { questions.length > 0 && <span>{questions.length} pergunta(s)</span> }
        </div>

      
        <div className="question-list">
            {questions.map(question => {
                return(
                <Question
                    key={question.id}
                    content={question.content}
                    author={question.author}
                >
                    <button
                        type="button"
                        onClick={() => handleDeleteQuestion(question.id)}
                    >
                        <img src={deleteImg} alt="Remover imagem" />
                    </button>
                </Question>
                )
            })

            }

        </div>
      </main>
    </div>
  );
}