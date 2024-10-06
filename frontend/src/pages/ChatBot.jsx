import React, { useState, useEffect } from 'react';
import axios from 'axios';
import ChatBot from 'react-simple-chatbot';
import { ThemeProvider } from 'styled-components';

const theme = {
  background: '#f5f8fb',
  fontFamily: 'Arial',
  headerBgColor: '#00B2A9',
  headerFontColor: '#fff',
  headerFontSize: '15px',
  botBubbleColor: '#00B2A9',
  botFontColor: '#fff',
  userBubbleColor: '#fff',
  userFontColor: '#4a4a4a',
};

function ChatBotComponent() {
  const steps = [
    {
      id: '1',
      message: '¡Hola! ¿Cómo puedo ayudarte?',
      trigger: 'userInput',
    },
    {
      id: 'userInput',
      user: true,
      trigger: 'responseFromAPI',
    },
    {
      id: 'responseFromAPI',
      component: <ResponseFromAPI />,
      asMessage: true,
      waitAction: true,
      trigger: 'userInput',
    },
  ];

  return (
    <div style={{ minHeight: '100vh', padding: '20px' }}>
      <ThemeProvider theme={theme}>
        <ChatBot steps={steps} />
      </ThemeProvider>
    </div>
  );
}

const ResponseFromAPI = ({ previousStep, triggerNextStep }) => {
    const [loading, setLoading] = useState(true);
    const [responseMessage, setResponseMessage] = useState('');
    const [hasResponded, setHasResponded] = useState(false);
  
    useEffect(() => {
      if (!hasResponded) {
        const userInput = previousStep.value;
        axios.post('http://localhost:3001/api/ia', { prompt: userInput }, {
          headers: {
            'Content-Type': 'application/json',
          },
        })
        .then(response => {
          setResponseMessage(response.data.text); // Asegúrate de que 'response.data.text' sea la propiedad correcta.
          setHasResponded(true);
        })
        .catch(error => {
          console.error('Error:', error);
          setResponseMessage('Hubo un error al procesar tu mensaje.');
          setHasResponded(true);
        })
        .finally(() => {
          setLoading(false);
        });
      }
    }, [previousStep, hasResponded]); // Eliminamos `triggerNextStep` de las dependencias para evitar el ciclo
  
    useEffect(() => {
      if (!loading && hasResponded) {
        triggerNextStep();
      }
    }, [loading, hasResponded, triggerNextStep]); // Nuevo efecto para manejar el paso al siguiente trigger
  
    if (loading) {
      return <div>Cargando respuesta...</div>;
    }
  
    return <div>{responseMessage}</div>;
  };

export default ChatBotComponent;