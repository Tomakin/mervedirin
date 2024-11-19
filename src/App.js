import React, { useState } from 'react';
import Question from './Question';
import './App.css';

const questions = [

  {
    question: 'Aşağıdaki şarkıyı sadece senin için söyleyip editledim, dinlemeden geçme!',
    mediaType: 'video',
    mediaUrl: 'https://www.youtube.com/watch?v=UWeLHM254Eg',
    isQuestion: false
  },
  {
    question: 'Umarım yüzünü güldürebilmişimdir. Çünkü gülünce çok güzel oluyorsun 😊',
    mediaType: 'image',
    mediaUrl: './assets/cutie.jpg',
    isQuestion: false
  },
  {
    question: 'Yağmurda, çamurda birbirimizi koruduğumuz günlere ve sana bayılıyorum.',
    mediaType: 'image',
    mediaUrl: './assets/yagmur.jpg',
    isQuestion: false
  },
  {
    question: 'Seninle uzaklara bakarken kurduğumuz hayaller, o kadar güzel ve keyifli ki... Her anı seninle paylaşıyor olmak, geleceği birlikte hayal etmek... Bu, benim en büyük mutluluğum.',
    mediaType: 'image',
    mediaUrl: './assets/kopru.jpg',
    isQuestion: false
  },
  {
    question: 'En şık hallerimde seninle olmak, en mutlu anlarımı seninle yaşamak... Seninle her gün, her an daha güzel.',
    mediaType: 'image',
    mediaUrl: './assets/buyuk_ada.jpg',
    isQuestion: false
  },
  {
    question: 'Yanında saçmalamak, en tatlı anime karakterlerimize dönüşmek… Sanırım hayatın en renkli anları, seninle yapılan çılgınlıklarda gizli.',
    mediaType: 'image',
    mediaUrl: './assets/anime.jpg',
    isQuestion: false
  },
  {
    question: 'Romantiklik buraya kadar... Kapının önünde şöyle bir kedi gördüm. Birlikte sevmeye gidelim mi?? NOLURRR🥺 Dönersen ben yine buradayım :)',
    mediaType: 'image',
    mediaUrl: './assets/kedi.jpg',
    isQuestion: false
  },
  {
    question: 'Evet dediğini farz ediyor ve umuyorum. Sonsuza kadar mutlu olalım sevgilim :)',
    mediaType: 'image',
    mediaUrl: './assets/abdest.jpg',
    isQuestion: false,
    isAbdest: true
  }
];

const App = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [lastQues, setLastQues] = useState(false);


  const handleAnswer = () => {
    debugger;
    if (currentQuestion + 1 < questions.length) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setLastQues(true);
    }
  };

  return (
    <div className="question-container">
      {currentQuestion < questions.length ? (
        <div>
          <Question
            questionModel={questions[currentQuestion]}
            onAnswer={handleAnswer}
            lastQues={lastQues}
          />
        </div>

      ) : (
        <h2>Tüm sorulara cevap verdiniz!</h2>
      )}
    </div>
  );
};

export default App;