import React from "react";
import { createChatBotMessage } from 'react-chatbot-kit';
import LinkList from "./LinkList/LinkList";
import LearningOptions from "./LearningOptions/LearningOptions";
import { useNavigate  } from "react-router-dom";




const config = {
  initialMessages: [
    createChatBotMessage("Hola Coworker! Aqui tenemos ciertas sesiones en las que podrias estar interesado. ", {
      widget: "learningOptions",
    }),
  ],
  widgets: [
    {
      widgetName: "learningOptions",
      widgetFunc: (props) => <LearningOptions {...props} />,
    },
    {
      widgetName: "locationsLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Coworking",
            url: "/locations",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "aboutLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Sobre nosotros",
            url: "/about",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "faqLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Preguntas Frecuentes",
            url: "/faq",
            id: 1,
          },
        ],
      },
    },
    {
      widgetName: "faresLinks",
      widgetFunc: (props) => <LinkList {...props} />,
      props: {
        options: [
          {
            text: "Tarifas",
            url: "/fares",
            id: 1,
          },
        ],
      },
    },
  ],
}

export default config