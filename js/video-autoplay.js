class Video {
  constructor(id) {
    this.id = id;
    this.body = document.querySelector('body');
    this.modal = document.createElement('div');
    this.text = document.createElement('h2');
    this.btns = document.createElement('div');
    this.btnYes = document.createElement('button');
    this.btnNo = document.createElement('button');
    this.video = document.getElementById(this.id);
	  this.show = false;
    this.createModal()
    this.addStyle();
  }

  createModal() {
    this.modal.classList.add('viedo-modal');

    this.text.innerText = 'Вам есть 18?'


    this.btns.classList.add('btn_conttainer');
    this.btnNo.innerText = 'Нет';
    this.btnNo.addEventListener('click', () => {
      this.playVideo()
    })
    
    this.btnYes.innerText = 'Да';
    this.btnYes.addEventListener('click', () => {
      this.playVideo()
    })

    this.modal.appendChild(this.text);
    this.btns.appendChild(this.btnNo);
    this.btns.appendChild(this.btnYes);
    this.modal.appendChild(this.btns);
    this.body.appendChild(this.modal);
    this.body.classList.add('blur');
  }

  playVideo () {
    this.body.classList.remove('blur');
    this.modal.style.display = 'none';
    this.video.play();
	  this.show = true;
  }

  addStyle() {
    const style = document.createElement('style');
    style.innerHTML= `
      body {
        position: relative;
        margin: 0 auto;
      }
	  
      .blur {
        overflow: hidden;
      }
      .blur .main,
      .blur #page-container {
          filter: blur(13px);
      }
      .viedo-modal {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: fixed;
        top: 0;
        left: 0;
        height: 100vh;
        width: 100%;
        background-color: rgb(0 0 0 / 95%);
        color: #fff;
		    z-index: 999;
      }
      
      .viedo-modal > button {
        background-color: #4290fc;
        border-radius: 0;
        color: #fff;
        padding: 17px;
        font-size: 1.6rem;
        font-weight: 800;
        text-transform: uppercase;
        outline: none;
        border: none;
		
        box-shadow: 0px 12px 18px -6px rgba(0,0,0,0.3);
      }
      
      .viedo-modal > button:hover {
        cursor: pointer;
      }

      .btn_conttainer {
        display: flex;
        padding: 30px 0;
      }

      .btn_conttainer > button:hover {
        cursor: pointer;
      }

      .btn_conttainer > button {
        background-color: red;
        border: none;
        outline: none;
        padding: 10px 20px;
        font-size: 30px;
        font-weight: bold;
        border-radius: 5px;
        color: #fff;
        width: 120px;
      }

      .btn_conttainer > button:first-child {
        background-color: red;

      }

      .btn_conttainer > button:last-child {
        background-color: #4290fc;
        margin-left: 20px;
      }
    `;
	
    document.querySelector('head').appendChild(style);
  }
}