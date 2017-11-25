import React from 'react';
import ReactDOM from 'react-dom';
import { render } from 'react-dom';
'use strict';



class Header extends React.Component {
  render() {
  return (
    <header>
      <div className='container-fluid max_width'>
        <div className='row'>
          <div className='header_video '>
            <img className='img-responsive logotype' src='src/images/logotype.png' />
            <iframe className="hidden-xs " width="100%" height="585" src="https://www.youtube.com/embed/Mziv-HDPivc?rel=0&amp;showinfo=0" frameBorder="0" allowFullScreen></iframe>
            <img className='img-responsive video visible-xs ' src='src/images/mobile_full.png' />
            <img className='img-responsive header_play  hidden-xs  ' src='src/images/header_play.png'/>
            <div className='header_text '>
              <h1>Przygarnij Photona</h1>
              <h2>na święta</h2>
              <p>Zagubiony Photon przybył na Ziemię.
                <br />
                Pomóż mu odnaleźć drogę do domu.
                <br/>
                Twojego domu.</p>
              <a className='video  hidden-xs  ' href='#'>CHCĘ PRZYGARNĄĆ</a>
              <div className='visible-xs header_text_button '>
                <a href='#'>CHCĘ PRZYGARNĄĆ</a>
                <a href='#'>OBEJRZYJ FILM</a>
              </div>
            </div>
          </div>
          <div className='header_img '>
            <img className='img-responsive hidden-xs " header_img_main 'src='src/images/header_img_main_full.png'/>
          </div>
        </div>
      </div>
    </header>)
  }
}
class Main extends React.Component {
  render() {
  return (
    <section>
      <div className='container '>
        <div className='row'>
          <div className='main'>
            <h1>Nagrody</h1>
            <div className='main_prize'>
              <div className='main_prize_left'>
                <h4>NAGRODA GŁÓWNA</h4>
                <img src='src/images/main_prize_left.png' alt=''></img>
                <p>robot eduakcyjny Photon</p>
                <p className='main_prize_quantity'>X 3</p>
              </div>
              <div className='main_prize_main'>
                <h4>NAGRODA II STOPNIA</h4>
                <img  src='src/images/main_prize_main.png' alt=''></img>
                <p>50% zniżki na photonrobot.pl</p>
                <p className='main_prize_quantity'>X 3</p>
              </div>
              <div className='main_prize_right'>
                <h4>NAGRODA III STOPNIA</h4>
                <img  src='src/images/main_prize_right.png' alt=''></img>
                <p>robot eduakcyjny Photon</p>
                <p className='main_prize_quantity'>X 3</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
}
class Form extends React.Component {
  render() {
  return (
    <section>
      <div className='container'>
        <div className='row'>
          <div className='form'>
            <div className='form_header'>
              <p>KROK 1 z 2</p>
              <h3>Chcesz przygarąć Photona na święta?</h3>
              <p>Wypełnij formularz adopcyjny</p>
            </div>
            <form  action='index.html' method='post'>
              <div>
                <label >Opisz krótko swoją rodzinę.</label>
                <input type='text' name='' alt='Opisz Photonowi swoją rodzinę! 'placeholder='Miejsce na Twój opis'></input>
              </div>
              <div>
                <label >Dlaczego chcecie przygarnąć Photona?</label>
                <input type='text' name='' placeholder='Miejsce na Twój opis'></input>
              </div>
              <div>
                <label >Dodaj film albo zdjęcie swojej rodziny</label>
                <div className='form_files'>
                  <label htmlFor='files' className='btn'>Dodaj film albo zdjęcie</label>
                  <input id='files' style={{visibility:'hidden'}} type='file'></input>
                  <p className='gallery_img_load' ></p>
                </div>
              </div>
              <div className='form_checkbox'>
                <input type='checkbox'></input>
                <span>Akceptuję regulamin</span>
              </div>
              <div>
                <button className='form_button'type='button' name='button'>DALEJ</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
    )
  }
}
class Gallery extends React.Component {
  render() {
  return (
    <section>
      <div className='container no_padding'>
        <div className='row no_padding'>
          <div className='gallery'>
            <h1>Przykładowe zgłoszenia</h1>
            <div className='gallery_img'>
              <div className='gallery_img_left col-lg-4 col-md-4 col-sm-4 col-xs-12'>
                <img className="img-responsive" src='src/images/gallery_img.png' alt=''></img>
                <img className='gallery_img_footer img-responsive' src='src/images/gallery_img_left.png' />
              </div>
              <div className='gallery_img_main col-lg-4 col-md-4 col-sm-4 col-xs-12'>
                <img className="img-responsive" src='src/images/gallery_img.png' alt=''></img>
                <img className='gallery_img_footer img-responsive' src='src/images/gallery_img_main.png' />
              </div>
              <div className='gallery_img_right col-lg-4 col-md-4 col-sm-4 col-xs-12'>
                <img className="img-responsive" src='src/images/gallery_img.png' alt=''></img>
                <img className='gallery_img_footer img-responsive' src='src/images/gallery_img_right.png' />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    )
  }
}
class Footer extends React.Component {
  render() {
  return (
    <footer className='footer_img'>
      <div className='container-fluid '>
      <div className='container'>
        <div className='row border '>
          <div className='footer col-lg-12 col-md-12 col-sm-12 col-xs-12'>
            <img className='footer_logotype' src='src/images/logotype.png' />
            <a href='#'>Regulamin konkursu >></a>
            <div className='footer_social'>
              <a target='_blank' className='footer_facebook'href='https://www.facebook.com/'><img className="img-responsive." src='src/images/footer_facebook.png'></img></a>
              <a target='_blank' className='footer_instagram'href='https://www.instagram.com/'><img className="img-responsive." src='src/images/footer_instagram.png'></img></a>
              <a target='_blank' className='footer_twitter'href='https://twitter.com/'><img className="img-responsive." src='src/images/footer_twitter.png'></img></a>
            </div>
          </div>
          </div>
        </div>
      </div>
    </footer>
    )
  }
}
class App extends React.Component {
  render() {
    return(<div>
        <Header/>
        <Main/>
        <Form/>
        <Gallery/>
        <Footer/>
      </div>)
    }
  }

class FormII extends React.Component {
  render() {
  return (
  <div>
    <section className="form_2step_height">
      <div className="container-fluid formII_footer_img">
        <div className="row">
          <div className="form_2step">
            <img className="img-responsive form_2step_logotype" src="src/images/logotype.png" />
            <div className="container form_2step_max_width">
              <div className="row">
                <div className="form">

                  <div className="form_header">

                    <p>KROK 2 z 2</p>
                    <h3>Podaj swoje dane kontaktowe</h3>
                    <p>Nie martw się, nie będziemy wysyłać Ci spamu :)<br/>
                      Musimy wiedzieć, komu wysłać Photona</p>
                      <div className="form_2step_arrow_box ">
                        <a href="#">Wstecz</a>
                      </div>
                  </div>

                  <form className="" action="index.html" method="post">
                    <div>
                      <label >Imię i nazwisko</label>
                      <input type="text" name="" placeholder="Tu wpisz imię i nazwisko"></input>
                    </div>
                    <div>
                      <label>Adres e-mail</label>
                      <input type="text" name="" placeholder="Tu wpisz adres e-mail"></input>
                    </div>
                    <div>
                      <label >Numer telefoniczny</label>
                      <input type="text" name="" placeholder="Tu wpisz numer telefoniczny"></input>
                    </div>
                    <div>
                      <button className="form_button form_button_formII"type="button" name="button">DALEJ</button>
                    </div>
                  </form>
                </div>
              </div>
          </div>
        </div>
      </div>
     </div>
    </section>

  </div>
    )
  }
}
class SendBox extends React.Component {
  render() {
  return (
    <section>
      <div className="container ">
        <div className="row">
          <div className="send_box">

            <div className="send_box_img">
              <img className="img-responsive " src="src/images/send_box_img.png" />
              <a href="" className="cross"></a>
            </div>

            <div className="form_header">
              <h3>Twoje zgłoszenie zostało wysłane!</h3>
              <p>Konkurs zostanie rostrzygnięty w środę 17 grudnia,<br />
                poinformujemy Cię mailowo o jego wyniku :)</p>
                <div>
                  <button className="send_box_button"type="button" name="button">OK!</button>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    )
  }
}
class SendBoxII extends React.Component {
  render() {
  return (
    <section>
      <div className="container ">
        <div className="row">
          <div className="send_box">
            <div className="send_box_img">
              <a href="" className="cross"></a>
            </div>
            <div className="form_header send_box_wrong">
              <h3>Coś poszło nie tak...</h3>
              <p>Z nieznanych nam powodów Twoje zgłoszenie nie dotarło do nas :( <br />
                  Wypełnij zgłoszenie jeszcze raz i wyślij</p>
                <div>
                  <button className="send_box_button"type="button" name="button">OK!</button>
                </div>
            </div>

          </div>
        </div>
      </div>
    </section>
    )
  }
}
class AppII extends React.Component {
  render() {
    return(<div>

      <SendBoxII/>
          <FormII/>
        <SendBox/>

        <App />
      </div>)
    }
  }
ReactDOM.render(
  <AppII />,
  document.getElementById('app')
  );
