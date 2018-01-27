import React from 'react';
import members from "../../staticData/teamMembers";
import operators from "../../staticData/operators";
const teamMembers = Object.values(members);
const teamOperators = Object.values(operators);

export default class AboutUs extends React.PureComponent {
  state = {
    member: null,
    operator: null,
    memberStyle: {},
    directorStyle: {}
  }

  expandBio = (id, type, e) => {
    const parent = e.target.closest('.container');
    const left = e.target.closest('.member-info').getBoundingClientRect().left - parent.getBoundingClientRect().left;
    const style = {
      marginLeft: left * -1
    };

    this.setState({[type]: `${type}_${id}`, [`${type}Style`]: style});
  }

  hideBio = (type) => this.setState({[type]: null});

  renderMember(member, type) {
    return (
      <div className="member" key={`${type}_${member.id}`}>
        <div className="member-info" onClick={this.expandBio.bind(this, member.id, type)}>
          <img width={120} height={120} src={member.image} className="attachment-thumbnail size-thumbnail" alt={member.name} />
          {member.name}
          <span>{member.position}</span>
          <span><i>{member.specialization}</i></span>
        </div>
        <div className={`member-bio ${this.state[type] === `${type}_${member.id}` ? ' expand' : ''}`} style={this.state[`${type}Style`]}>
          <span className="close" onClick={this.hideBio.bind(this, type)}>Close</span>
          <h3 className="font-prox">{member.name}, {member.position}</h3>
          <p>{member.bio}</p>
        </div>
      </div>
    )
  }

  render() {
    return (
      <section id="team" className="team-grid">
        <div className="container">
          <h2>Our Leadership Team</h2>
          {teamMembers.map(member => this.renderMember(member, 'member'))}
          <h2>Our Operations Team</h2>
          {teamOperators.map(operator => this.renderMember(operator, 'operator'))}
          </div>
        </section>
    )
  }
}
