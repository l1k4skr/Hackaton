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
    const [hasFetched, setHasFetched] = useState(false);
  
    useEffect(() => {
      if (!hasFetched) {
        async function fetchAPIResponse() {
          try {
            const { value: userInput } = previousStep;
            const response = await axios.post('http://localhost:3001/api/ia', { prompt: userInput }, {
              headers: { 'Content-Type': 'application/json' },
            });
            console.log('Response:', response);
            setResponseMessage(response.data.message); // Ajusta según tu respuesta
          } catch (error) {
            console.error('Error:', error);
            setResponseMessage('Hubo un error al procesar tu mensaje.');
          } finally {
            setLoading(false);
            setHasFetched(true);
            triggerNextStep();
          }
        }
  
        fetchAPIResponse();
      }
    }, [hasFetched, previousStep]); // Solo depende de hasFetched y previousStep
  
    if (loading) {
      return <div>Cargando respuesta...</div>;
    }
  
    return <div>{responseMessage}</div>;
  };
export default ChatBotComponent;