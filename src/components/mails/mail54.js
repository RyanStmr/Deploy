import React, { Component } from "react";
import "./MailsDefault.css";

class Mail54 extends Component {
  state = {};
  render() {
    return (
      <div onMouseOver={this.props.inEmailText}>
        <p>
          Sehr geehrte Bewohnerinnen und Bewohner der Wohnanlage , / Dear
          residents of the student residency complex, in unseren Wohnanlagen
          nehmen momentan wieder die Probleme mit Ruhest&ouml;rungen zu, die von
          unseren Bewohnern ausgehen. / The number of problems with disturbances
          of the peace caused by residents in our residency facilities is
          currently rising again. Dadurch werden insbesondere die Bewohner der
          Nachbarh&auml;user teilweise massiv in ihrer Nachtruhe gest&ouml;rt.
          Wir bitten Sie deshalb, von 22:00 Uhr bis 7:00 Uhr Ruhe in der
          Wohnanlage zu halten (Ziffer 1 Hausordnung). / The peace at night of
          inhabitants of neighbouring houses is in part massively disturbed by
          this problem. We thus ask that you keep peace and quiet in the
          residency complex between the hours of 10:00 p.m. and 7:00 a.m. (see
          also Item 1 of the Residence Rules of Conduct). Bitte beachten Sie
          folgende Punkte besonders: / Please note in particular the following:
          - halten Sie bei Feiern in den Gemeinschaftsr&auml;umen die Fenster
          geschlossen / keep the windows in common rooms closed during parties,
          celebrations, etc. - h&ouml;ren Sie Musik in angemessener
          Lautst&auml;rke / only listen to music at a reasonable volume -
          verhalten Sie sich in den Au&szlig;enbereichen (Garten, Hof, Balkon,
          Terrasse, etc.) ruhig / conduct yourself quietly in all outdoor areas
          (garden, courtyard, balcony, terrace, etc.) - beachten Sie, dass das
          Grillen nur im orts&uuml;blichen Umfang, bis max. 22.00 Uhr erlaubt
          ist (Ziffer 9 Hausordnung). / please note that grilling/barbequing is
          only permitted in the scope customary and normal at the location until
          10:00 p.m. at the latest (see also Item 9 of the Residence Rules of
          Conduct). Abgesehen von den einzuhaltenden Ruhezeiten bitten wir Sie
          um R&uuml;cksichtnahme gegen&uuml;ber Ihren Nachbarn: diese
          z&auml;hlen gr&ouml;&szlig;tenteils zur arbeitenden Bev&ouml;lkerung.
          Wenn Sie bis in die Morgenstunden feiern oder l&auml;rmen,
          entf&auml;llt die verdiente Nachtruhe f&uuml;r Ihr Umfeld. Dies
          st&ouml;rt den Nachbarschaftsfrieden emfpindlich und verschlechtert
          die Akzeptanz der Bev&ouml;lkerung f&uuml;r die Nachbarschaft von
          Wohnanlagen f&uuml;r Studierende generell. / Apart from the times of
          peace and quiet to be complied with we ask that you respect your
          neighbours; the majority are part of the working population. If you do
          party and make noise until the early morning hours, their right to
          enjoy a quiet night and a good night&#39;s sleep is significantly
          disturbed and your actions also cause the willingness of the
          population to accept residency complexes for students in the vicinity
          to deteriorate in general. Wir hoffen, dass Sie sich im Interesse
          eines guten nachbarschaftlichen Verh&auml;ltnisses zwischen
          Studierenden und Anwohnern in Zukunft so verhalten, dass es zu keinen
          weiteren Beschwerden kommt. / We hope that you in the interests of
          good neighbourly relations between students and local residents will
          conduct yourself in such a way in future that no further complaints
          arise. Bitten denken Sie daran, dass wir im Falle der Missachtung der
          Hausordnung vertragsrechtliche Ma&szlig;nahmen, die die K&uuml;ndigung
          zur Konsequenz haben k&ouml;nnen, gegen Sie einleiten m&uuml;ssen.
          Beachten Sie bitte auch, dass Hausfeste immer angemeldet werden
          m&uuml;ssen und nur nach Genehmigung durch das Studentenwerk
          stattfinden k&ouml;nnen. / Please remember that if disregard for the
          Residence Rules of Conduct we must take legal action against you under
          contract law which can result in termination of your tenancy
          agreement. Please also note that permission must always be obtained
          for house parties and that they may only be held subject to approval
          by the Studentenwerk. Mit freundlichen Gr&uuml;&szlig;en -- Beathe
          Schuller Studentenwerk M&uuml;nchen Anstalt des &ouml;ffentlichen
          Rechts Studentisches Wohnen Verwaltungsstelle Agnes/
          Adelheidstra&szlig;e 13 80798 M&uuml;nchen Tel.: +49 89 278143 - 11
          Fax.: +49 89 278143 - 15 Email: beathe.schuller@stwm.de
          www.studentenwerk-muenchen.de
        </p>
      </div>
    );
  }
}

Mail54.defaultProps = {
  senderName: "Beathe Schuller",
  sender: "beathe.schuller@stwm.de",
  date: "July 13, 2020, 12:03",
  subject: "Beschwerde über Ruhestörung....",
  capital: "B",
  keyID: 54,
  avatarColor: "xxxx",
  unseen: true,
};

export default Mail54;
