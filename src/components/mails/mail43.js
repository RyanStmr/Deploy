import React, { Component } from "react";
import "./MailsDefault.css";

class Mail43 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <p>
          Hallo, Das Institut f&uuml;r Statistik f&uuml;hrt eine
          Online-Lehrevaluation aller seiner Veranstaltungen durch. Dieses
          Semester ist das besonders wichtig f&uuml;r uns Dozierende -- bitte
          geben Sie uns die Chance durch Ihre Teilnahme an der Evaluation dazu
          zu lernen und uns zu verbessern, gerade auch was die Nutzung und
          Qualit&auml;t der Online-Lernangebote angeht. Selbstverst&auml;ndlich
          ist die Befragung anonym und die Beantwortung aller Fragen,
          insbesondere der pers&ouml;nlichen Angaben, freiwillig. Der Login zu
          der Umfrage erfolgt unter dem Link: https://
          tinyurl.com/evaluationStat unter Eingabe der folgenden Losungen. zur
          Evaluation der VORLESUNG: RAER7 zur Evaluation der &Uuml;BUNG: FCTQD
          Bitte nehmen Sie sich die Zeit um beide Evaluationen auszuf&uuml;llen.
          Nach Eingabe Ihrer Antworten verwenden Sie bitte den
          &bdquo;Absenden&ldquo; Button am Ende des Fragebogens. Die
          Evaluationsergebnisse werden nur als eindimensionale
          H&auml;ufigkeitsverteilung der Dozentin oder dem Dozenten der
          Veranstaltung als Feedback zur Verf&uuml;gung gestellt. Ansonsten hat
          nur der Studiendekan Zugriff auf die Evaluationsergebnisse. Beachten
          Sie, dass Sie keine pers&ouml;nlichen Angaben machen, sollten Sie
          dennoch bef&uuml;rchten, dass diese R&uuml;ckschl&uuml;sse auf Ihre
          Person erm&ouml;glichen. Vielen Dank f&uuml;rs Mitmachen! Beste
          Gr&uuml;&szlig;e, Ben, Henry, Florian und Simon
        </p>
      </div>
    );
  }
}

Mail43.defaultProps = {
  senderName: "Florian Schiefler",
  sender: "noreply.moodle@lrz.uni-muenchen.de",
  date: "July 01, 2020, 9:43",
  subject: "s20_stosta_scheipl: Online-Lehrevaluation",
  capital: "S",
  keyID: 43,
  avatarColor: "blue",
  unseen: true,
};

export default Mail43;
