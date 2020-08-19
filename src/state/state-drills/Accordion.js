import React from 'react';

export default class Accordion extends React.Component {
    static defaultProps={
        sections: [] 
    };
    state = {
        activeSectionIndex: null,
    };
    handleSetActiveSecion = (sectionIndex) => {
        this.setState({ activeSectionIndex: sectionIndex })
    }
    renderItem(section, idx, activeSectionIndex) {
        return (
            <li className='Accordion_item' key={idx}>
          <button 
            type='button'
            onClick={() => this.handleSetActiveSecion(idx)}
            >
                {section.title}
          </button>
          {(activeSectionIndex === idx) && <p>{section.content}</p>}
          </li>
        )
      }

      render() {
          const { activeSectionIndex } = this.state
          const { sections } = this.props
            return (
                <ul className='Accordion'>
                    {sections.map((sections, idx))}
                    this.renderItems(section, idx, activeSectionIndex)
                )}
                </ul>
        )
      }
}


