import React, { useState, useEffect } from 'react';
import ReactPlayer from 'react-player';



const Question = ({ questionModel, onAnswer, lastQues}) => {
  const [buttonText, setButtonText] = useState('');
  const [img, setImg] = useState('');


  useEffect(() => {
    questionModel.isQuestion ? setButtonText('Cevapla') : setButtonText('Devam');
    // questionModel.mediaType == 'image' ? setImg(require(questionModel.mediaUrl)) : setImg('');
    if (questionModel.mediaType === 'image') {
      // var url = require('./assets/yagmur.jpg');
      var url = require(`${questionModel.mediaUrl}`);
      setImg(url);
      
    }

  }, [questionModel]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onAnswer();
  };



  return (
    <div>
      <h3>{questionModel.question}</h3>
      <form onSubmit={handleSubmit}>
        <button type="submit">{buttonText}</button>
      </form>
      {questionModel.mediaType === 'image' &&
        <div style={{textAlignLast: 'center'}}>
          <img style={questionModel.isAbdest ? {height: '650px', width: '600px'} : {height: '650px'}} src={img}></img>
        </div>
      }
      {lastQues && <div>
        <p>Ödül kazandık. 🏆</p>
        <p>Birbirimizi kazandık sevgilim. Bir ömür...</p></div>}
      {questionModel.mediaType === 'video' &&
        <div className='player-wrapper'>
          <ReactPlayer
            className='react-player fixed-bottom'
            url={questionModel.mediaUrl}
            width='100%'
            height='650px'
            controls={true}
          />
        </div>
      }

    </div>
  );
};

export default Question;